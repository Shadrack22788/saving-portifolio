export default function Reports() {
  const transactions = [
    { id: 1, member: "Alice", type: "deposit", amount: 100, date: "2026-01-01" },
    { id: 2, member: "John", type: "withdraw", amount: 40, date: "2026-01-05" },
    { id: 3, member: "Alice", type: "deposit", amount: 60, date: "2026-01-10" },
  ];

  const totalDeposits = transactions
    .filter(t => t.type === "deposit")
    .reduce((acc, t) => acc + t.amount, 0);

  const totalWithdrawals = transactions
    .filter(t => t.type === "withdraw")
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = totalDeposits - totalWithdrawals;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Financial Report</h1>

      {/* Summary */}
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded shadow">
          <h2>Total Deposits</h2>
          <p className="text-green-600 font-bold">${totalDeposits}</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2>Total Withdrawals</h2>
          <p className="text-red-600 font-bold">${totalWithdrawals}</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2>Balance</h2>
          <p className="text-blue-600 font-bold">${balance}</p>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="font-bold mb-4">Transaction History</h2>

        <table className="w-full text-left">
          <thead>
            <tr className="border-b bg-gray-100">
              <th className="py-2">Member</th>
              <th className="py-2">Date</th>
              <th className="py-2">Type</th>
              <th className="py-2">Amount</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((t) => (
              <tr key={t.id} className="border-b">
                <td className="py-2 font-medium">{t.member}</td>
                <td className="py-2">{t.date}</td>
                <td className="py-2 capitalize">{t.type}</td>
                <td className="py-2">${t.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
