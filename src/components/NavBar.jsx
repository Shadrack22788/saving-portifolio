import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { useAuth } from "../context/AuthContext";

import logo from "../assets/Logo.png"; // import your logo

export default function NavBar() {
 const { user, logout } = useAuth();
  const location = useLocation();

  const linkClass = (path) =>
    `px-3 py-2 rounded-lg text-sm font-medium transition ${
      location.pathname === path
        ? "bg-blue-600 text-white"
        : "text-slate-700 hover:bg-slate-200"
    }`;

  return (
    <nav className="bg-white border-b border-slate-200 px-6 py-3 flex justify-between items-center">
      
      {/* Logo + Title */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="Saving Platform Logo" className="h-24 w-24 object-contain" />
        <h1 className="text-xl font-bold text-blue-600">Saving Platform</h1>
      </div>

      {/* Links */}
      {user && (
        <div className="flex items-center gap-4">
          <Link to="/dashboard" className={linkClass("/dashboard")}>
            Dashboard
          </Link>

          <Link to="/groups" className={linkClass("/groups")}>
            Groups
          </Link>

          <Link to="/agent" className={linkClass("/agent")}>
            Today Savings
          </Link>

          <button
            onClick={logout}
            className="px-3 py-2 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}
