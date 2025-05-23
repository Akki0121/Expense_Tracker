import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ExpenseIncomeChart = ({ transactions }) => {
  const dataByDate = {};

  transactions.forEach((tx) => {
    const date = new Date(tx.date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
    });

    if (!dataByDate[date]) {
      dataByDate[date] = { date, income: 0, expense: 0 };
    }

    if (tx.amount > 0) {
      dataByDate[date].income += tx.amount;
    } else {
      dataByDate[date].expense += Math.abs(tx.amount);
    }
  });

  const chartData = Object.values(dataByDate).sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  return (
    <div className="bg-white dark:bg-gray-800 p-4 shadow rounded-md w-full">
      <h2 className="text-lg font-semibold mb-4">Income vs Expenses</h2>
      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="date" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="income"
              stroke="#10b981"
              fillOpacity={1}
              fill="url(#colorIncome)"
            />
            <Area
              type="monotone"
              dataKey="expense"
              stroke="#ef4444"
              fillOpacity={1}
              fill="url(#colorExpense)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ExpenseIncomeChart;
