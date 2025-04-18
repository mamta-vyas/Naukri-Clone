
// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import About from "./pages/About";
import JobDetail from "./pages/JobDetail";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {

  const user = useSelector((state) => state.auth.user);

  // ✅ If user is not logged in, show only SignUp page
  if (!user) {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
      
          </Routes>
      </Router>
    );
  }



  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/job/:title" element={<JobDetail />} />
            <Route path="/login" element={<Login />} />
           

            {/* Redirect root to SignUp page */}
            <Route
              path="/"
              element={
                <Navigate to="/signup" />
              }
            />
            
            {/* Public Routes */}
            <Route
              path="/login"
              element={<Login />} // Login page
            />
            <Route path="/signup" element={<SignUp />} /> {/* SignUp page */}

            {/* Protected Routes */}
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/about"
              element={
                <ProtectedRoute>
                  <About />
                </ProtectedRoute>
              }
            />
            <Route
              path="/job/:title"
              element={
                <ProtectedRoute>
                  <JobDetail />
                </ProtectedRoute>
              }
            />

            {/* Catch-all */}
            <Route path="*" element={<Navigate to="/" />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
