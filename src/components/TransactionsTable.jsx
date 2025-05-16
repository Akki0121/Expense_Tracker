import React from "react";

const TransactionsTable = ({ transactions }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow mt-6">
      <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left border-b">
            <th className="py-2">Date</th>
            <th>Description</th>
            <th>Type</th>
            <th>Category</th>
            <th className="text-right">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx, i) => (
            <tr
              key={i}
              className="border-b hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <td className="py-2">{tx.date}</td>
              <td>{tx.description}</td>
              <td>{tx.type}</td>
              <td>{tx.category}</td>
              <td
                className={`text-right ${
                  tx.amount < 0 ? "text-red-500" : "text-green-600"
                }`}
              >
                ₹{tx.amount < 0 ? "-" : "+"}
                {Math.abs(tx.amount)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;
