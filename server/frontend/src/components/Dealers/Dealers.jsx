import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Dealer = () => {
    const { id } = useParams();
    const isLoggedIn = sessionStorage.getItem("username");

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center">
                <h1>Dealer Details</h1>
                {isLoggedIn && <a href={`/postreview/${id}`} className="btn btn-success">Post Review</a>}
            </div>
            <hr />
            <h3>Customer Reviews</h3>
            <div className="row">
                <div className="col-md-6 mb-3">
                    <div className="card shadow-sm p-3">
                        <p className="mb-1">"Excellent selection and friendly staff!"</p>
                        <span className="badge bg-success w-25">Positive</span>
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                    <div className="card shadow-sm p-3">
                        <p className="mb-1">"The service was a bit slow today."</p>
                        <span className="badge bg-warning text-dark w-25">Neutral</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
const Dealers = () => {
    const allDealers = [
        { id: 1, full_name: "Deolyn's Toyota", city: "Johannesburg", state: "Gauteng", address: "123 Main St" },
        { id: 2, full_name: "Cape Town Luxury Cars", city: "Cape Town", state: "Western Cape", address: "45 Beach Rd" },
        { id: 3, full_name: "Pretoria Auto", city: "Pretoria", state: "Gauteng", address: "99 Church St" }
    ];

    const [dealers, setDealers] = useState(allDealers);

    const filterState = (state) => {
        if (!state) setDealers(allDealers);
        else setDealers(allDealers.filter(d => d.state === state));
    };

    return (
        <div className="container mt-4">
            <h2>Our Dealerships</h2>
            <select className="form-select mb-4 w-25" onChange={(e) => filterState(e.target.value)}>
                <option value="">All States</option>
                <option value="Gauteng">Gauteng</option>
                <option value="Western Cape">Western Cape</option>
            </select>
            <table className="table table-hover">
                <thead className="table-dark">
                    <tr><th>Name</th><th>City</th><th>State</th><th>Address</th></tr>
                </thead>
                <tbody>
                    {dealers.map(d => (
                        <tr key={d.id}>
                            <td><a href={`/dealer/${d.id}`}>{d.full_name}</a></td>
                            <td>{d.city}</td><td>{d.state}</td><td>{d.address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default Dealers;
