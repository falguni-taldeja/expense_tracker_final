import { useState } from 'react';

export default function ExpenseForm({ onAdd }) {
  const [form, setForm] = useState({ title: '', amount: '', category: '', date: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.amount || !form.category || !form.date) return;
    onAdd(form);
    setForm({ title: '', amount: '', category: '', date: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md space-y-4">
      <h2 className="text-lg font-semibold text-gray-700">Add Expense</h2>
      <input type="text" placeholder="Enter expense title..." value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        className="w-full p-2 border rounded"
      />
      <input type="number" placeholder="₹ 0.00" value={form.amount}
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
        className="w-full p-2 border rounded"
      />
      <select value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
        className="w-full p-2 border rounded"
      >
        <option value="">Select category...</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Health">Health</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Utilities">Utilities</option>
      </select>
      <input type="date" value={form.date}
        onChange={(e) => setForm({ ...form, date: e.target.value })}
        className="w-full p-2 border rounded"
      />
      <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded font-semibold">
        Add Expense
      </button>
    </form>
  );
}