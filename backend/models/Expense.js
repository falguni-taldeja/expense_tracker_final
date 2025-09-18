import mongoose from 'mongoose';

const expenseSchema = new mongoose.Schema({
  title: String,
  amount: Number,
  category: String,
  date: Date,
});

export default mongoose.model('Expense', expenseSchema);