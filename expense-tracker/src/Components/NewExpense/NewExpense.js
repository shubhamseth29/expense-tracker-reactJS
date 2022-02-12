import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense(props){
    const [isEditing, setIsEditing] = useState(false);

    const handleFormSubmit = (data) => {
        const expenseData = {
            ...data,
            id: Math.random().toString()
          };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };
  
    const startEditingHandler = () => {
      setIsEditing(true);
    };
  
    const stopEditingHandler = () => {
      setIsEditing(false);
    };

    return (
        <div className='new-expense'>
            <div className='new-expense'>
                {!isEditing && (
                    <button onClick={startEditingHandler}>Add New Expense</button>
                )}
                {isEditing && (
                    <ExpenseForm
                    onFormSubmit={handleFormSubmit}
                    onCancel={stopEditingHandler}
                    />
                )}
                </div>
        </div>
    )
}

export default NewExpense;