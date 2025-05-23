// File: src/components/ThemeToggle.jsx
import React from "react";
// import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle = ({ theme, setTheme }) => {
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <button
      onClick={toggleTheme}
      className="text-xl p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;

// import React from "react";

// const ThemeToggle = ({ theme, setTheme }) => {
//   return (
//     <button
//       onClick={() => setTheme(theme === "light" ? "dark" : "light")}
//       className="ml-4 px-4 py-2 bg-gray-300 dark:bg-gray-700 text-sm rounded-full shadow hover:opacity-80"
//     >
//       {theme === "light" ? "🌙" : "☀️"}
//     </button>
//   );
// };

// export default ThemeToggle;
