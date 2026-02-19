import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function MembersPage() {
  const { user } = useAuth();
  const [members, setMembers] = useState([
    { id: 1, name: "Alice", savings: [] },
    { id: 2, name: "Bob", savings: [] },
  ]);
  const [newMemberName, setNewMemberName] = useState("");

  const handleAddMember = (e) => {
    e.preventDefault();
    if (!newMemberName) return alert("Enter member name");
    const newId = members.length + 1;
    setMembers([...members, { id: newId, name: newMemberName, savings: [] }]);
    setNewMemberName("");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Members Management</h1>

      {/* Add Member Form */}
      {user.role === "agent" && (
        <form onSubmit={handleAddMember} className="mb-6 flex gap-2 items-center">
          <input
            type="text"
            placeholder="New Member Name"
            value={newMemberName}
            onChange={(e) => setNewMemberName(e.target.value)}
            className="border p-2 rounded"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700"
          >
            Add Member
          </button>
        </form>
      )}

      {/* Members List */}
      <div>
        {members.map((m) => (
          <div key={m.id} className="mb-2 p-2 border rounded flex justify-between items-center">
            <span>{m.name} (Savings: {m.savings.length})</span>

            {/* Agents cannot remove */}
            {user.role === "manager" && (
              <button
                onClick={() => setMembers(members.filter((mem) => mem.id !== m.id))}
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
