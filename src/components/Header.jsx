import React from "react";

const Header = ({ name, avatar, savingsRatio }) => {
  return (
    <header className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow rounded-md mb-6">
      <div>
        <h1 className="text-2xl font-semibold">Good evening, {name}</h1>
        <div className="mt-2 w-full max-w-xs">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Monthly Savings Goal
          </p>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mt-1">
            <div
              className="bg-green-500 h-3 rounded-full transition-all"
              style={{ width: `${savingsRatio}%` }}
            />
          </div>
          <p className="text-xs text-right text-gray-500 dark:text-gray-400 mt-1">
            {savingsRatio}% saved
          </p>
        </div>
      </div>
      <img
        src={avatar}
        alt="User Avatar"
        className="w-20 h-20 rounded-full border border-gray-300 dark:border-gray-600"
      />
    </header>
  );
};

export default Header;
