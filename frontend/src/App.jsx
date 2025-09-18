import Navbar from './components/Navbar';
import SummaryCards from './components/SummaryCards';
import ExpenseForm from './components/ExpenseForm';
import ExpenseCard from './components/ExpenseCard';
import { useState, useEffect } from 'react';

function App() {
  const [expenses, setExpenses] = useState([]);

  // Load dummy data once when app starts
  useEffect(() => {
    const initialData = [
      {
        _id: '1',
        title: 'Groceries',
        amount: 500,
        category: 'Food',
        date: '2025-09-15',
      },
      {
        _id: '2',
        title: 'Bus Ticket',
        amount: 50,
        category: 'Transport',
        date: '2025-09-16',
      },
      {
        _id: '3',
        title: 'Netflix',
        amount: 300,
        category: 'Entertainment',
        date: '2025-09-10',
      },
    ];
    setExpenses(initialData);
  }, []);

  // Add new expense
  const handleAddExpense = (newExpense) => {
    const expenseWithId = {
      ...newExpense,
      _id: Date.now().toString(),
    };
    setExpenses([expenseWithId, ...expenses]);
  };

  // Delete expense
  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter((e) => e._id !== id));
  };

  // Summary calculations
  const total = expenses.reduce((sum, e) => sum + Number(e.amount), 0);
  const avg = expenses.length ? Math.round(total / expenses.length) : 0;
  const currentMonth = new Date().getMonth();
  const month = expenses
    .filter((e) => new Date(e.date).getMonth() === currentMonth)
    .reduce((sum, e) => sum + Number(e.amount), 0);
  const categories = [...new Set(expenses.map((e) => e.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-sky-100 to-indigo-100 text-gray-800 p-4">
      <Navbar />
      <div className="max-w-4xl mx-auto space-y-8">
        <SummaryCards total={total} avg={avg} month={month} categories={categories} />
        <ExpenseForm onAdd={handleAddExpense} />
        <div>
          <h2 className="text-lg font-semibold mb-2">Recent Expenses</h2>
          {expenses.length === 0 ? (
            <p className="text-gray-500">No expenses yet. Start by adding your first expense!</p>
          ) : (
            <div className="grid gap-4">
              {expenses.map((expense) => (
                <ExpenseCard key={expense._id} expense={expense} onDelete={handleDeleteExpense} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;