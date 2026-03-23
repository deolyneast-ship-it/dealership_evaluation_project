import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const PostReview = () => {
  const [review, setReview] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const post_review = async () => {
    const res = await fetch(`/djangoapp/add_review`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ "dealer_id": id, "review": review, "name": sessionStorage.getItem("username") })
    });
    if (res.status === 200) { navigate(`/dealer/${id}`); }
  };

  return (
    <div className="container">
      <h2>Post a Review</h2>
      <textarea onChange={(e) => setReview(e.target.value)} placeholder="Write your review..."></textarea>
      <button onClick={post_review}>Submit Review</button>
    </div>
  );
}
export default PostReview;
