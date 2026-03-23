import React from 'react';

const Navbar = () => {
    const username = sessionStorage.getItem("username");

    const logout = () => {
        sessionStorage.clear();
        window.location.href = "/";
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Dealership Central</a>
                <div className="navbar-nav me-auto">
                    <a className="nav-link" href="/">Home</a>
                </div>
                <div className="navbar-nav">
                    {username ? (
                        <>
                            <span className="nav-link text-info">Hello, {username}</span>
                            <button className="btn btn-outline-light ms-2" onClick={logout}>Logout</button>
                        </>
                    ) : (
                        <a className="nav-link" href="/login">Login</a>
                    )}
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
