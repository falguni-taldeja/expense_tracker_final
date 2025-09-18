const BASE_URL = import.meta.env.VITE_API_URL;

export const getExpenses = async () => {
  const res = await fetch(`${BASE_URL}/api/expenses`);
  if (!res.ok) throw new Error('Failed to fetch expenses');
  return res.json();
};

export const addExpense = async (expense) => {
  const res = await fetch(`${BASE_URL}/api/expenses`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(expense),
  });
  if (!res.ok) throw new Error('Failed to add expense');
};

export const deleteExpense = async (id) => {
  const res = await fetch(`${BASE_URL}/api/expenses/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Failed to delete expense');
};