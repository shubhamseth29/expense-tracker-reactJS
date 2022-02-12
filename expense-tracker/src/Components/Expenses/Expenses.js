import { useState } from 'react';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import './Expenses.css';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {

    const expenses = props.items;
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
      setFilteredYear(selectedYear);
    };

    const filteredExpenses = expenses.filter((item) => item.date.getFullYear().toString() === filteredYear);    
    
        return(
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList expenses={filteredExpenses} filteredYear={filteredYear}></ExpensesList>
            </Card>
        )
    }


export default Expenses;