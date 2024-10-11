import React, { useContext } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { ThemeCotext } from '../Context/ThemeContextProvider'
import codeverseLogo from '../../src/assets/codeverseLogo.svg'
import AccountDemoSignedIn from "../component/Account"

const Navbar = () => {
    const {theme, toggleTheme} = useContext(ThemeCotext)
  return (
    <div className='bg-custom-white text-gray-900 border-b border-gray-300 p-4 flex justify-between items-center dark:border-gray-600 dark:bg-gray-900 dark:text-white'>
        <img src={codeverseLogo} className={`overflow-hidden transition-all`} alt="Logo" />

        
        <div className="flex gap-4">
          <AccountDemoSignedIn />

          <button className='text-2xl text-dark' onClick={toggleTheme}>
              {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
        </div>
       
    </div>
  )
}

export default Navbar