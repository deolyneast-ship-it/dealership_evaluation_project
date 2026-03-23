import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Dealers from "./components/Dealers/Dealers";
import Dealer from "./components/Dealers/Dealer";
import PostReview from "./components/Dealers/PostReview";
import Login from "./components/Login/Login";

function App() {
  return (
    <div>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Dealers />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dealer/:id" element={<Dealer />} />
        <Route path="/postreview/:id" element={<PostReview />} />
        {/* The built-in Django Admin is accessed via /admin (Backend) */}
      </Routes>
    </div>
  );
}
export default App;
