export default function SummaryCards({ total, avg, month, categories }) {
  const cards = [
    { label: 'Total Expenses', value: `₹${total}`, color: 'bg-green-100 text-green-800' },
    { label: 'Categories', value: categories.length, color: 'bg-blue-100 text-blue-800' },
    { label: 'This Month', value: `₹${month}`, color: 'bg-purple-100 text-purple-800' },
    { label: 'Avg/Day', value: `₹${avg}`, color: 'bg-orange-100 text-orange-800' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {cards.map((card, i) => (
        <div key={i} className={`${card.color} p-4 rounded-xl shadow-md`}>
          <h4 className="text-sm font-medium">{card.label}</h4>
          <p className="text-2xl font-bold">{card.value}</p>
        </div>
      ))}
    </div>
  );
}