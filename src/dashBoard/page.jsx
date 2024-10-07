import { useState } from "react";

export default function Dashboard() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    return (
        <div className={`${darkMode ? "dark" : ""}`}>
            <button
                className="absolute w-16 h-16 top-16 right-16 bg-white dark:bg-gray-700 rounded-full"
                onClick={toggleDarkMode}
            >
                {darkMode ? "LHT" : "DRK"}
            </button>
        </div>
    );
}
