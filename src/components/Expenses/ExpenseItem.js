import React from "react";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  const expenses = props.expenses;
  return (
    <div className="">
      <div className="flex flex-row space-x-8 items-center relative">
        <ExpenseDate date={expenses.date} />
        <div className="p-1.5 bg-white shadow-md inline-flex items-center justify-center rounded-full">
          <div className="bg-rose w-3 h-3 block rounded-full"></div>
        </div>
        <div>
          <div className="text-2xl font-bold tracking-widest">
            {expenses.title}
          </div>
          <div className="text-rose text-lg">{`$${expenses.amount}`}</div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseItem;
