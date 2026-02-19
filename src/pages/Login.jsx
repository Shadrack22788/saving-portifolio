import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [role, setRole] = useState("");
  const [name, setName] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!name || !role) return alert("Enter name and role");

    // Call login with proper user object
    login({
      id: Date.now(), // simple unique id
      name,
      role,
    });

    if (role === "agent") {
      navigate("/agent");
    } else if (role === "manager") {
      navigate("/dashboard"); // manager dashboard
    } else if (role === "member") {
      navigate("/member"); // create member dashboard route
    } else {
      navigate("/dashboard"); // fallback
    }

  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Login</h1>

      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full rounded"
        />

        <select
          className="border p-2 w-full rounded"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">Select Role</option>
          <option value="agent">Agent</option>
          <option value="manager">Manager</option>
          <option value="member">Member</option>
        </select>

        <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">
          Login
        </button>
      </form>
    </div>
  );
}
