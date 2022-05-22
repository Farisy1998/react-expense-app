import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const editingHandler = () => {
    setIsEditing(true);
  };

  const saveExpenseDataHandler = (expenses) => {
    const expenseData = {
      ...expenses,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const cancelEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={editingHandler}>Add New Expense</button>}
      {isEditing && (
        <ExpenseForm
          onSaveExepenseData={saveExpenseDataHandler}
          onCancel={cancelEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
