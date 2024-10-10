import '../index.css';
import Navbar from '../component/header';
import ThemeContextProvider from '../Context/ThemeContextProvider';
import { FaHome, FaTachometerAlt, FaStickyNote, FaLayerGroup, FaFlag, FaCalendar, FaLifeRing, FaCog } from "react-icons/fa";
import Sidebar, { SidebarItem } from "../component/Sidebar";

function Dashboard() {

  return (
    <ThemeContextProvider>
      <div className="flex">
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
      </div>
      <div
        className="grow ml-16 md:ml-64 h-full lg:h-screen bg-custom-white text-gray-900
      dark:bg-gray-900 dark:text-white"
      >
        <Navbar />
      </div>
    </ThemeContextProvider>
  )
}

export default Dashboard


