export default function RecentTransactions({ transactions }) {
  if (!transactions || transactions.length === 0)
    return <p className="text-gray-500">No recent transactions</p>;

  return (
    <div className="bg-white p-4 rounded shadow w-full max-w-2xl">
      <h2 className="text-lg font-semibold mb-3">Recent Transactions</h2>
      <ul>
        {transactions.map((t) => (
          <li
            key={t.id}
            className="flex justify-between p-2 mb-2 border-b border-gray-200"
          >
            <div>
              <p className="font-semibold">{t.title}</p>
              <p className="text-gray-500 text-sm">{t.date}</p>
            </div>
            <p
              className={`font-bold ${
                t.amount >= 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              ${t.amount.toFixed(2)}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
