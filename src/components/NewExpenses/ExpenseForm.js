import React from "react";

const ExpenseForm = () => {
  return (
    <div className="drop-shadow-2xl bg-slate-50 rounded-r-2xl flex-1 self-center items-center">
      <form className="p-10 flex flex-col gap-y-4">
        <div className="rounded-lg flex flex-col bg-slate-100 pt-5 pb-4 shadow-[inset_0px_4px_12px_rgba(0,0,0,0.06)] border-l-4 border-rose">
          <label className="mx-5 text-slate-400">Title</label>
          <input type="text" placeholder='Expenses details' className="mx-5 mt-2 caret-rose-500 text-2xl bg-transparent focus:outline-none"></input>
        </div>
        <div className="rounded-lg flex flex-col bg-slate-100 pt-5 pb-4 shadow-[inset_0px_4px_12px_rgba(0,0,0,0.06)] border-l-4 border-rose">
          <label className="mx-5 text-slate-400">Amount</label>
          <input type="text" placeholder='Expenses Amount' className="mx-5 mt-2 caret-rose-500 text-2xl bg-transparent focus:outline-none"></input>
        </div>
        <div className="rounded-lg flex flex-col bg-slate-100 pt-5 pb-4 shadow-[inset_0px_4px_12px_rgba(0,0,0,0.06)] border-l-4 border-rose">
          <label className="mx-5 text-slate-400">Date</label>
          <input type="text" placeholder='Expenses Date' className="mx-5 mt-2 caret-rose-500 text-2xl bg-transparent focus:outline-none"></input>
        </div>
      </form>
      <button className="p-5 bg-rose" type="submit">Add Expense</button>
    </div>
  );
};

export default ExpenseForm;
