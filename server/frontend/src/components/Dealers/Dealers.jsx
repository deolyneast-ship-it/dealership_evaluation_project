import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Add this import

const Dealers = () => {
    const navigate = useNavigate(); // 2. Initialize the hook
    const [dealers, setDealers] = useState([]);

    useEffect(() => {
        setDealers([
            { id: 1, name: "Neon Motors", city: "Johannesburg", state: "Gauteng" },
            { id: 2, name: "Midnight Autos", city: "Cape Town", state: "Western Cape" },
            { id: 3, name: "Lavender Luxury", city: "Durban", state: "KwaZulu-Natal" }
        ]);
    }, []);

    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <h1 className="cyber-title">DEALERSHIPS NETWORK</h1>
                <p>Welcome to the central hub for local automotive partners.</p>
            </header>

            <div className="dealer-grid">
                {dealers.map(dealer => (
                    <div key={dealer.id} className="dealer-card glass-card">
                        <div className="card-accent"></div>
                        <h3>{dealer.name}</h3>
                        <p className="location-text">📍 {dealer.city}, {dealer.state}</p>
                        
                        {/* 3. Update the button to navigate to the dealer's ID */}
                        <button 
                            className="cyber-button" 
                            onClick={() => navigate(`/dealer/${dealer.id}`)}
                        >
                            VIEW REVIEWS
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dealers;