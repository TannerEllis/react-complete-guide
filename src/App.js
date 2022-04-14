import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_ESPENSES = [
  {
    id: '1',
    title: 'T-Shirt',
    amount: 24.12,
    date: new Date(2022, 7, 14),
  },
  { 
    id: '2', 
    title: 'Pizza', 
    amount: 19.49, 
    date: new Date(2022, 2, 14)
   },
  {
    id: '3',
    title: 'Car Insurance',
    amount: 224.67,
    date: new Date(2022, 5, 11),
  },
  {
    id: '4',
    title: 'Groceries',
    amount: 70.18,
    date: new Date(2022, 5, 13),
  }
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_ESPENSES)

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    });
  };


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;