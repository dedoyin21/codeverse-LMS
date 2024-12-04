/* import React, { useState } from 'react';
import '../../index.css';
import Navbar from './header';
import Sidebar from '../UI/sidenew';
import ThemeContextProvider from '../../Context/ThemeContextProvider';
import Topbar from '../UI/mainDash';

function Layout({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isActive, setIsActive] = useState(false); // Add active state

  // Toggle sidebar collapsed state
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    setIsActive(!isActive); // Toggle active state
  };

  return (
    <ThemeContextProvider>
      <div className={`flex min-h-screen ${isActive ? 'sidebar-active' : ''} bg-custom-white dark:bg-dark-gray`}>
        
        <div className={`${isCollapsed ? 'w-20' : 'w-64'} transition-width duration-500`}>
          <Sidebar isCollapsed={isCollapsed} isActive={isActive} toggleSidebar={toggleSidebar} />
        </div>

        {/* Main content area with Navbar and children 
        <div className="flex flex-col flex-grow">
          {/* Pass toggleSidebar to Topbar for triggering 
          <Topbar toggleSidebar={toggleSidebar} />

          <main className="flex-grow p-4 dark:bg-dark-gray">
            {children}
          </main>
        </div>
      </div>
    </ThemeContextProvider>
  );
}

export default Layout;
 */

import '../../index.css';
import React, { useState } from 'react'
import Sidebar from '../Layout/Sidebar'
import Dashboard from '../Layout/dashboard'

function pagesLayout() {
  const [sidebarToggle, setSidebarToggle] = useState(false)
  return (
    <div className='flex'>
      <Sidebar sidebarToggle={sidebarToggle} />
      <Dashboard 
      sidebarToggle={sidebarToggle}
      setSidebarToggle={setSidebarToggle}/>
      
    </div>
  )
}

export default pagesLayout


