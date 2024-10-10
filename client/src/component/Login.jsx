import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import NavBar from './NavBar'
import codeverseLogo from '../../src/assets/codeverseLogo.svg'
import { GithubIcon, MailIcon } from 'lucide-react'

const Login = () => {
  const [emailOrUsername, setEmailOrUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(
        'http://localhost:8080/auth/local/signin',
        { emailOrUsername, password },
        { withCredentials: true }
      )
      if (response.data) {
        navigate('/dashboard')
      }
    } catch (error) {
      console.error(
        'Login error:',
        error.response ? error.response.data : error.message
      )
      alert(
        'Login failed: ' +
          (error.response ? error.response.data.message : error.message)
      )
    }
  }

  const handleOAuthLogin = (provider) => {
    window.location.href = `http://localhost:8080/auth/${provider}`
  }

  return (
    <div className="min-h-screen bg-custom-cream">
      <NavBar />
      <div className="flex justify-center items-center  bg-custom-cream mt-10 md:mt-36">
        <div className="bg-yellow-50 flex flex-col gap-8 p-8 rounded-lg shadow-lg w-[1000px] max-w-md">
          <div className="flex flex-col gap-1 justify-center items-center">
            <h2 className="text-2xl font-sans font-bold mb-6 text-center text-black">
              Login
            </h2>
            <img src={codeverseLogo} width={60} height={28} alt="logo" />
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col">
              <label
                htmlFor="emailOrUsername"
                className="font-medium text-black text-left mb-1"
              >
                Email or Username
              </label>
              <input
                type="text"
                name="emailOrUsername"
                value={emailOrUsername}
                onChange={(e) => setEmailOrUsername(e.target.value)}
                placeholder="Enter email address or username"
                className="text-black px-3 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-red"
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="font-medium text-black text-left mb-1"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="text-black px-3 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-red"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-custom-red text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300"
            >
              Sign In
            </button>
          </form>

          <div className="flex items-center">
            <hr className="flex-grow border-t border-gray-400" />
            <span className="px-3 text-gray-500">or</span>
            <hr className="flex-grow border-t border-gray-400" />
          </div>

          <div className="flex flex-col gap-3">
            <button
              onClick={() => handleOAuthLogin('google')}
              className="flex items-center justify-center gap-2 bg-white text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-100 transition duration-300 border border-gray-300"
            >
              <MailIcon size={20} />
              Sign in with Google
            </button>
            <button
              onClick={() => handleOAuthLogin('github')}
              className="flex items-center justify-center gap-2 bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300"
            >
              <GithubIcon size={20} />
              Sign in with GitHub
            </button>
          </div>

          <p className="text-center text-black">
            Don't have an account yet?{' '}
            <Link
              to="/sign-up"
              className="text-custom-red hover:text-custom-purple hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
