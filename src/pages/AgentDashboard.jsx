import { useState } from "react";

export default function AgentDashboard({ groups }) {
  const [allGroups, setAllGroups] = useState(groups);
  const [newMemberName, setNewMemberName] = useState("");
  const [selectedGroup, setSelectedGroup] = useState(allGroups[0].groupholders[0].id);

  const handleAddMember = (e) => {
    e.preventDefault();
    if (!newMemberName) return alert("Enter member name");

    // Clone state
    const updatedGroups = allGroups.map(group => ({
      ...group,
      groupholders: group.groupholders.map(g => {
        if (g.id === selectedGroup) {
          const newId = g.members.length + 1;
          return {
            ...g,
            members: [...g.members, { id: newId, name: newMemberName, savings: [] }]
          };
        }
        return g;
      })
    }));

    setAllGroups(updatedGroups);
    setNewMemberName("");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Agent Dashboard</h1>

      <form onSubmit={handleAddMember} className="mb-6 flex gap-2 items-center">
        <select
          className="border p-2 rounded"
          value={selectedGroup}
          onChange={(e) => setSelectedGroup(Number(e.target.value))}
        >
          {allGroups.flatMap(g => g.groupholders).map(g => (
            <option key={g.id} value={g.id}>{g.name} ({g.id})</option>
          ))}
        </select>

        <input
          type="text"
          placeholder="New Member Name"
          value={newMemberName}
          onChange={(e) => setNewMemberName(e.target.value)}
          className="border p-2 rounded"
        />

        <button type="submit" className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700">
          Add Member
        </button>
      </form>

      <div>
        {allGroups.map(group => (
          <div key={group.id} className="mb-4">
            <h2 className="font-semibold">{group.name}</h2>
            {group.groupholders.map(g => (
              <div key={g.id} className="ml-4">
                <h3 className="font-medium">{g.name}</h3>
                <ul className="ml-4 list-disc">
                  {g.members.map(m => (
                    <li key={m.id}>{m.name}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
