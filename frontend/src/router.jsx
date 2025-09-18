import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import AddExpense from './pages/AddExpense';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/add', element: <AddExpense /> },
    ],
  },
]);

export default router;