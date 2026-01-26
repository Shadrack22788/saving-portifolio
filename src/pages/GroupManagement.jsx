import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import GroupCard from "../compoents/GroupCard"; // fix typo: "compoents" → "components"

export default function GroupManagement() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [checkedAuth, setCheckedAuth] = useState(false);

  // Updated mock data: each groupholder has members
  const [groups, setGroups] = useState([
    {
      id: 1,
      name: "Group A",
      groupholders: [
        {
          id: 1,
          name: "John Doe",
          members: [
            { id: 1, name: "Alice" },
            { id: 2, name: "Bob" },
            { id: 3, name: "Charlie" },
          ],
        },
        {
          id: 2,
          name: "Mary Jane",
          members: [
            { id: 4, name: "David" },
            { id: 5, name: "Emma" },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Group B",
      groupholders: [
        {
          id: 3,
          name: "Alice Smith",
          members: [
            { id: 6, name: "Frank" },
            { id: 7, name: "Grace" },
          ],
        },
        {
          id: 4,
          name: "Bob Brown",
          members: [
            { id: 8, name: "Hannah" },
            { id: 9, name: "Ian" },
          ],
        },
      ],
    },
  ]);

  useEffect(() => {
    if (!user) navigate("/login");
    setCheckedAuth(true);
  }, [user]);

  if (!checkedAuth) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Groups Management</h1>
        <button
          className="px-3 py-1 bg-red-400 text-white rounded"
          onClick={logout}
        >
          Logout
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {groups.map((group) => (
          <GroupCard key={group.id} group={group} />
        ))}
      </div>
    </div>
  );
}
