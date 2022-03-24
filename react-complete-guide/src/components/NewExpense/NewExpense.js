import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  let content = (
      <button onClick={startEditingHandler}>Add New Expense</button>
  );

  if (isEditing) {
    content = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={stopEditingHandler}
      />
    );
  }

  return (
    <div className="new-expense">
      {content}
    </div>
  );
};

export default NewExpense;
