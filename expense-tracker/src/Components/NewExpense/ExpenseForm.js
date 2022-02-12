import React, { useState } from 'react';
import './ExpenseForm.css';


const ExpenseForm = (props) => {
    const [title , titleValueChanged] = useState('');
    const [amount , amountValueChanged] = useState('');
    const [date , dateValueChanged] = useState('');

    const setTitleValue = (event) => {
        titleValueChanged(event.target.value);
    }

    const setAmountValue = (event) => {
        amountValueChanged(event.target.value);
    }

    const setDateValue = (event) => {
        dateValueChanged(event.target.value);
    }

    const saveFormData = (event) => {
        event.preventDefault();
        const formDataObj = {
            title,
            amount,
            date : new Date(date)
        }
        props.onFormSubmit(formDataObj);
        titleValueChanged('');
        amountValueChanged('');
        dateValueChanged('');
    };


    return (
        <form onSubmit={saveFormData}>
            <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={title} onChange={setTitleValue} />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' value={amount} onChange={setAmountValue} />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min='2019-01-01' max='2022-12-31' value={date} onChange={setDateValue}/>
            </div>
            </div>
            <div className='new-expense__actions'>
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;