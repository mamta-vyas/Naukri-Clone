// src/pages/Login.js
<<<<<<< HEAD
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
=======
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../features/auth/authSlice";
import axios from "axios"; // ensure axios is installed
>>>>>>> c03cd1d (Forntend part of app client side done)

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
<<<<<<< HEAD
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      dispatch(setUser(res.user));
      navigate("/home");
    } catch (err) {
      console.error("Login error:", err.message);
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleLogin} className="p-6 bg-white rounded shadow-md">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        {error && <p className="text-red-500">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          className="border p-2 mb-2 w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 mb-2 w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-blue-500 text-white p-2 w-full rounded hover:bg-blue-600">
          Login
        </button>
=======
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/home"); // already logged in, redirect to home
    }
  }, [user, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });
  
      // Store the token in localStorage
      localStorage.setItem("token", res.data.token);
  
      // Dispatch user data to Redux store
      dispatch(setUser(res.data.user));
  
      // Redirect to home page
      navigate("/home");
    } catch (err) {
      console.error(err.message);
      setError(err.message);
    }
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="p-6 bg-white rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-xl font-bold mb-4">Login</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}

        {!user ? (
          <>
            <input
              type="email"
              placeholder="Email"
              className="border p-2 mb-2 w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="border p-2 mb-4 w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className="bg-blue-600 text-white p-2 w-full rounded hover:bg-blue-700">
              Login
            </button>
          </>
        ) : (
          <p className="text-green-600 mb-4">You are already logged in.</p>
        )}
>>>>>>> c03cd1d (Forntend part of app client side done)
      </form>
    </div>
  );
};

export default Login;
