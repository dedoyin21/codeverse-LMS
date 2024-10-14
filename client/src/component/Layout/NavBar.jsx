import { useState } from 'react'
import { Link } from 'react-router-dom'
import codeverseLogo from '../../assets/codeverseLogo.svg'
import { TfiAngleDown } from "react-icons/tfi";

function NavBar() {
  const [navbar, setNavbar] = useState(false)
  return (
    <div>
      <nav className="w-full bg-custom-white fixed top-0 left-0 pt-4  right-0 z-20">
        <div className="justify-between max-w-full px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:gap-40 md:px-2 md:mx-2">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <div className='flex flex-row gap-6 md:gap-20'>
                <div className='pl-4 md:pl-10'>
                  <a href="/" className="flex flex-row gap-4">
                    <img src={codeverseLogo} width={200} height={200} alt="logo" />
                  </a>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    className="bg-white pl-10 pr-4 py-2 border border-custom-red rounded-2xl focus:outline-none focus:ring-1 focus:ring-custom-blue focus:text-black focus:border-transparent"
                    placeholder="Search courses"
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <img
                      src="/search-icon.svg"
                      alt="Search Icon"
                      className="w-5 h-5 text-gray-500"
                    />
                  </div>
                 
                </div>
              </div>

              <div className="md:hidden">
                <button
                  className="p-2 text-custom-green rounded-md outline-none focus:underline focus:underline-offset-2 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <img
                      src="/xmark.svg"
                      width={30}
                      height={30}
                      alt="close menu"
                    />
                  ) : (
                    <img
                      src="/nav.svg"
                      width={30}
                      height={30}
                      alt="open menu"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="flex ml-10">
            <div
              className={`flex-1 justify-self-center pb-3  md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-2 md:p-0 block' : 'hidden'
              }`}
            >
              <div className="flex flex-col md:gap-12 md:flex-row">
                <ul className="flex flex-col gap-2   md:flex-row w-full items-center justify-center md:items-end md:justify-end md:gap-2 md:h-auto mt-0 md:mt-4 ">
                  <li className="relative group pb-6 text-base text-black py-2 md:px-6 text-center md:border-b-0 hover:bg-custom-cream hover:text-black md:hover:text-custom-red">
                    <a
                      href="#program"
                      onClick={() => setNavbar(!navbar)}
                      className="flex items-center ml-10 md:ml-0"
                    >
                      Courses
                      <TfiAngleDown className="hidden md:block w-3 h-3 ml-2 mt-1" /> 
                    </a>
                    <div className="bg-gray text-base absolute left-0 md:hidden mt-3 w-52 md:bg-white md:shadow-lg md:group-hover:block md:text-xl md:text-left">
                      <a
                        href="/design"
                        className="block px-4 py-2 text-black hover:bg-custom-cream hover:text-custom-red"
                      >
                        Product Design
                      </a>
                      <a
                        href="/frontend"
                        className="block px-4 py-2 text-black hover:bg-custom-cream hover:text-custom-red"
                      >
                        FrontEnd Web Development
                      </a>
                      <a
                        href="/backend"
                        className="block px-4 py-2 text-black hover:bg-custom-cream hover:text-custom-red"
                      >
                        BackEnd Web Development
                      </a>
                      <a
                        href="/fullstack"
                        className="block px-4 py-2 text-black hover:bg-custom-cream hover:text-custom-red"
                      >
                        Fullstack Web Development
                      </a>
                      <a
                        href="/dataanalytics"
                        className="block px-4 py-2 text-black hover:bg-custom-cream hover:text-custom-red"
                      >
                        Data Analytics
                      </a>
                    </div>
                  </li>
                  <li className="mt-72 md:mt-0 pb-6 text-base text-gray-800 py-2 px-6 text-center md:border-b-0 hover:bg-custom-cream hover:text-black md:hover:text-custom-red">
                    <a href="" onClick={() => setNavbar(!navbar)}>
                      About
                    </a>
                  </li>
                </ul>

                <div className="flex justify-center">
                  <hr className='bg-custom-purple w-[2px] h-5 mt-8' />
                  <Link to="/sign-in">
                    <p className="text-custom-purple font-semibold text-xl px-2 md:ml-8  md:mt-6  hover:text-custom-red">
                      Login
                    </p>
                  </Link>
                  <Link to="/sign-up">
                    <button className="bg-custom-purple font-semibold text-xl text-white px-4 py-1 border-2  border-custom-purple  md:ml-4 md:mt-4 rounded-2xl hover:bg-custom-cream hover:text-custom-red">
                      SignUp
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar