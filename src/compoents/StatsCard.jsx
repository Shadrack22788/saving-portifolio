export default function StatsCard({ title, value, color }) {
  return (
    <div className={`p-4 rounded shadow w-full md:w-60 mb-4 ${color}`}>
      <h3 className="text-gray-100 text-sm font-semibold">{title}</h3>
      <p className="text-white text-2xl font-bold mt-2">{value}</p>
    </div>
  );
}
