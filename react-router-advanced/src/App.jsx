import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BlogPost from "./components/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <nav className="p-4 bg-gray-800 text-white flex justify-between">
        <div className="flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/post/1">Blog Post</Link>
        </div>
        <button
          onClick={() => setIsAuthenticated(!isAuthenticated)}
          className="bg-blue-600 px-3 py-1 rounded hover:bg-blue-700 transition"
        >
          {isAuthenticated ? "Logout" : "Login"}
        </button>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        {/* ✅ Protected Route Example */}
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* ✅ Dynamic Route Example */}
        <Route path="/post/:id" element={<BlogPost />} />

        {/* Catch all unmatched routes */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}
