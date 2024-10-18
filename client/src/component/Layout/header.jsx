import React, { useContext } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { ThemeCotext } from '../../Context/ThemeContextProvider'
import codeverseLogo from "../../assets/codeverseLogo.svg"
import AccountDemoSignedIn from "../Account"
import SearchBar from "../UI/Search"
import Noty from '../UI/Noty'

const NavbarPage = () => {
    const {theme, toggleTheme} = useContext(ThemeCotext)
  return (
    <div className='bg-custom-white dark:bg-dark-gray text-gray-900 border-b border-gray-300 p-4 flex justify-between items-center dark:border-gray-600 dark:text-dark-text'>
        <img src={codeverseLogo} className={`overflow-hidden transition-all`} alt="Logo" />
        
          <div className="flex gap-4">
            {/* <div className='mr-24' >
              <SearchBar />
            </div> */}
            <Noty width={"40px"} color={"black"} count={10} />
            <AccountDemoSignedIn />

            <button className='text-2xl text-dark' onClick={toggleTheme}>
                {theme === "light" ? <FaMoon /> : <FaSun />}
            </button>
          </div>
        </div>
  )
}

export default NavbarPage