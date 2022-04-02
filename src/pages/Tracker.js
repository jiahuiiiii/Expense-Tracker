import React, { useState, useEffect } from "react";
import Expenses from "../components/Expenses/Expenses";
import MonthFilter from "../components/Expenses/MonthFilter";
import YearFilter from "../components/Expenses/YearFilter";
import NewExpenses from "../components/NewExpenses/NewExpenses";
import { Icon } from "@iconify/react";
import "./search.scss";

const Tracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [isOpen, setIsOpen] = useState(false)
  const addExpenseHandler = (expense) => {
    setExpenses([...expenses, expense]);
  };

  useEffect(() => {}, []);
  return (
    <div className="h-screen">
      <div className="flex h-full items-center px-16 gap-12 flex-row">
        <div className="flex-1">
          <NewExpenses onAddExpense={addExpenseHandler} />
        </div>
        <div className="flex-1 h-full">
          <div className="flex flex-row space-x-4 w-full justify-end">
            <div className={`${isOpen ? 'toggle' : ''} flex items-center search justify-center`}>
              <input
                placeholder="Search here"
                type="text"
                class="rounded-full -mr-8 bg-rose-600 text-white py-3 uppercase tracking-wider text-sm placeholder-rose-400"
              />
              <div onClick={() => setIsOpen(true)} className="w-16 h-16 rounded-full shadow-lg toggle flex items-center justify-center">
                <Icon icon="ic:baseline-search" className="w-8 h-8 text-white" />
              </div>
            </div>
            <Icon icon="mdi:filter-outline" className="w-10 h-10" />
          </div>
          <div className="flex flex-row"></div>
          <Expenses items={expenses} />
        </div>
      </div>
    </div>
  );
};

export default Tracker;
