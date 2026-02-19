import { useAuth } from "../context/AuthContext";

export default function ManagerDashboard() {
  const { user } = useAuth();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Manager Dashboard</h1>

      <p className="mb-4">
        Welcome, <span className="font-semibold">{user?.name}</span>!
      </p>

      <div className="bg-white shadow rounded p-4 mb-6">
        <h2 className="text-xl font-semibold mb-2">Manager Info</h2>
        <p><strong>Name:</strong> {user?.name}</p>
        <p><strong>Role:</strong> {user?.role}</p>
      </div>

      <div className="bg-white shadow rounded p-4 mb-6">
        <h2 className="text-xl font-semibold mb-2">Reports Overview</h2>
        <p>Here you can view and manage all reports from agents and members.</p>
      </div>

      <div className="bg-white shadow rounded p-4">
        <h2 className="text-xl font-semibold mb-2">Manage Agents</h2>
        <p>Later, you will be able to add/edit/remove agents here.</p>
      </div>
    </div>
  );
}
