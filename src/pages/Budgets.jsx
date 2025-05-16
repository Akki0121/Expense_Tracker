import React from "react";

const mockBudgets = [
  { category: "Food", allocated: 500, used: 350 },
  { category: "Transport", allocated: 200, used: 180 },
  { category: "Shopping", allocated: 400, used: 420 },
  { category: "Health", allocated: 300, used: 150 },
  { category: "Entertainment", allocated: 250, used: 275 },
];

const Budgets = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Budgets</h1>
      <div className="space-y-6">
        {mockBudgets.map((budget, idx) => {
          const percentUsed = Math.min(
            100,
            Math.round((budget.used / budget.allocated) * 100)
          );
          const overBudget = budget.used > budget.allocated;

          return (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 p-4 rounded shadow"
            >
              <div className="flex justify-between mb-2">
                <p className="font-medium">{budget.category}</p>
                <p className={overBudget ? "text-red-500" : ""}>
                  ₹{budget.used} / ₹{budget.allocated}
                </p>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div
                  className={`h-3 rounded-full ${
                    overBudget ? "bg-red-500" : "bg-green-500"
                  }`}
                  style={{ width: `${percentUsed}%` }}
                ></div>
              </div>
              {overBudget && (
                <p className="text-sm text-red-500 mt-1">Over budget!</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Budgets;
