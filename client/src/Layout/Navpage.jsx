/* import React, { useState, useContext } from "react";
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
    <div className="bg-custom-white dark:bg-dark-gray text-gray-900 border-b border-gray-300 p-0.5 flex justify-between items-center dark:border-gray-600 dark:text-dark-text">
       Mobile Sidebar Toggle 
      <button className="text-2xl sm:hidden mr-4" onClick={toggleSidebar}>
        <FaBars />
      </button>


      {/* Right section with search, notification, account, and theme toggle 
      <div className="flex items-center gap-4 ml-auto">
        <div className="hidden sm:block mr-64">
          <SearchInput />
        </div>
        <Noty width={"40px"} color={"black"} count={6} />
        <AccountDemoSignedIn />

         Theme Toggle 
        <button className="text-2xl text-dark" onClick={toggleTheme}>
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
      </div>

       Mobile Sidebar 
      <MobileSidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </div>
  );
};

export default NavbarPage;
 */

import React from 'react'
import { FaBars, FaBell, FaSearch, FaUserCircle } from 'react-icons/fa'

const Navpage = ({sidebarToggle, setSidebarToggle}) => {
  return (
    <nav className='bg-gray-800 px-4 py-3 flex justify-between'>
      <div className='flex items-center text-xl'>
        <FaBars className='text-white me-4 cursor-pointer' 
          onClick={() => setSidebarToggle(!sidebarToggle)}/>
        <span className='text-white font-semibold'>Home</span>
      </div>
      <div className='flex items-center gap-x-5'>
        <div className='relative md:w-65'>
          <span className='relative md:absolute inset-y-0 left-0 flex items-center pl-2'>
            <button className='p-1 focus:outline-none text-white md:text-black'><FaSearch /></button>
          </span>
          <input type='text' className='w-full px-4 py-1 pl-12 rounded-shadow outline-none hidden md:block'/>
        </div>

        <div className='text-white'><FaBell className='w-6 h-6'/></div>
        
          <div className='relative'>
            <button className='text-white group'>
              <FaUserCircle className='w-6 h-6 mt-1' />
              <div className='z-10 hidden absolute bg-white rounded-lg shadow w-32 group-focus:block top-full right-0'>
                <ul className='py-2 text-sm text-gray-950'>
                  <li><a href='#'>Profile</a></li>
                  <li><a href='#'>Setting</a></li>
                  <li><a href='#'>Log Out</a></li>
                </ul>
              </div>
            </button>
          </div>
        </div>
    </nav>
  )
}

export default Navpage