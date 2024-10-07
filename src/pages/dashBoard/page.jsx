import { useState } from "react";

const Dashboard = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    return (
        <div className={`${darkMode ? "dark" : ""}`}>
            <main className="bg-white-600 dark:bg-black">
                <h1 className="text-slate-900 dark:text-white">Tailwind CSS</h1>
                <button
                    className="absolute w-16 h-16 top-16 right-16 bg-white dark:bg-slate-800 rounded-full text-slate-900 dark:text-white"
                    onClick={toggleDarkMode}
                >
                    {darkMode ? "LHT" : "DRK"}
                </button>
            </main>
        </div>
    );
}

export default Dashboard;

