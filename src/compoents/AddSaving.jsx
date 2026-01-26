import { useState } from "react";

export default function AddSaving({ onAdd }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("deposit"); // deposit or withdrawal

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount) return;

    const newSaving = {
      id: Date.now(), // unique ID
      title,
      amount: parseFloat(amount),
      type,
      date: new Date().toLocaleDateString(),
    };

    // Call parent handler
    onAdd(newSaving);

    // Reset form
    setTitle("");
    setAmount("");
    setType("deposit");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded shadow-md w-full max-w-md mb-6"
    >
      <h2 className="text-xl font-bold mb-4">Add New Saving</h2>

      <input
        type="text"
        placeholder="Title (e.g., Groceries)"
        className="w-full p-2 mb-3 border rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Amount"
        className="w-full p-2 mb-3 border rounded"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />

      <select
        className="w-full p-2 mb-3 border rounded"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="deposit">Deposit</option>
        <option value="withdrawal">Withdrawal</option>
      </select>

      <button className="w-full bg-green-600 text-white py-2 rounded">
        Add Saving
      </button>
    </form>
  );
}
