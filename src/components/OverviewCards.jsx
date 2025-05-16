import React from "react";

const OverviewCards = ({ overview }) => {
  const cardData = [
    {
      label: "Total Balance",
      value: `₹${overview.totalBalance.toLocaleString()}`,
    },
    {
      label: "Monthly Income",
      value: `₹${overview.monthlyIncome.toLocaleString()}`,
    },
    {
      label: "Monthly Expenses",
      value: `₹${overview.monthlyExpenses.toLocaleString()}`,
    },
    { label: "Savings Ratio", value: `${overview.savingsRatio}%` },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 p-4 shadow rounded-md text-center"
        >
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            {card.label}
          </p>
          <p className="text-xl font-semibold mt-2">{card.value}</p>
        </div>
      ))}
    </div>
  );
};

export default OverviewCards;
