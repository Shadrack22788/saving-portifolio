import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import StatsCard from "../compoents/StatsCard.jsx";
import RecentTransactions from "../compoents/RecentTransactions.jsx";
import { Link } from "react-router-dom";

export default function Dashboard() {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const [checkedAuth, setCheckedAuth] = useState(false);

    // Mock data for demo
    const [groups, setGroups] = useState([
        { name: "Group A", totalSavings: 5000, members: 10 },
        { name: "Group B", totalSavings: 3200, members: 7 },
    ]);

    const [transactions, setTransactions] = useState([
        { id: 1, title: "Deposit by John", amount: 200, date: "2026-01-26" },
        { id: 2, title: "Withdrawal by Mary", amount: -100, date: "2026-01-25" },
        { id: 3, title: "Deposit by Alice", amount: 150, date: "2026-01-25" },
    ]);

    useEffect(() => {
        if (!user) navigate("/login");
        setCheckedAuth(true);
    }, [user]);

    if (!checkedAuth) return <p>Loading...</p>;

    // Calculate total savings across all groups
    const totalSavings = groups.reduce((sum, g) => sum + g.totalSavings, 0);
    const totalMembers = groups.reduce((sum, g) => sum + g.members, 0);

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Welcome, {user?.name}</h1>
                <button
                    className="px-3 py-1 bg-red-400 text-white rounded"
                    onClick={logout}
                >
                    Logout
                </button>
            </div>

            {/* Stats Overview */}
            <div className="flex flex-wrap gap-4 mb-6">
                <StatsCard title="Total Savings" value={`$${totalSavings}`} color="bg-green-500" />
                <StatsCard title="Total Members" value={totalMembers} color="bg-blue-500" />
                <StatsCard title="Groups Managed" value={groups.length} color="bg-purple-500" />
            </div>

            <div className="mb-6">
                <Link
                    to="/groups"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                    Manage Groups
                </Link>
            </div>

            {/* Recent Transactions */}
            <RecentTransactions transactions={transactions} />
        </div>
    );
}
