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
    <div className="">
      <div>Expenses in January 2022</div>
      <ExpenseItem expenses={expenses[0]} />
      <ExpenseItem expenses={expenses[1]} />
      <ExpenseItem expenses={expenses[2]} />
      <ExpenseItem expenses={expenses[3]} />
    </div>
  );
};

export default Expenses;
