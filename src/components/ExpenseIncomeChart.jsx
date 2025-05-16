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
  const dataMap = {};

  transactions.forEach((tx) => {
    const date = tx.date;
    if (!dataMap[date]) dataMap[date] = { date, income: 0, expense: 0 };
    if (tx.amount > 0) dataMap[date].income += tx.amount;
    else dataMap[date].expense += Math.abs(tx.amount);
  });

  const data = Object.values(dataMap);

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow">
      <h2 className="text-lg font-semibold mb-4">Expense vs Income</h2>
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="income"
            stroke="#10B981"
            fill="#D1FAE5"
          />
          <Area
            type="monotone"
            dataKey="expense"
            stroke="#EF4444"
            fill="#FECACA"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpenseIncomeChart;
