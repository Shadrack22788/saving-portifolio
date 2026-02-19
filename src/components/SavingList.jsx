export default function SavingList({ savings }) {
  if (savings.length === 0) return <p className="text-gray-500">No savings yet.</p>;

  return (
    <ul className="w-full max-w-md">
      {savings.map((saving) => (
        <li
          key={saving.id}
          className="flex justify-between p-3 mb-2 bg-gray-100 rounded shadow"
        >
          <div>
            <p className="font-semibold">{saving.title}</p>
            <p className="text-gray-500 text-sm">{saving.date}</p>
          </div>
          <p
            className={`font-bold ${
              saving.amount >= 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            ${saving.amount.toFixed(2)}
          </p>
        </li>
      ))}
    </ul>
  );
}
