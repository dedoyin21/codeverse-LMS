import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'

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
    <div>
      <form className="space-y-12 w-full sm:w-[400px]">
        <div className="grid w-full items-center gap-1.5">
          <label htmlFor="name" className="block text-sm font-medium">
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
          <label htmlFor="email" className="block text-sm font-medium">
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
          <label htmlFor="password" className="block text-sm font-medium">
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

      <div>
        <button className="w-full mt-4 bg-red-500 text-white py-2 rounded hover:bg-red-600">
          Sign up with Google
        </button>
        <p className="text-center mt-4">
          Already have an account?{' '}
          <a className="text-indigo-500 hover:underline" href="/sign-in">
            Login here
          </a>
        </p>
      </div>
    </div>
  )
}

export default Signup;
