import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const PostReview = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [reviewText, setReviewText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // This is where you'd normally send the data to the backend
        console.log(`Review for Dealer ${id}: ${reviewText}`);
        
        // After submitting, go back to the dealer's review page
        alert("Review submitted successfully!");
        navigate(`/dealer/${id}`);
    };

    return (
        <div className="dashboard-container" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h1 className="cyber-title">Post a Review</h1>
            <hr style={{ borderColor: 'rgba(224, 176, 255, 0.3)', marginBottom: '30px' }} />
            
            <form onSubmit={handleSubmit} className="cyber-form">
                <label style={{ color: '#E0B0FF', display: 'block', marginBottom: '10px' }}>
                    Write your review for Dealer {id}:
                </label>
                
                <textarea 
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    placeholder="Tell us about your experience..."
                    required
                    style={{
                        width: '100%',
                        height: '150px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid #444',
                        borderRadius: '10px',
                        color: 'white',
                        padding: '15px',
                        fontSize: '1rem',
                        outline: 'none',
                        marginBottom: '20px'
                    }}
                />

                <div style={{ display: 'flex', gap: '15px' }}>
                    <button type="submit" className="cyber-button">
                        Submit Review
                    </button>
                    
                    <button 
                        type="button" 
                        onClick={() => navigate(-1)} 
                        style={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            color: 'white',
                            border: '1px solid #444',
                            padding: '10px 25px',
                            borderRadius: '8px',
                            cursor: 'pointer'
                        }}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PostReview;