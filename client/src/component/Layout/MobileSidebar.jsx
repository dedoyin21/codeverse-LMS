import React from "react";
import { FaTimes } from "react-icons/fa";
import codeverseLogo from "../../assets/codeverseLogo.svg";
import SearchInput from "../UI/Search";

const MobileSidebar = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-20 flex">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />

      {/* Sidebar */}
      <div className="relative w-64 bg-custom-white dark:bg-dark-gray p-6">
        {/* Close Button */}
        <button className="absolute top-4 right-4 text-2xl" onClick={onClose}>
          <FaTimes />
        </button>

        {/* Logo */}
        <img src={codeverseLogo} alt="Logo" className="mb-6" />

        {/* Sidebar Content */}
        <SearchInput />
        <div className="mt-6 space-y-4">
          <a href="#home" className="block text-lg text-gray-900 dark:text-white">
            Home
          </a>
          <a href="#courses" className="block text-lg text-gray-900 dark:text-white">
            Courses
          </a>
          <a href="#about" className="block text-lg text-gray-900 dark:text-white">
            About Us
          </a>
          <a href="#contact" className="block text-lg text-gray-900 dark:text-white">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
