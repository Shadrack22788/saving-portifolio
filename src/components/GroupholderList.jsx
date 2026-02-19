import { useState } from "react";
import MemberList from "./MemberList";

export default function GroupholderList({ groupholder }) {
  const [showMembers, setShowMembers] = useState(false);

  return (
    <div className="border-l-4 border-blue-400 pl-4 p-2 rounded bg-gray-50">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-gray-700">
          {groupholder.name} ({groupholder.members.length} members)
        </h3>
        <button
          className="text-sm text-blue-500 underline"
          onClick={() => setShowMembers(!showMembers)}
        >
          {showMembers ? "Hide" : "View Members"}
        </button>
      </div>

      {showMembers && (
        <div className="mt-2 space-y-1">
          {groupholder.members.map((member) => (
            <MemberList key={member.id} member={member} />
          ))}
        </div>
      )}
    </div>
  );
}
