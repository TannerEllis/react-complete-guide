import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

  const TEST_EXPENSES = [
  {id:1, title: 'Groceries', amount: 67.32, date: new Date(2022, 3, 7)},
  {id:2, title: 'Car Insurance', amount: 111.43, date: new Date(2022, 3, 14)},
  {id:3, title: 'Credit Card', amount: 41.67, date: new Date(2022, 3, 17)},
  {id:4, title: 'T-Shirt', amount: 18.29, date: new Date(2022, 3, 23)}
];

const App = () => {
  const [expenses, setExpenses] = (useState(TEST_EXPENSES))

  const addExpenseHandler = expense => {
    setExpenses([prevExpenses => {
      return [expense, ...prevExpenses]
    }]);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
