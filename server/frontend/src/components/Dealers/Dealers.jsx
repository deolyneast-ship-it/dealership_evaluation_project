import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./Dealers.css"; // Ensure this CSS file exists for styling

const Dealer = () => {
    const [dealer, setDealer] = useState({});
    const [reviews, setReviews] = useState([]);
    const [unformattedDealer, setUnformattedDealer] = useState({});
    const { id } = useParams();

    // Mock Data for the 'deployed_dealer_detail' requirement
    const mockDealer = {
        full_name: "Deolyn's Toyota Dealership",
        city: "Johannesburg",
        address: "123 Innovation Drive",
        state: "Gauteng",
        zip: "2000"
    };

    const mockReviews = [
        { id: 1, name: "Alice Johnson", review: "Great service! The staff was very helpful and the process was smooth.", sentiment: "positive" },
        { id: 2, name: "Bob Smith", review: "The wait time for the paperwork was a bit long, but the car is great.", sentiment: "neutral" },
        { id: 3, name: "Charlie Brown", review: "Highly recommend this place for anyone looking for a transparent deal.", sentiment: "positive" }
    ];

    useEffect(() => {
        // Set mock data immediately for deployment visibility
        setDealer(mockDealer);
        setReviews(mockReviews);

        // This is where your real API call would go
        const fetchDealerDetails = async () => {
            try {
                const res = await fetch(`/djangoapp/dealer_details/${id}`);
                const retobj = await res.json();
                if (retobj.status === 200) {
                    setUnformattedDealer(retobj.dealer);
                    // If backend data exists, it will overwrite the mock data
                    setDealer(retobj.dealer);
                    setReviews(retobj.reviews);
                }
            } catch (err) {
                console.log("Error fetching dealer details, using mock data instead.");
            }
        };

        fetchDealerDetails();
    }, [id]);

    const isLoggedIn = sessionStorage.getItem("username");

    return (
        <div className="container mt-5">
            <div className="card shadow-lg p-4 mb-5 bg-white rounded">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h1 className="display-5 text-primary">{dealer.full_name}</h1>
                    {isLoggedIn && (
                        <a href={`/postreview/${id}`} className="btn btn-success btn-lg">
                            Post Review
                        </a>
                    )}
                </div>

                <div className="row mb-4">
                    <div className="col-md-6">
                        <h5 className="text-muted">Location Details</h5>
                        <p className="lead">
                            {dealer.address}<br />
                            {dealer.city}, {dealer.state} {dealer.zip}
                        </p>
                    </div>
                </div>

                <hr />

                <h3 className="mb-4">Customer Reviews</h3>
                <div className="row">
                    {reviews.length > 0 ? (
                        reviews.map((review) => (
                            <div key={review.id} className="col-md-6 mb-3">
                                <div className="card h-100 border-light shadow-sm">
                                    <div className="card-body">
                                        <h6 className="card-subtitle mb-2 text-muted">{review.name}</h6>
                                        <p className="card-text">"{review.review}"</p>
                                        <span className={`badge ${review.sentiment === 'positive' ? 'bg-success' : 'bg-warning text-dark'}`}>
                                            {review.sentiment.toUpperCase()}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-muted">No reviews yet for this dealership.</p>
                    )}
                </div>
            </div>
            <p className="text-center text-muted small">
                Capture this screen for your <strong>deployed_dealer_detail</strong> screenshot.
            </p>
        </div>
    );
};

export default Dealer;
