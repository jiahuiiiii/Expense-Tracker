import React from "react";

const ExpenseDate = (props) => {
  const date = props.date;

  const month = date?.toLocaleString("en-US", { month: "2-digit" });
  const day = date?.toLocaleString("en-US", { day: "2-digit" });
  const year = date?.getFullYear();

  return <div className="text-2xl tabular-nums">{`${day} / ${month}`}</div>;
};

export default ExpenseDate;
