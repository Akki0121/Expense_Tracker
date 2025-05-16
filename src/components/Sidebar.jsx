import React from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Sidebar = ({ theme, setTheme }) => {
  const linkClass = ({ isActive }) =>
    `block px-2 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 ${
      isActive ? "bg-gray-300 dark:bg-gray-700" : ""
    }`;

  return (
    <aside className="fixed top-0 left-0 h-screen w-48 bg-white dark:bg-gray-800 p-4 shadow-md z-40">
      <div className="flex items-center justify-center mb-4 gap-x-2.5">
        <h2 className="text-xl font-bold mb-4">Finance</h2>
        <span className="ml-2 mb-2.5">
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </span>
      </div>
      <nav className="space-y-2">
        <NavLink to="/" className={linkClass}>
          Dashboard
        </NavLink>
        <NavLink to="/budgets" className={linkClass}>
          Budget Reports
        </NavLink>
        <NavLink to="/reports" className={linkClass}>
          spending Reports
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
