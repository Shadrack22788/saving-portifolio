import { useState } from "react";

export default function MemberList({ member }) {
  const [showForm, setShowForm] = useState(false);
  const [amount, setAmount] = useState("");

  const totalSavings = member.savings.reduce(
    (sum, s) => sum + (s.type === "withdrawal" ? -s.amount : s.amount),
    0
  );

  const handleDeposit = () => {
    if (!amount || amount <= 0) return;

    member.savings.push({
      id: Date.now(),
      amount: Number(amount),
      type: "deposit",
      date: new Date().toISOString().split("T")[0],
    });

    setAmount("");
    setShowForm(false);
  };

  return (
    <div className="bg-gray-100 p-3 rounded mb-2">
      <div className="flex justify-between items-center">
        <div>
          <p className="font-medium text-gray-800">{member.name}</p>
          <p className="text-sm text-gray-600">
            Total Saved: <strong>${totalSavings}</strong>
          </p>
        </div>

        <span
          className={`text-sm font-semibold ${
            totalSavings > 0 ? "text-green-600" : "text-red-500"
          }`}
        >
          {totalSavings > 0 ? "Saved" : "Not Saved"}
        </span>
      </div>

      <button
        className="mt-2 text-sm text-blue-600 underline"
        onClick={() => setShowForm(!showForm)}
      >
        Add Saving
      </button>

      {showForm && (
        <div className="mt-2 flex gap-2">
          <input
            type="number"
            placeholder="Amount"
            className="border p-1 rounded w-24"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <button
            className="px-3 py-1 bg-green-500 text-white rounded"
            onClick={handleDeposit}
          >
            Deposit
          </button>

          <button
            disabled
            className="px-3 py-1 bg-gray-300 text-gray-600 rounded cursor-not-allowed"
            title="Withdrawals require approval"
          >
            Withdraw
          </button>
        </div>
      )}
    </div>
  );
}
