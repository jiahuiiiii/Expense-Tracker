import React from "react";
import ExpenseForm from "../components/NewExpenses/ExpenseForm";

const Tracker = () => {
  return (
    <div className="flex items-center justify-between gap-16 w-full h-full">
      <ExpenseForm />
      <div className="flex-1"></div>
    </div>
  );
};

export default Tracker;
