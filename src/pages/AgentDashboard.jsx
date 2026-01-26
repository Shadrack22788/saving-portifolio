export default function AgentDashboard({ groups }) {
  const today = new Date().toISOString().split("T")[0];

  const savedToday = [];
  const notSavedToday = [];

  groups.forEach((group) => {
    group.members.forEach((member) => {
      const hasSavedToday = member.savings?.some(
        (s) => s.type === "deposit" && s.date === today
      );

      if (hasSavedToday) {
        savedToday.push({ ...member, groupName: group.name });
      } else {
        notSavedToday.push({ ...member, groupName: group.name });
      }
    });
  });

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Agent Dashboard</h1>

      {/* Saved Today */}
      <section className="mb-6">
        <h2 className="text-green-600 font-semibold mb-2">
          ✅ Saved Today ({savedToday.length})
        </h2>

        {savedToday.map((m) => (
          <div key={m.id} className="bg-green-100 p-2 rounded mb-2">
            <p className="font-medium">{m.name}</p>
            <p className="text-sm text-gray-600">Group: {m.groupName}</p>
          </div>
        ))}
      </section>

      {/* Not Saved Today */}
      <section>
        <h2 className="text-red-600 font-semibold mb-2">
          ❌ Not Saved Today ({notSavedToday.length})
        </h2>

        {notSavedToday.map((m) => (
          <div key={m.id} className="bg-red-100 p-2 rounded mb-2">
            <p className="font-medium">{m.name}</p>
            <p className="text-sm text-gray-600">Group: {m.groupName}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
