import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { setUser } from "../features/auth/authSlice";

const SignUp = () => {
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/home"); // already logged in
    }
  }, [user, navigate]);

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://naukri-clone-varr.onrender.com/api/auth/register", {
        name,
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      dispatch(setUser(res.data.user));
      navigate("/home");
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSignup}
        className="p-6 bg-white rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-xl font-bold mb-4">Sign Up</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}

        {!user ? (
          <>
            <input
              type="text"
              placeholder="Name"
              className="border p-2 mb-2 w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
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
            <button className="bg-green-600 text-white p-2 w-full rounded hover:bg-green-700">
              Sign Up
            </button>
            <p className="mt-4 text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 underline">
                Login
              </Link>
            </p>
          </>
        ) : (
          <p className="text-green-600 mb-4">You are already logged in.</p>
        )}
      </form>
    </div>
  );
};

export default SignUp;
