import React from "react";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  const expenses = props.expenses;
  return (
    <div className="text-2xl">
      <div className="flex flex-row space-x-20">
        <ExpenseDate date={expenses.date} />
        <div>{expenses.title}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
