import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

export default function Sidebar({ children }) {
    const [expanded, setExpanded] = useState(true);
    return (
        <aside className={`md:relative md:flex md:flex-col bg-custom-red border-r shadow-sm dark:bg-dark-gray ${expanded ? 'absolute' : 'hidden'} md:block h-screen z-20`}>
            <div className="p-4 pb-2 flex justify-end items-center">
                <button onClick={() => setExpanded((curr) => !curr)} className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
                    {expanded ? <FaAngleDoubleLeft /> : <FaAngleDoubleRight />}
                </button>
            </div>

            <SidebarContext.Provider value={{ expanded }}>
                <ul className="flex-1 px-3">{children}</ul>
            </SidebarContext.Provider>
        </aside>
    );
}

export function SidebarItem({ icon, text, active, alert }) {
    const { expanded } = useContext(SidebarContext);
    return (
        <li className={`text-custom-cream relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${active ? "bg-gradient-to-tr from-custom-red to-custom-cream text-custom-red" : "hover:bg-custom-red dark:text-dark-text"}`}>
            {icon}
            <span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>{text}</span>
            {alert && <div className={`absolute right-2 w-2 h-2 rounded bg-custom-cream dark:bg-alert ${expanded ? "" : "top-2"}`} />}
            {!expanded && (
                <div className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-custom-red text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>
                    {text}
                </div>
            )}
        </li>
    );
}
