import { useEffect, useState } from 'react';
import { getExpenses, deleteExpense } from '../services/expenseService';
import ExpenseCard from '../components/ExpenseCard';
import { Link } from 'react-router-dom';

export default function Home() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    getExpenses().then(setExpenses);
  }, []);

  const handleDelete = async (id) => {
    await deleteExpense(id);
    setExpenses(expenses.filter((e) => e._id !== id));
  };

  return (
    <div>
      <h2 className="text-3xl font-semibold text-indigo-700 mb-6">All Expenses</h2>
      {expenses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {expenses.map((expense) => (
            <ExpenseCard key={expense._id} expense={expense} onDelete={handleDelete} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10 text-gray-500">
          <p>No expenses to show. Start adding some!</p>
        </div>
      )}

      <Link
        to="/add"
        className="fixed bottom-6 right-6 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-full shadow-lg text-sm font-semibold transition duration-300"
      >
        + Add Expense
      </Link>
    </div>
  );
}