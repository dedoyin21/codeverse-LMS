/* import React from 'react'
import { FaTachometerAlt, FaShoppingCart, FaUsers, FaUser, FaBox, FaCog } from 'react-icons/fa';
import codeverseLogo from '../../src/assets/codeverseLogo.svg'

const Sidebar = () => {
	return (
		<div className="bg-custom-white text-gray-900 h-screen px-4 fixed w-16 md:w-64 border-r border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white">
			
			<img src={codeverseLogo} 
				alt="Logo"
				width={140}
				className='py-4'
			/>

			<ul className='flex flex-col mt-5 text-xl'>
				<li className='flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:bg-blue-600 hover:text-white'>
					<FaTachometerAlt />
					<span className='hidden md:inline'>Dashboard</span>
				</li>
				<li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:text-white hover:bg-blue-600">
					<FaShoppingCart />
					<span className="hidden md:inline ">Courses</span>
				</li>
				<li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:text-white hover:bg-blue-600">
					<FaUsers />
					<span className="hidden md:inline ">Projects</span>
				</li>
				<li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:text-white hover:bg-blue-600">
					<FaUser />
					<span className="hidden md:inline ">Users</span>
				</li>
				<li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:text-white hover:bg-blue-600">
					<FaBox />
					<span className="hidden md:inline ">Products</span>
				</li>
				<li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:text-white hover:bg-blue-600">
					<FaCog />
					<span className="hidden md:inline ">Settings</span>
				</li>
			</ul>
		</div>
	)
}

export default Sidebar  */

import { FaAngleDoubleLeft, FaAngleDoubleRight, FaEllipsisV } from "react-icons/fa";
import codeverseLogo from '../../src/assets/codeverseLogo.svg'
/* import profile from "../assets/profile.png";
 */import { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

export default function Sidebar({ children }) {
    const [expanded, setExpanded] = useState(true);
    return (
        <aside className="h-screen">
            <div className="h-full flex flex-col bg-white border-r shadow-sm">
                <div className="p-4 pb-2 flex justify-between items-center">
                    <img src={codeverseLogo} className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"}`} alt="Logo" />
                    <button onClick={() => setExpanded((curr) => !curr)} className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
                        {expanded ? <FaAngleDoubleLeft /> : <FaAngleDoubleRight />}
                    </button>
                </div>

                <SidebarContext.Provider value={{ expanded }}>
                    <ul className="flex-1 px-3">{children}</ul>
                </SidebarContext.Provider>

                <div className="border-t flex p-3">
                    <div className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>
                        <div className="leading-4">
                            <h4 className="font-semibold">constGenius</h4>
                            <span className="text-xs text-gray-600">constgenius@gmail.com</span>
                        </div>
                        <FaEllipsisV size={20} />
                    </div>
                </div>
            </div>
        </aside>
    );
}

export function SidebarItem({ icon, text, active, alert }) {
    const { expanded } = useContext(SidebarContext);
    return (
        <li className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${active ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-indigo-50 text-gray-600"}`}>
            {icon}
            <span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>{text}</span>
            {alert && <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? "" : "top-2"}`} />}
            {!expanded && (
                <div className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>
                    {text}
                </div>
            )}
        </li>
    );
}


