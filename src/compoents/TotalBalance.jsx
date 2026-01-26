export default function TotalBalance({ savings }) {
  const total = savings.reduce((sum, s) => sum + s.amount, 0);
  return (
    <div className="bg-white p-4 rounded shadow w-full max-w-md mb-6 flex justify-between items-center">
      <h3 className="text-lg font-semibold">Total Balance:</h3>
      <p className={`text-xl font-bold ${total >= 0 ? "text-green-600" : "text-red-600"}`}>
        ${total.toFixed(2)}
      </p>
    </div>
  );
}
