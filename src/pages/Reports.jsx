import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const monthlyData = [
  { month: "Jan", income: 5000, expenses: 3200 },
  { month: "Feb", income: 5100, expenses: 3000 },
  { month: "Mar", income: 4950, expenses: 3500 },
  { month: "Apr", income: 5200, expenses: 3100 },
  { month: "May", income: 5000, expenses: 4000 },
  { month: "Jun", income: 5300, expenses: 3700 },
];

const Reports = () => {
  const totalIncome = monthlyData.reduce((sum, m) => sum + m.income, 0);
  const totalExpenses = monthlyData.reduce((sum, m) => sum + m.expenses, 0);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Reports</h1>
      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
        <h2 className="text-lg font-medium mb-2">Monthly Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={monthlyData}
            margin={{ top: 20, right: 20, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="income" fill="#10B981" />
            <Bar dataKey="expenses" fill="#EF4444" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-6 bg-white dark:bg-gray-800 p-4 rounded shadow">
        <h2 className="text-lg font-medium mb-2">Summary</h2>
        <p>
          Total Income:{" "}
          <span className="text-green-500 font-semibold">₹{totalIncome}</span>
        </p>
        <p>
          Total Expenses:{" "}
          <span className="text-red-500 font-semibold">₹{totalExpenses}</span>
        </p>
        <p>
          Net Savings:{" "}
          <span className="text-blue-500 font-semibold">
            ₹{totalIncome - totalExpenses}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Reports;
