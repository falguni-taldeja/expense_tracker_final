import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import expenseRoutes from './routes/expense.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/expenses', expenseRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(5000, () => console.log('Server running on port 5000')))
  .catch((err) => console.error('MongoDB error:', err));