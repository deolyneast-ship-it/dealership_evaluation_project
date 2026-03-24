import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        
        console.log("Account Created!");
        
        // After registering, send them to the login page
        navigate("/login");
    };

    return (
        <div className="auth-wrapper">
            <div className="glass-card">
                <h2 className="cyber-title">Create Account</h2>
                <form onSubmit={handleRegister} className="cyber-form">
                    <input type="text" placeholder="Username" required />
                    <input type="email" placeholder="Email Address" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit" className="cyber-button">Register Now</button>
                </form>
            </div>
        </div>
    );
};

export default Register;