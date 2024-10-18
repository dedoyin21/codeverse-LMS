import '../index.css';
import Navbar from '../component/header';
import ThemeContextProvider from '../Context/ThemeContextProvider';
import { FaHome, FaTachometerAlt, FaStickyNote, FaLayerGroup, FaFlag, FaCalendar, FaLifeRing, FaCog } from "react-icons/fa";
import Sidebar, { SidebarItem } from "../component/Layout/Sidebar";
import HorizontalCard from "../component/CardCourses/Card"

function Dashboard() {
  return (
    <ThemeContextProvider>
      {/* Wrapper with flex-col layout to place Navbar at the top */}
      <div className="flex flex-col min-h-screen dark:to-dark-gray">
        <Navbar />
        <div className="flex flex-grow">
          <Sidebar>
            <SidebarItem icon={<FaHome size={20} />} text="Home" alert />
            <SidebarItem icon={<FaTachometerAlt size={20} />} text="Dashboard" active />
            <SidebarItem icon={<FaStickyNote size={20} />} text="Projects" alert />
            <SidebarItem icon={<FaCalendar size={20} />} text="Calendar" />
            <SidebarItem icon={<FaLayerGroup size={20} />} text="Tasks" />
            <SidebarItem icon={<FaFlag size={20} />} text="Reporting" />
            <hr className="my-3" />
            <SidebarItem icon={<FaCog size={20} />} text="Settings" />
            <SidebarItem icon={<FaLifeRing size={20} />} text="Help" />
          </Sidebar>
          
          {/* Main content area */}
          <div className="flex-grow p-4">
            {/* Your main content here */}
            <HorizontalCard />
          </div>  
        </div>
      </div>
    </ThemeContextProvider>
  );
}

export default Dashboard;
