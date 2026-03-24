import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Reviews.css'; 

const ReviewsDashboard = () => {
    const { id } = useParams(); // Gets the Dealer ID from the URL
    const navigate = useNavigate();

    // Dummy data to simulate real reviews
    const dummyReviews = [
        { id: 101, user: "Kelebogile M.", rating: 5, comment: "Excellent service! The staff was incredibly helpful with my financing.", date: "March 15, 2026" },
        { id: 102, user: "Pieter S.", rating: 4, comment: "Great selection of vehicles. The showroom experience was top-tier.", date: "March 10, 2026" },
        { id: 103, user: "Thandi N.", rating: 5, comment: "The most seamless car buying process I've ever had. Highly recommend!", date: "February 28, 2026" }
    ];

    return (
        <div className="reviews-container">
            <button className="back-link" onClick={() => navigate(-1)}>← Back to Dealers</button>
            
            <header className="reviews-header">
                <h1 className="cyber-title">Customer Reviews</h1>
                <p className="dealer-id-tag">Showing results for Dealer ID: #{id}</p>
            </header>

            <div className="reviews-list">
                {dummyReviews.map(review => (
                    <div key={review.id} className="review-card glass-card">
                        <div className="review-top">
                            <span className="user-name">{review.user}</span>
                            <span className="review-rating">{"⭐".repeat(review.rating)}</span>
                        </div>
                        <p className="review-comment">"{review.comment}"</p>
                        <span className="review-date">{review.date}</span>
                    </div>
                ))}
            </div>
            
            <button className="cyber-button action-btn" onClick={() => navigate(`/postreview/${id}`)}>
                WRITE A REVIEW
            </button>
        </div>
    );
};

export default ReviewsDashboard;