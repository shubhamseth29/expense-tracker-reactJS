import { useState } from 'react';
import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';

function App(){
  const DUMMY_EXPENSES = [
    {
      id: 'e1',
      title: 'Headphone',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Pen Tablet',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const [expenses , setExpenses] = useState(DUMMY_EXPENSES)
  

  const addExpenseHandler = (data) => {
    setExpenses((prevState) => {
      return [data , ...prevState]
    })
  }

  return (
    <div>
      <h1> EXPENSE TRACKER </h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}></Expenses>
    </div>
  )
}

export default App;