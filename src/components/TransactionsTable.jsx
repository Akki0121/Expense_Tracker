// File: src/components/TransactionsTable.jsx
import React from "react";

const TransactionsTable = ({ transactions }) => {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>

      <div className="overflow-x-auto bg-white dark:bg-gray-800 shadow rounded-md">
        <table className="min-w-full table-auto text-sm">
          <thead className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
            <tr>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Description</th>
              <th className="px-4 py-2 text-left">Category</th>
              <th className="px-4 py-2 text-left">Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, index) => (
              <tr
                key={index}
                className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <td className="px-4 py-2 whitespace-nowrap">
                  {new Date(tx.date).toLocaleDateString("en-IN")}
                </td>
                <td className="px-4 py-2 whitespace-nowrap">
                  {tx.description}
                </td>
                <td className="px-4 py-2 whitespace-nowrap">{tx.category}</td>
                <td
                  className={`px-4 py-2 whitespace-nowrap font-medium ${
                    tx.amount < 0 ? "text-red-500" : "text-green-600"
                  }`}
                >
                  {tx.amount < 0 ? "-" : "+"}₹
                  {Math.abs(tx.amount).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionsTable;
