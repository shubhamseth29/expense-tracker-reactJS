import ExpenseItem from "./ExpenseItem";

function ExpensesList (props) {
    const filteredExpenses = props.expenses;
    let expensesContent = <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
    if (filteredExpenses.length > 0) {
        expensesContent = <ul className='expenses-list'>
            {
                filteredExpenses.map((item) => {
                    return (
                        <ExpenseItem
                            key={item.id} 
                            date={item.date}
                            title={item.title}
                            amount={item.amount}>
                        </ExpenseItem>
                    )
                }
                )
            }
        </ul>
        
      }

      return expensesContent;

}


export default ExpensesList;