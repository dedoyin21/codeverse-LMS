import { useState } from "react";
import { BiChat } from "react-icons/bi";
import { FaBell, FaSearch, FaChevronDown, FaChevronRight } from "react-icons/fa";
import { FiTable } from "react-icons/fi";
import { GoGraph } from "react-icons/go";
import { MdOutlineHeadsetMic, MdSpaceDashboard } from "react-icons/md";
import { TbLayoutSidebarLeftCollapse, TbLayoutSidebarLeftExpand } from "react-icons/tb";
import { TiCalendar } from "react-icons/ti";

const DashboardLayout = () => {
  const [open, setOpen] = useState(true);
  const [subMenus, setSubMenus] = useState({
    inbox: false,
    settings: false,
  });

  const toggleSubMenu = (menu) => {
    setSubMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const Menus = [
    { title: "Dashboard", icon: <MdSpaceDashboard /> },
    { title: "Inbox", icon: <BiChat />, gap: true, subMenu: ["Requested Messages", "Unread Messages", "All Messages"], key: "inbox" },
    { title: "Calendar", icon: <TiCalendar /> },
    { title: "Tables", icon: <FiTable /> },
    { title: "Analytics", icon: <GoGraph /> },
    { title: "Support", icon: <MdOutlineHeadsetMic /> },
    { title: "Setting", icon: <MdOutlineHeadsetMic />, subMenu: ["General", "Security", "Notifications"], key: "settings" },
  ];

  return (
    <div className="w-full flex">
      {/* Sidebar section */}
      <div className={`${open ? "w-72 p-5" : "w-20 p-4"} bg-zinc-900 h-screen pt-8 relative duration-300 ease-in-out`}>
        <div className="absolute cursor-pointer -right-4 top-9 w-8 h-8 p-0.5 bg-zinc-50 border-2 rounded-full text-xl flex items-center justify-center transition-all" onClick={() => setOpen(!open)}>
          {open ? <TbLayoutSidebarLeftExpand /> : <TbLayoutSidebarLeftCollapse />}
        </div>

        <div className="flex gap-x-4 items-center">
          <img src="https://cdn.pixabay.com/photo/2017/02/18/19/20/logo-2078018_640.png" alt="logo" className="w-10 h-10 rounded-full" />
          <h1 className={`text-zinc-50 font-semibold text-xl ${!open && "hidden"}`}>Admin Dashboard</h1>
        </div>

        <ul className="pt-6 space-y-0.5">
          {Menus.map((Menu, index) => (
            <li key={index} className="flex flex-col rounded-md py-3 px-4 text-zinc-50 hover:bg-zinc-800/50 transition-all" onClick={() => toggleSubMenu(Menu.key)}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{Menu.icon}</span>
                  <span className={`${!open && "hidden"}`}>{Menu.title}</span>
                </div>
                {Menu.subMenu && (
                  <span className={`ml-auto transition-transform ${subMenus[Menu.key] ? "rotate-180" : ""} ${!open && "hidden"}`}>
                    {subMenus[Menu.key] ? <FaChevronDown /> : <FaChevronRight />}
                  </span>
                )}
              </div>
              {Menu.subMenu && subMenus[Menu.key] && (
                <ul className="pl-3 pt-4 text-zinc-300">
                  {Menu.subMenu.map((subMenu, subIndex) => (
                    <li key={subIndex} className="text-sm flex items-center gap-x-2 py-3 px-2 hover:bg-zinc-800 rounded-lg">
                      <FaChevronRight className="text-xs" />
                      {subMenu}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="h-screen flex-1 bg-zinc-100 space-y-6">
        <div className="w-full h-[8ch] px-12 bg-zinc-50 shadow-md flex items-center justify-between">
          <div className="w-96 border border-zinc-300 rounded-full h-11 flex items-center">
            <input type="text" placeholder="Search..." className="flex-1 h-full bg-zinc-50 px-4" />
            <button className="px-4 h-full text-zinc-600 border-l border-zinc-300">
              <FaSearch />
            </button>
          </div>

          <div className="flex items-center gap-x-8">
            <button className="relative">
              <div className="w-5 h-5 bg-zinc-50 absolute -top-1.5 -right-2.5 rounded-full flex items-center justify-center">
                <span className="bg-red-600 text-white rounded-full w-full h-full flex items-center justify-center text-xs">3</span>
              </div>
              <FaBell className="text-xl" />
            </button>

            <img src="https://cdn.pixabay.com/photo/2016/11/21/11/17/model-1844729_640.jpg" alt="profile" className="w-11 h-11 rounded-full object-cover" />
          </div>
        </div>

        <div className="w-full px-12">
          <h1 className="text-xl text-zinc-800 font-medium">This is the Dashboard page.</h1>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
