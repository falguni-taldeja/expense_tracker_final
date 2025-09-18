export default function ExpenseCard({ expense, onDelete }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md flex justify-between items-center">
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{expense.title}</h3>
        <p className="text-sm text-gray-500">₹{expense.amount} • {expense.category} • {new Date(expense.date).toLocaleDateString()}</p>
      </div>
      <button onClick={() => onDelete(expense._id)} className="text-red-500 hover:text-red-700 font-bold text-sm">
        ✕
      </button>
    </div>
  );
}