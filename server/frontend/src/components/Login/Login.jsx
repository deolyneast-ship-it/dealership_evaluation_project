import React, { useState } from 'react';

const Login = () => {
    const [name, setName] = useState("");

    const handleLogin = () => {
        if(name) {
            sessionStorage.setItem("username", name);
            window.location.href = "/";
        }
    };

    return (
        <div className="container mt-5 w-25">
            <div className="card p-4">
                <h3>Login</h3>
                <input className="form-control mb-3" placeholder="Username" onChange={(e) => setName(e.target.value)} />
                <button className="btn btn-primary w-100" onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
};
export default Login;
