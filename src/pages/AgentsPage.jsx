import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function AgentsPage() {
  const { user } = useAuth();
  const [agents, setAgents] = useState([
    { id: 1, name: "John Doe", role: "agent" },
    { id: 2, name: "Jane Smith", role: "agent" },
  ]);
  const [newAgentName, setNewAgentName] = useState("");

  const handleAddAgent = (e) => {
    e.preventDefault();
    if (!newAgentName) return alert("Enter agent name");
    const newId = agents.length + 1;
    setAgents([...agents, { id: newId, name: newAgentName, role: "agent" }]);
    setNewAgentName("");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Agents Management</h1>

      {/* Add Agent Form (Manager only) */}
      {user.role === "manager" && (
        <form onSubmit={handleAddAgent} className="mb-6 flex gap-2 items-center">
          <input
            type="text"
            placeholder="New Agent Name"
            value={newAgentName}
            onChange={(e) => setNewAgentName(e.target.value)}
            className="border p-2 rounded"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700"
          >
            Add Agent
          </button>
        </form>
      )}

      {/* Agents List */}
      <div>
        {agents.map((a) => (
          <div key={a.id} className="mb-2 p-2 border rounded flex justify-between items-center">
            <span>{a.name} (Role: {a.role})</span>

            {/* Manager can remove */}
            {user.role === "manager" && (
              <button
                onClick={() => setAgents(agents.filter((ag) => ag.id !== a.id))}
                className="bg-red-500 px-2 py-1 text-white rounded hover:bg-red-600"
              >
                Remove
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
