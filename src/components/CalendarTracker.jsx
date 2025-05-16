import React, { useState } from "react";

const CalendarTracker = ({ transactions }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const year = 2025;
  const month = 5;
  const today = new Date(year, month);

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const calendarDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  // Group transactions by day for current month
  const txByDay = {};
  transactions.forEach((tx) => {
    const txDate = new Date(tx.date);
    if (
      txDate.getFullYear() === year &&
      txDate.getMonth() === month &&
      !isNaN(tx.amount)
    ) {
      const day = txDate.getDate();
      if (!txByDay[day]) txByDay[day] = [];

      txByDay[day].push({
        ...tx,
        amount:
          typeof tx.amount === "string" ? parseFloat(tx.amount) : tx.amount,
      });
    }
  });

  // Sum expenses per day (only negative amounts)
  const expensesByDay = {};
  Object.keys(txByDay).forEach((dayStr) => {
    const day = Number(dayStr);
    expensesByDay[day] = txByDay[day]
      .filter((tx) => tx.amount < 0)
      .reduce((sum, tx) => sum + Math.abs(tx.amount), 0);
  });

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow mt-6">
      <h2 className="text-lg font-semibold mb-4">Monthly Expense Tracker</h2>
      <div className="grid grid-cols-7 gap-2 text-center">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((dayName) => (
          <div key={dayName} className="font-bold">
            {dayName}
          </div>
        ))}

        {/* Empty cells for offset days at start of month */}
        {Array(new Date(year, month, 1).getDay())
          .fill(null)
          .map((_, i) => (
            <div key={`empty-${i}`}></div>
          ))}

        {/* Days with expenses */}
        {calendarDays.map((day) => (
          <div
            key={day}
            className={`p-2 rounded cursor-pointer border text-sm ${
              selectedDate === day
                ? "bg-blue-500 text-white"
                : "hover:bg-blue-100 dark:hover:bg-blue-700"
            }`}
            onClick={() => setSelectedDate(day)}
            title={
              expensesByDay[day]
                ? `₹${expensesByDay[day]} spent`
                : "No expenses"
            }
          >
            <div>{day}</div>
            {expensesByDay[day] && (
              <div className="text-xs text-red-500">₹{expensesByDay[day]}</div>
            )}
          </div>
        ))}
      </div>

      {/* Show transactions list for selected day */}
      {selectedDate && txByDay[selectedDate] && (
        <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-900 rounded max-h-64 overflow-auto">
          <h3 className="font-semibold mb-2">
            Transactions on {selectedDate}{" "}
            {today.toLocaleString("default", { month: "long" })}
          </h3>
          <ul>
            {txByDay[selectedDate].map((tx, idx) => (
              <li key={idx} className="mb-1">
                <span className="font-medium">{tx.description}</span>:&nbsp;
                <span
                  className={tx.amount < 0 ? "text-red-500" : "text-green-600"}
                >
                  {tx.amount < 0 ? "-" : "+"}₹{Math.abs(tx.amount)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CalendarTracker;
