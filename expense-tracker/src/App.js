import Expenses from './Components/Expenses/Expenses';

function App(){

  const expenses = [
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

  return (
    <div>
      <h1> EXPENSE TRACKER </h1>
      <Expenses items={expenses}></Expenses>
    </div>
  )
}

export default App;