import React from "react";
import Expenses from "../components/Expenses/Expenses";
import ExpenseForm from "../components/NewExpenses/ExpenseForm";

const Tracker = () => {
  return (
    <div className="h-full">
      <div className="flex h-full px-16 flex-row">
        <ExpenseForm />
        <div className="flex-1">
          <Expenses />
        </div>
      </div>
    </div>
  );
};

export default Tracker;
