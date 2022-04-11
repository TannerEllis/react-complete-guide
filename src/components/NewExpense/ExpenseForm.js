import { setuid } from "process";
import React, { useState } from "react";
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    //comments are another way to edit state. Comes down to preference, however the commented converts to an object and can be finicky.

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // })


   
    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value) 
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: e.target.value
        // })
    };
    
    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value) 
        // setUserInput({
        //     ...userInput, 
        //     enteredAmount: e.target.value
        // })
    };

    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value) 
        // setUserInput({
        //     ...userInput,
        //     enteredDate: e.target.value
        // })
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            enteredDate: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    };

    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense-controls'>
                <div className="new-expense-control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense-control">
                    <label>Amount</label>
                    <input type="number" min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense-control">
                    <label>Date</label>
                    <input type="date" min='2019-01-01' max='2022-12-31' value={enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense-actions" >
                <button type="subit">Add Expense</button>
            </div>
        </form>
    )
};

export default ExpenseForm;