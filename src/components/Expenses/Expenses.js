import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import React,{useState} from "react";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setYear] = useState('2022');
  const filterChangeHandler = (selectedYear) => {
    setYear(selectedYear);
  }
  
  const fileredExpenses = props.items.filter(
    (expense) => {
      return expense.date.getFullYear().toString() === filteredYear;
    }
  );
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {fileredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
