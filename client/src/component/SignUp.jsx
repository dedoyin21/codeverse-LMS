import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from "./NavBar";
import codeverseLogo from '../../src/assets/codeverseLogo.svg'
import { GithubIcon, MailIcon } from 'lucide-react'


function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSignUp = async (event) => {
    event.preventDefault()
    try {
      const response = await fetch('http://localhost:8080/auth/local/signup', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      })

      if (response.ok) {
        navigate('http://localhost:5173/dashboard')
      } else {
        const errorData = await response.json()
        console.error(errorData)
      }
    } catch (error) {
      console.error('Error during Sign Up:', error)
    }
  }

  const handleOAuthSignUp = (provider) => {
    window.location.href = `http://localhost:8080/auth/${provider}`
  }

  return (
    <div className="min-h-screen bg-custom-cream flex justify-center items-center">
      <div className="bg-gray-300 flex flex-col gap-8 p-8 rounded-lg shadow-lg w-[400px] max-w-md">
        <h2 className="text-2xl font-sans font-bold mb-6 text-center text-black">
          Sign Up
        </h2>

        <form className="space-y-6" onSubmit={handleSignUp}>
          <div className="grid w-full items-center gap-1.5">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-black"
            >
              Name
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              required
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="grid w-full items-center gap-1.5">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-black"
            >
              Email
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              required
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="grid w-full items-center gap-1.5">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-black"
            >
              Password
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              required
              id="password"
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="w-full">
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
            >
              Create Account
            </button>
          </div>
        </form>

        <div className="flex items-center">
          <hr className="flex-grow border-t border-gray-400" />
          <span className="px-3 text-gray-500">or</span>
          <hr className="flex-grow border-t border-gray-400" />
        </div>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => handleOAuthSignUp('google')}
            className="flex items-center justify-center gap-2 bg-white text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-100 transition duration-300 border border-gray-300"
          >
            <MailIcon size={20} />
            Sign up with Google
          </button>
          <button
            onClick={() => handleOAuthSignUp('github')}
            className="flex items-center justify-center gap-2 bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300"
          >
            <GithubIcon size={20} />
            Sign up with GitHub
          </button>
        </div>

        <p className="text-center text-black">
          Already have an account?{' '}
          <a
            className="text-custom-red hover:text-custom-purple hover:underline"
            href="/sign-in"
          >
            Login here
          </a>
        </p>
      </div>
    </div>

  )
}

export default Signup
