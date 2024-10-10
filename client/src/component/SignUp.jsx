import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import NavBar from "./NavBar";
import codeverseLogo from '../../src/assets/codeverseLogo.svg'


function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/auth/local/signup', {
        method: POST,
        credentials: 'include',
        headers: {
          'content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      })
      if (response.ok) {
        navigate('dashboard');
      } else {
        const errorData = await response.json();
        console.error(errorData)
      }
    } catch (error) {
      console.error('Error during Sign Up:', error);
    }
  }
  return (
    <>
      <NavBar />
      <div className="flex justify-center items-center bg-custom-cream mt-10 md:mt-36 ">
        <div className="bg-yellow-50 flex flex-col gap-8 p-8 rounded-lg shadow-lg w-[1000px] max-w-md">
          <div className="flex flex-col gap-0 justify-center items-center">
            <h1 className=" text-3xl md:text-4xl font-sans font-bold mb-6 text-center text-black">Sign Up</h1>
            <a href="/">
              <img src={codeverseLogo} width={200} height={200} alt="logo" />
            </a>
            
          </div>
          <form className="flex flex-col gap-6">
            <div className="grid w-full items-center gap-1.5">
              <label htmlFor="name" className="font-medium text-black text-left">
                Name
              </label>
              <input
                className="text-black px-8 py-3 border-2 rounded-lg focus:bg-transparent focus:outline-none focus:placeholder-transparent"
                required
                id="name"
                type="text"
                placeholder="Enter your full name"
              />
            </div>

            <div className="grid w-full items-center gap-1.5">
              <label htmlFor="email" className="font-medium text-black text-left">
                Email
              </label>
              <input
                className="text-black px-8 py-3 border-2 rounded-lg focus:bg-transparent focus:outline-none focus:placeholder-transparent"
                required
                id="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="grid w-full items-center gap-1.5">
              <label htmlFor="password" className="font-medium text-black text-left">
                Password
              </label>
              <input
                className="text-black px-8 py-3 border-2 rounded-lg focus:bg-transparent focus:outline-none focus:placeholder-transparent"
                required
                id="password"
                type="password"
                placeholder="Create a password"
              />
            </div>

            <div className="w-full">
              <button
                type="submit"
                className="w-full bg-custom-red text-white py-2 rounded hover:bg-custom-cream hover:text-custom-red"
              >
                Create Account
              </button>
            </div>
          </form>
          <div className="flex flex-col gap-0">
            <div className="flex items-center">
              <hr className="flex-grow border-t border-gray-300" />
              <span className="mx-4 text-gray-700 font-semibold">OR</span>
              <hr className="flex-grow border-t border-gray-300" />
              </div>

            <div>
              <button className="w-full mt-4 bg-red-950 text-white py-2 rounded hover:bg-custom-cream hover:text-custom-red">
                Sign up with Google
              </button>
              <p className="text-center mt-4 text-black">
                Already have an account?{' '}
                <a className="text-custom-red hover:underline" href="/sign-in">
                  Login here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Signup;
