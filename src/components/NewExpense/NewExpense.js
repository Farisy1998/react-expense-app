import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (expenses) => {
    const expenseData = {
      ...expenses,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData);
  }
    return (
      <div className="new-expense">
        <ExpenseForm onSaveExepenseData={saveExpenseDataHandler} />
      </div>
    );
}

export default NewExpense;