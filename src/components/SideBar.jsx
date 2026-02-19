import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaPiggyBank, FaChartBar, FaUser, FaBars } from "react-icons/fa";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
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
          <li>
            <Link to="/dashboard" className="flex items-center gap-3 hover:bg-blue-500 p-2 rounded">
              <FaHome /> Dashboard
            </Link>
          </li>

          <li>
            <Link to="/savings" className="flex items-center gap-3 hover:bg-blue-500 p-2 rounded">
              <FaPiggyBank /> Savings
            </Link>
          </li>

          <li>
            <Link to="/reports" className="flex items-center gap-3 hover:bg-blue-500 p-2 rounded">
              <FaChartBar /> Reports
            </Link>
          </li>

          <li>
            <Link to="/profile" className="flex items-center gap-3 hover:bg-blue-500 p-2 rounded">
              <FaUser /> Profile
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
