import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2019");
  // const [filteredYear, setFilteredYear] = useState('2020');
  // const [filteredYear, setFilteredYear] = useState('2021');
  // const [filteredYear, setFilteredYear] = useState('2022');

  const yearFilterChangeHandler = (selectedYear) => {
    console.log("Expenses.js");
    console.log(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onYearChange={yearFilterChangeHandler}
        />
        {props.items.map((expense, i) => (
          <ExpenseItem
            key={i}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
