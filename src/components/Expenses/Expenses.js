import React from "react";
import ExpenseItem from "./ExpenseItem";
import MonthFilter from "./MonthFilter";
import YearFilter from "./YearFilter";

const Expenses = ({ items }) => {
  return items ? (
    <div className="p-8 space-y-2">
      <div className="flex flex-col tracking-widest">
        <div className="">
          <div className="flex flex-row space-x-2.5">
            <div className="text-4xl">Expenses in</div>
            <div className="text-4xl font-bold">January 2022</div>
          </div>
          <div className="flex flex-row">
            <MonthFilter />
            <YearFilter />
          </div>
        </div>
        <div className="text-rose text-xl">$2000</div>
      </div>
      {items.map((item) => (
        <ExpenseItem expenses={item} />
      ))}
    </div>
  ) : null;
};

export default Expenses;
