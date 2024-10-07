import { useState } from 'react'


function NavBar() {
  const [navbar, setNavbar] = useState(false)
  return (
    <div>
      <nav className="w-full bg-custom-white fixed top-0 left-0 pl-12 right-0 z-20">
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
          <div className={`relative mb-4 md:mb-0 ${navbar ? 'block' : 'hidden md:block'}`}>
                <input
                    type="text"
                    placeholder="Search..."
                    className="bg-custom-cream w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-custom-green"
                />
                <button className="absolute right-2 top-2 text-custom-green">
                    <img src="/search-icon.svg" alt="Search" width={20} height={20} />
                </button>
            </div>
          <div className="flex ml-10">
            <div
              className={`flex-1 justify-self-center pb-3  md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <div className="flex  flex-col md:flex-row">
               
                <ul className="flex flex-col md:flex-row w-full items-center justify-center md:items-end md:justify-end md:gap-4 md:h-auto mt-0 md:mt-4 ">
                    <li className="pb-6 text-xl font-sans font-light text-black py-2 md:px-6 text-center hover:underline hover:decoration-custom-red hover:underline-offset-2">
                        <a href="/" onClick={() => setNavbar(!navbar)}>
                            Home
                        </a>
                    </li>
                    <li className="pb-6 text-xl font-sans font-light text-black py-2 md:px-6 text-center hover:underline hover:decoration-custom-red hover:underline-offset-2">
                        <a href="#project" onClick={() => setNavbar(!navbar)}>
                            Projects
                        </a>
                    </li>
                    <li className="pb-6 text-xl font-sans font-light text-black py-2 md:px-6 text-center hover:underline hover:decoration-custom-red hover:underline-offset-2">
                        <a href="/career" onClick={() => setNavbar(!navbar)}>
                            Careers
                        </a>
                    </li>

                </ul>
                <div className="flex justify-center md:justify-start">
                  <a href="/login">
                    <button className="bg-custom-red text-xl text-white px-4 py-2 border-2 rounded-l-full rounded-r-full border-custom-orange rounded-2xl md:ml-10 md:mt-4 hover:bg-custom-orange hover:text-custom-white">
                      Login
                    </button>
                  </a>
                  <a href="/signup">
                    <button className="bg-custom-red text-xl text-white px-4 py-2 border-2 rounded-l-full rounded-r-full border-custom-orange rounded-2xl md:ml-10 md:mt-4 hover:bg-custom-orange hover:text-custom-white">
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
