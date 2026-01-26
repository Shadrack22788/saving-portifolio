export default function MemberList({ member }) {
  return (
    <div className="border-l-2 border-gray-300 pl-3 py-1 bg-gray-100 rounded mb-2">
      <p className="text-gray-700 font-medium">{member.name}</p>
      {/* Later you can add member balance, add saving/withdrawal buttons here */}
    </div>
  );
}
