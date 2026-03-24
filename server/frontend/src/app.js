import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Dealers from "./components/Dealers/Dealers";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import PostReview from "./components/Dealers/PostReview";

// These are sitting directly in /src based on your screenshot
import ReviewsDashboard from "./ReviewsDashboard/ReviewsDashboard"; 
import AdminDashboard from "./Admin/AdminDashboard"; 

const ProtectedAdminRoute = ({ children }) => {
    const userRole = localStorage.getItem("user_role"); 
    if (userRole !== "admin") {
        return <Navigate to="/login" replace />;
    }
    return children;
};

function App() {
  return (
    <div className="app-layout">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Dealers />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dealer/:id" element={<ReviewsDashboard />} />
          <Route path="/postreview/:id" element={<PostReview />} />
          <Route 
            path="/admin" 
            element={
              <ProtectedAdminRoute>
                <AdminDashboard />
              </ProtectedAdminRoute>
            } 
          />
        </Routes>
      </main>
    </div>
  );
}

// CRITICAL: This line fixes the 'export default was not found' error
export default App;