import { useTheme } from "../Context/ThemeContext";
import PropTypes from "prop-types"; // Import PropTypes

const Themelayout = ({ children }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen flex flex-col ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      <main className="flex-grow">{children}</main>

      {/* Theme Toggle Button at the Bottom */}
      <button
        onClick={toggleTheme}
        className="absolute bottom-9 right-5 px-8 py-2 bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-900 rounded-full shadow-lg transition duration-300 hover:opacity-80"
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </div>
  );
};

// Add PropTypes validation
Themelayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Themelayout;
