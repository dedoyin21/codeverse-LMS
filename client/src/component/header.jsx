import React, { useContext } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { ThemeCotext } from '../Context/ThemeContextProvider'
import codeverseLogo from '../../src/assets/codeverseLogo.svg'
import AccountDemoSignedIn from "../component/Account"

const Navbar = () => {
    const {theme, toggleTheme} = useContext(ThemeCotext)
  return (
    <div className='bg-custom-white dark:bg-dark-gray text-gray-900 border-b border-gray-300 p-4 flex justify-between items-center dark:border-gray-600 dark:text-dark-text'>
        <img src={codeverseLogo} className={`overflow-hidden transition-all`} alt="Logo" />

        <div>
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <img
              src="/search-icon.svg"
              alt="Search Icon"
              className="w-5 h-5 text-gray-500"
            />
          </div>

          <div className="flex gap-4">
            <AccountDemoSignedIn />

            <button className='text-2xl text-dark' onClick={toggleTheme}>
                {theme === "light" ? <FaMoon /> : <FaSun />}
            </button>
          </div>
        </div>
        
       
    </div>
  )
}

export default Navbar