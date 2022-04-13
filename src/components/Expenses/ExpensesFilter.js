import React from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
    const filterYearHandler = (e) => {
        props.onYearChange(e.target.value)
    }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter-control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={filterYearHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;