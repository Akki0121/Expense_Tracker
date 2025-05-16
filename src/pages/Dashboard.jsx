import React from "react";
import Header from "../components/Header";
import OverviewCards from "../components/OverviewCards";
import ExpenseIncomeChart from "../components/ExpenseIncomeChart";
import SpendingPieChart from "../components/SpendingPieChart";
import TransactionsTable from "../components/TransactionsTable";
import Notifications from "../components/Notifications";
import ThemeToggle from "../components/ThemeToggle";
import CalendarTracker from "../components/CalendarTracker";
import mockData from "../data/mockData.json";

const Dashboard = ({ theme, setTheme }) => {
  const { user, overview, transactions, categories } = mockData;

  return (
    <div className="max-w-6xl mx-auto px-4 pt-1 pb-6">
      <div className="relative max-w-6xl mx-auto  py-2">
        {/* <div className="absolute top-0 right-0">
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div> */}
        <div className="pt-0">
          <Header
            name={user.name}
            avatar={user.avatar}
            savingsRatio={overview.savingsRatio}
          />
        </div>
      </div>

      <OverviewCards overview={overview} />
      <Notifications />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <ExpenseIncomeChart transactions={transactions} />
        <SpendingPieChart categories={categories} />
      </div>

      <TransactionsTable transactions={transactions} />

      <CalendarTracker transactions={transactions} />
    </div>
  );
};

export default Dashboard;
