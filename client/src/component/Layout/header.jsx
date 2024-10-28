import React, { useState, useContext } from "react";
import { FaMoon, FaSun, FaBars } from "react-icons/fa";
import { ThemeCotext } from "../../Context/ThemeContextProvider";
import codeverseLogo from "../../assets/codeverseLogo.svg";
import AccountDemoSignedIn from "../Account";
import SearchInput from "../UI/Search";
import Noty from "../UI/Noty";
import MobileSidebar from "./MobileSidebar";

const NavbarPage = () => {
  const { theme, toggleTheme } = useContext(ThemeCotext);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div className="bg-custom-white dark:bg-dark-gray text-gray-900 border-b border-gray-300 p-4 flex justify-between items-center dark:border-gray-600 dark:text-dark-text">
      {/* Mobile Sidebar Toggle */}
      <button className="text-2xl sm:hidden mr-4" onClick={toggleSidebar}>
        <FaBars />
      </button>

      {/* Logo - Hidden on smaller screens */}
      <img
        src={codeverseLogo}
        className="hidden sm:block overflow-hidden transition-all"
        alt="Logo"
      />

      {/* Right section with search, notification, account, and theme toggle */}
      <div className="flex items-center gap-4 ml-auto">
        <div className="hidden sm:block mr-64">
          <SearchInput />
        </div>
        <Noty width={"40px"} color={"black"} count={6} />
        <AccountDemoSignedIn />

        {/* Theme Toggle */}
        <button className="text-2xl text-dark" onClick={toggleTheme}>
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <MobileSidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </div>
  );
};

export default NavbarPage;
