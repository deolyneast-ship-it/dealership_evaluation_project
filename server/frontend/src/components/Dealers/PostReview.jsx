import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PostReview = () => {
    const [review, setReview] = useState("");
    const navigate = useNavigate();

    const handleSubmit = () => {
        alert("Review submitted successfully!");
        navigate("/");
    };

    return (
        <div className="container mt-5">
            <div className="card p-4 shadow">
                <h2>Write a Review</h2>
                <div className="mb-3">
                    <label className="form-label">Your Experience</label>
                    <textarea 
                        className="form-control" 
                        rows="5" 
                        placeholder="Tell us about your visit..."
                        onChange={(e) => setReview(e.target.value)}
                    ></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleSubmit}>Submit Review</button>
            </div>
        </div>
    );
};
export default PostReview;
