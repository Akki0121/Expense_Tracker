import React from "react";

const ThemeToggle = ({ theme, setTheme }) => {
  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="ml-4 px-4 py-2 bg-gray-300 dark:bg-gray-700 text-sm rounded-full shadow hover:opacity-80"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;
