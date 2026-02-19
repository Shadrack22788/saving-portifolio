// src/pages/MemberDashboard.jsx

import { useAuth } from "../context/AuthContext";

export default function MemberDashboard() {
  const { user } = useAuth();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Member Dashboard</h1>
      
      <p className="mb-4">
        Welcome, <span className="font-semibold">{user?.name}</span>!
      </p>

      <div className="bg-white shadow rounded p-4">
        <h2 className="text-xl font-semibold mb-2">My Info</h2>
        <p><strong>Name:</strong> {user?.name}</p>
        <p><strong>Role:</strong> {user?.role}</p>
      </div>

      <div className="mt-6 bg-white shadow rounded p-4">
        <h2 className="text-xl font-semibold mb-2">My Savings</h2>
        <p>You don’t have any savings yet.</p>
        {/* Later we can fetch and display actual savings */}
      </div>

      <div className="mt-6 bg-white shadow rounded p-4">
        <h2 className="text-xl font-semibold mb-2">Reports</h2>
        <p>Your reports will appear here.</p>
      </div>
    </div>
  );
}
