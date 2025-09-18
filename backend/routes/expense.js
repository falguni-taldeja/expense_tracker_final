import express from 'express';
import Expense from '../models/Expense.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const expenses = await Expense.find().sort({ date: -1 });
  res.json(expenses);
});

router.post('/', async (req, res) => {
  const newExpense = new Expense(req.body);
  await newExpense.save();
  res.status(201).json(newExpense);
});

router.delete('/:id', async (req, res) => {
  await Expense.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

export default router;