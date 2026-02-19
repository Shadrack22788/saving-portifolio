import { useState } from "react";
import { useMembers } from "../context/MemberContext";
import { useAuth } from "../context/AuthContext";

export default function AgentDashboard() {
  const { user } = useAuth(); // current agent
  const { addMember, getAgentMembers } = useMembers();

  const [newMemberName, setNewMemberName] = useState("");

  // Get members only for this agent
  const members = getAgentMembers(user.id);

  const handleAddMember = (e) => {
    e.preventDefault();
    if (!newMemberName.trim()) return alert("Enter member name");

    addMember(
      { name: newMemberName }, // member data
      user.id // agentId
    );

    setNewMemberName("");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Agent Dashboard</h1>

      {/* Add Member Form */}
      <form
        onSubmit={handleAddMember}
        className="mb-6 flex gap-2 items-center"
      >
        <input
          type="text"
          placeholder="New Member Name"
          value={newMemberName}
          onChange={(e) => setNewMemberName(e.target.value)}
          className="border p-2 rounded flex-1"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Member
        </button>
      </form>

      {/* Members List */}
      <div>
        <h2 className="text-xl font-semibold mb-2">My Members</h2>
        {members.length === 0 ? (
          <p className="text-gray-500">No members yet.</p>
        ) : (
          <ul className="list-disc ml-5 space-y-1">
            {members.map((m) => (
              <li key={m.id}>
                {m.name} (Total Savings: ${m.totalSavings})
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
