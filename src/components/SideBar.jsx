// Sidebar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaPiggyBank, FaChartBar, FaUser, FaUsers, FaFileAlt, FaBars } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();

  const roleLinks = {
    agent: [
      { name: "Agent Dashboard", path: "/agent", icon: <FaHome /> },
      { name: "Savings", path: "/savings", icon: <FaPiggyBank /> },
      { name: "Members", path: "/members", icon: <FaUsers /> }, // ✅ For agents
      { name: "Profile", path: "/profile", icon: <FaUser /> },
    ],
    manager: [
      { name: "Manager Dashboard", path: "/dashboard", icon: <FaHome /> },
      { name: "Reports", path: "/reports", icon: <FaChartBar /> },
      { name: "Agents", path: "/agents", icon: <FaUsers /> }, // ✅ For managers
      { name: "Profile", path: "/profile", icon: <FaUser /> },
    ],
    member: [
      { name: "Member Dashboard", path: "/member", icon: <FaHome /> },
      { name: "Profile", path: "/profile", icon: <FaUser /> },
    ],
  };

  const links = user ? roleLinks[user.role] || [] : [];

  return (
    <>
      {/* Mobile toggle */}
      <div className="md:hidden p-4">
        <button onClick={() => setIsOpen(!isOpen)}>
          <FaBars size={24} />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`bg-blue-600 text-white w-64 min-h-screen fixed top-0 left-0 transform 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        transition-transform duration-300 md:translate-x-0 md:static`}
      >
        <div className="p-6 text-2xl font-bold border-b border-blue-400">
          Saving App
        </div>
        <ul className="p-4 space-y-4">
          {links.map((link, idx) => (
            <li key={idx}>
              <Link
                to={link.path}
                className="flex items-center gap-3 hover:bg-blue-500 p-2 rounded"
              >
                {link.icon} {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
