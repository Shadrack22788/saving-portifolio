import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import GroupCard from "../components/GroupCard";

export default function GroupManagement() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [checkedAuth, setCheckedAuth] = useState(false);

  const [groups, setGroups] = useState([
    {
      id: 1,
      name: "Group A",
      groupholders: [
        {
          id: 1,
          name: "John Doe",
          members: [
            {
              id: 1,
              name: "Alice",
              savings: [
                { id: 1, amount: 10, type: "deposit", date: "2026-01-26" },
              ],
            },
            {
              id: 2,
              name: "Bob",
              savings: [],
            },
            {
              id: 3,
              name: "Charlie",
              savings: [
                { id: 2, amount: 5, type: "deposit", date: "2026-01-25" },
              ],
            },
          ],
        },
        {
          id: 2,
          name: "Mary Jane",
          members: [
            {
              id: 4,
              name: "David",
              savings: [],
            },
            {
              id: 5,
              name: "Emma",
              savings: [
                { id: 3, amount: 20, type: "deposit", date: "2026-01-24" },
              ],
            },
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
            {
              id: 6,
              name: "Frank",
              savings: [],
            },
            {
              id: 7,
              name: "Grace",
              savings: [
                { id: 4, amount: 15, type: "deposit", date: "2026-01-23" },
              ],
            },
          ],
        },
        {
          id: 4,
          name: "Bob Brown",
          members: [
            {
              id: 8,
              name: "Hannah",
              savings: [],
            },
            {
              id: 9,
              name: "Ian",
              savings: [],
            },
          ],
        },
      ],
    },
  ]);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      setCheckedAuth(true);
    }
  }, [user, navigate]);

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