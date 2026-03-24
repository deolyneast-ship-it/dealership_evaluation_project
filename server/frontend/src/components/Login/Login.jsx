import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // Admin credentials check
        if (email === "rose@gmail.com" && password === "123456") {
            localStorage.setItem("user_role", "admin");
            localStorage.setItem("username", "Rose");
            navigate("/admin");
        } else {
            // Standard user login
            localStorage.setItem("user_role", "user");
            navigate("/");
        }
    };

    return (
        <div className="dashboard-container">
            <form onSubmit={handleLogin} className="glass-card" style={{padding: '40px', maxWidth: '400px', margin: '100px auto'}}>
                <h2 className="cyber-title">Admin Access</h2>
                
                <input 
                    type="email" 
                    placeholder="Email Address" // Removed the specific email
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required
                    style={{
                        width: '100%', 
                        marginBottom: '15px', 
                        padding: '12px', 
                        borderRadius: '5px', 
                        border: '1px solid #444', 
                        background: '#1a1a1a', 
                        color: 'white'
                    }}
                />
                
                <input 
                    type="password" 
                    placeholder="Password" // Removed the specific password
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required
                    style={{
                        width: '100%', 
                        marginBottom: '25px', 
                        padding: '12px', 
                        borderRadius: '5px', 
                        border: '1px solid #444', 
                        background: '#1a1a1a', 
                        color: 'white'
                    }}
                />
                
                <button type="submit" className="cyber-button" style={{width: '100%'}}>
                    SIGN IN
                </button>
            </form>
        </div>
    );
};

export default Login;