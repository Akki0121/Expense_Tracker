// File: src/components/Header.jsx
import React from "react";

const Header = ({ name, avatar, savingsRatio }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
      <div className="flex items-center space-x-4">
        <img
          src={avatar}
          alt="User"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="text-lg font-semibold">Welcome, {name} 👋</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Your savings ratio this month is{" "}
            <span className="font-medium">{savingsRatio}%</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
