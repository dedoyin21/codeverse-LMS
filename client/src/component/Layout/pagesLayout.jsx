import '../../index.css';
import Navbar from '../header';
import ThemeContextProvider from '../../Context/ThemeContextProvider';
import { FaHome, FaTachometerAlt, FaStickyNote, FaLayerGroup, FaFlag, FaCalendar, FaLifeRing, FaCog } from "react-icons/fa";
import Sidebar, { SidebarItem } from "../Sidebar";
import { Link } from 'react-router-dom';


function Layout({ children }) {
    return (
      <ThemeContextProvider>
        {/* Wrapper with flex-col layout to place Navbar at the top */}
        <div className="flex flex-col min-h-screen dark:to-dark-gray">
          <Navbar />
          <div className="flex flex-grow">
            <Sidebar>
              <Link to="/">
                  <SidebarItem icon={<FaHome size={20} />} text="Home" alert />
              </Link>
  
              <Link to="/dashboard">
                  <SidebarItem icon={<FaTachometerAlt size={20} />} text="Dashboard" active />
              </Link>
  
              <Link to="/projects">
                  <SidebarItem icon={<FaStickyNote size={20} />} text="Projects" alert />
              </Link>
  
              <Link to="/calendar">
                  <SidebarItem icon={<FaCalendar size={20} />} text="Calendar" />
              </Link>
  
              <Link to="/tasks">
                  <SidebarItem icon={<FaLayerGroup size={20} />} text="Tasks" />
              </Link>
              <hr className="my-3" />
  
              <Link to="/settings">
                  <SidebarItem icon={<FaCog size={20} />} text="Settings" />
              </Link>
            </Sidebar>
            
            <main className="flex-grow p-4 dark:bg-dark-gray">
              {children}
            </main>
          </div>
        </div>
      </ThemeContextProvider>
    );
  }
  
  export default Layout;
  

