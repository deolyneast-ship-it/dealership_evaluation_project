import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // In a real app, you'd clear tokens/session here
        console.log("User logged out");
        
        // Redirect to login page
        navigate("/login");
    };

    return (
        <nav className="cyber-navbar">
            <div className="nav-logo">
                <Link to="/">DEALERSHIP CENTRAL</Link>
            </div>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/admin">Admin</Link>
                {/* Logout Button */}
                <button className="logout-btn" onClick={handleLogout}>
                    LOGOUT
                </button>
            </div>
        </nav>
    );
};

export default Navbar;