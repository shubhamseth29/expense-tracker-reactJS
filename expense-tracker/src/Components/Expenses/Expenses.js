import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
const Expenses = (props) => {

    const expenses = props.items;
        return(
            <Card className="expenses">
                {
                    expenses.map((item) => {
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
            </Card>
        )
    }


export default Expenses;