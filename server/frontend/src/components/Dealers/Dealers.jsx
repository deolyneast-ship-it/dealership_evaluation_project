import React, { useState } from 'react';

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
