import React from "react";

const Notifications = () => {
  return (
    <div className="bg-blue-50 dark:bg-blue-900 border-l-4 border-blue-500 text-blue-700 dark:text-blue-200 p-4 mt-6 rounded-md shadow">
      <p className="font-medium">Budget Tip:</p>
      <p className="text-sm">
        You're spending more than 50% of your income. Consider adjusting your
        food or shopping budget.
      </p>
    </div>
  );
};

export default Notifications;
