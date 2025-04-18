// src/components/Header.js
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
<<<<<<< HEAD
import { logoutUser } from "../features/auth/authSlice";
=======
import { logout } from "../features/auth/authSlice";
>>>>>>> c03cd1d (Forntend part of app client side done)
import { auth } from "../firebase";

const Header = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut();
<<<<<<< HEAD
    dispatch(logoutUser());
=======
    dispatch(logout());
>>>>>>> c03cd1d (Forntend part of app client side done)
    navigate("/");
  };

  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
  
      <nav className="space-x-4">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        {user && (
          <button
            onClick={handleLogout}
            className="text-red-500 underline ml-2"
          >
            Logout
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
