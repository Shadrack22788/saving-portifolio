import { useState } from "react";

export default function Profile() {
  // Sample user data
  const [user, setUser] = useState({
    name: "Alice",
    email: "alice@example.com",
    role: "Member",
    totalDeposits: 160,
    totalWithdrawals: 40,
  });

  const balance = user.totalDeposits - user.totalWithdrawals;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Profile</h1>

      {/* User Info */}
      <div className="bg-white p-6 rounded shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">User Information</h2>
        <p><span className="font-medium">Name:</span> {user.name}</p>
        <p><span className="font-medium">Email:</span> {user.email}</p>
        <p><span className="font-medium">Role:</span> {user.role}</p>
      </div>

      {/* Financial Summary */}
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded shadow">
          <h2>Total Deposits</h2>
          <p className="text-green-600 font-bold">${user.totalDeposits}</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2>Total Withdrawals</h2>
          <p className="text-red-600 font-bold">${user.totalWithdrawals}</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2>Balance</h2>
          <p className="text-blue-600 font-bold">${balance}</p>
        </div>
      </div>

      {/* Update Profile Form */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Update Profile</h2>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block mb-1">Name</label>
            <input
              type="text"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
}
