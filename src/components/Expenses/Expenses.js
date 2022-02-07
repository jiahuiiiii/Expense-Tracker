import React from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseItem from "./ExpenseItem";

const expenses = [
  {
    id: "e1",
    title: "Testkit",
    amount: 10,
    date: new Date(2022, 0, 2),
  },
  {
    id: "e2",
    title: "Alarm",
    amount: 30,
    date: new Date(2022, 0, 15),
  },
  {
    id: "e3",
    title: "Drawing Tablet",
    amount: 200,
    date: new Date(2022, 0, 17),
  },
  {
    id: "e4",
    title: "Light",
    amount: 50,
    date: new Date(2022, 0, 14),
  },
];

const Expenses = () => {
  return (
    <div className="p-8 space-y-2">
      <div className="flex flex-col tracking-widest">
        <div className="flex flex-row space-x-2.5">
          <div className="text-4xl">Expenses in</div>
          <div className="text-4xl font-bold">January 2022</div>
        </div>
        <div className="text-rose text-xl">$2000</div>
      </div>
      <ExpenseItem expenses={expenses[0]} />
      <ExpenseItem expenses={expenses[1]} />
      <ExpenseItem expenses={expenses[2]} />
      <ExpenseItem expenses={expenses[3]} />
    </div>
  );
};

export default Expenses;
