import { useState } from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  const [navbar, setNavbar] = useState(false)
  return (
    <div>
      <nav className="w-full bg-custom-white fixed top-0 left-0  right-0 z-20">
        <div className="justify-between max-w-full px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:gap-40 md:px-2 md:mx-2">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <a href="/" className="flex flex-row gap-4">
                <img src="/codeverseLogo.svg" width={200} height={200} alt="logo" />
              </a>

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
              <div className="flex flex-col md:flex-row">
                    <div className="flex items-center justify-center mt-4">
                        <div className="relative">
                            <input
                                type="text"
                                className="bg-custom-cream pl-10 pr-4 py-2 border border-custom-red rounded-2xl focus:outline-none focus:ring-1 focus:ring-custom-blue focus:text-black focus:border-transparent"
                                placeholder="Search..."
                            />
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <img
                                src="/search-icon.svg"
                                alt="Search Icon"
                                className="w-5 h-5 text-gray-500"
                            />
                            </div>
                        </div>
                        <button className="ml-2 px-4 py-1 bg-custom-red text-white rounded-2xl hover:bg-custom-orange transition duration-300">
                            Search
                        </button>
                    </div>

                <ul className="flex flex-col gap-2 ml-4  md:flex-row w-full items-center justify-center md:items-end md:justify-end md:gap-2 md:h-auto mt-0 md:mt-4 ">
                  <li className="pb-6 text-lg font-sans font-light text-black py-2 md:px-4 text-center hover:underline hover:decoration-custom-red hover:underline-offset-2">
                    <a href="/" onClick={() => setNavbar(!navbar)}>
                      Home
                    </a>
                  </li>
                  <li className="pb-6 text-lg font-sans font-light text-black py-2 md:px-4 text-center hover:underline hover:decoration-custom-red hover:underline-offset-2">
                    <a href="" onClick={() => setNavbar(!navbar)}>
                      Latest News
                    </a>
                  </li>
                  
                </ul>

                <div className="flex justify-center">
                    <Link href="/login">
                        <button className="bg-custom-red text-base text-white px-2 py-1 border-2  border-custom-red rounded-2xl md:ml-10 md:mt-6 hover:bg-custom-cream hover:text-custom-red">
                        Login
                        </button>
                    </Link>
                    <a href="/signup">
                        <button className="bg-custom-red text-xl text-white px-4 py-2 border-2  border-custom-red  md:ml-4 md:mt-4 rounded-xl hover:bg-custom-cream hover:text-custom-red">
                            SignUp
                        </button>
                    </a>
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
