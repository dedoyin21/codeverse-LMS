import React, { useState } from "react";
import { useRouter } from "next/router";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const onSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., authentication)
    console.log("Email:", email, "Password:", password);

    // Redirect to dashboard after successful login (example)
    router.push("/dashboard");
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="space-y-12 w-full sm:w-[400px]">
        <div className="grid w-full items-center gap-1.5">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Updates email state
            id="email"
            type="email"
            placeholder="Enter your email"
          />
        </div>

        <div className="grid w-full items-center gap-1.5">
          <label htmlFor="password" className="block text-sm font-medium">
            Password
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Updates password state
            id="password"
            type="password"
            placeholder="Enter your password"
          />
        </div>

        <div className="w-full">
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Login
          </button>
        </div>
      </form>

      <div>
        <button
          className="w-full mt-4 bg-red-500 text-white py-2 rounded hover:bg-red-600"
        >
          Sign in with Google
        </button>
        <p className="text-center mt-4">
          Need to create an account?{' '}
          <a className="text-indigo-500 hover:underline" href="/register">
            Create Account
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
