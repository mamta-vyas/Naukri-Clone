// src/components/Header.js
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";


const Header = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {

    dispatch(logout());
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
