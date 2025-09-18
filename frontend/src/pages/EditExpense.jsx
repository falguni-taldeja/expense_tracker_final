import {
  CurrencyRupeeIcon,
  CalendarDaysIcon,
  TagIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';

export default function ExpenseCard({ expense, onDelete }) {
  return (
    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-5 rounded-xl shadow hover:shadow-md transition">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl font-bold text-indigo-700">{expense.title}</h3>
        <div className="flex items-center gap-1 text-green-600 font-bold text-lg">
          <CurrencyRupeeIcon className="h-4 w-4" />
          {expense.amount}
        </div>
      </div>
      <div className="text-sm text-gray-600 space-y-1 mb-4">
        <div className="flex items-center gap-2">
          <CalendarDaysIcon className="h-4 w-4 text-gray-500" />
          {new Date(expense.date).toLocaleDateString()}
        </div>
        <div className="flex items-center gap-2">
          <TagIcon className="h-4 w-4 text-gray-500" />
          {expense.category}
        </div>
      </div>
      <button
        onClick={() => onDelete(expense._id)}
        className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full transition duration-200"
      >
        <TrashIcon className="h-4 w-4" />
        Delete
      </button>
    </div>
  );
}