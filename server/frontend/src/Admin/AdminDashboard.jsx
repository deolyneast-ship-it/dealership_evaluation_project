import React, { useState } from 'react';

const AdminDashboard = () => {
    // Dummy Data for Dealer ID Reviews
    const [reviews, setReviews] = useState([
        { id: 101, dealer_id: 1, user: "Kelebogile M.", comment: "Great selection of SUVs!", status: "Pending" },
        { id: 102, dealer_id: 2, user: "Pieter S.", comment: "Service was a bit slow on Tuesday.", status: "Approved" },
        { id: 103, dealer_id: 1, user: "Thandi N.", comment: "The lilac color scheme in the showroom is amazing.", status: "Pending" },
        { id: 104, dealer_id: 3, user: "John D.", comment: "Very professional staff.", status: "Approved" }
    ]);

    const deleteReview = (id) => {
        setReviews(reviews.filter(r => r.id !== id));
    };

    return (
        <div className="dashboard-container">
            <h1 className="cyber-title">Admin Review Management</h1>
            <p style={{color: '#888', marginBottom: '30px'}}>Welcome back, Rose. Managing reviews for all Dealership IDs.</p>

            <div className="glass-card" style={{padding: '20px', overflowX: 'auto'}}>
                <table style={{width: '100%', color: 'white', borderCollapse: 'collapse', textAlign: 'left'}}>
                    <thead>
                        <tr style={{borderBottom: '2px solid #E0B0FF', color: '#E0B0FF'}}>
                            <th style={{padding: '15px'}}>Dealer ID</th>
                            <th>Reviewer</th>
                            <th>Comment</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reviews.map(rev => (
                            <tr key={rev.id} style={{borderBottom: '1px solid #333'}}>
                                <td style={{padding: '15px', fontWeight: 'bold'}}>#{rev.dealer_id}</td>
                                <td>{rev.user}</td>
                                <td style={{fontSize: '0.9rem', color: '#ccc'}}>{rev.comment}</td>
                                <td>
                                    <span style={{color: rev.status === 'Pending' ? '#ffa500' : '#00ff00'}}>
                                        {rev.status}
                                    </span>
                                </td>
                                <td>
                                    <button 
                                        onClick={() => deleteReview(rev.id)}
                                        style={{background: 'none', border: '1px solid #ff4d4d', color: '#ff4d4d', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer'}}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminDashboard;