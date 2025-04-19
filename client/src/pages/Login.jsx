// src/pages/Login.js
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../features/auth/authSlice";
import axios from "axios"; // ensure axios is installed

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
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
      const res = await axios.post("https://naukri-clone-varr.onrender.com/api/auth/login", {
        email,
        password,
      });
  
      localStorage.setItem("token", res.data.token);
      dispatch(setUser(res.data.user));
      navigate("/home");
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Login failed");
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
      </form>
    </div>
  );
};

export default Login;
