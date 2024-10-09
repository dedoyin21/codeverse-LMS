import React, { useState } from "react";
import NavBar from "./NavBar";
import codeverseLogo from '../../src/assets/codeverseLogo.svg'
import { Link } from "react-router-dom";

function Login() { 
  return (
    <>
      <NavBar />
      <div className="flex justify-center items-center  bg-custom-cream">
        <div className="bg-gray-300 flex flex-col gap-8 p-8 rounded-lg shadow-lg w-[1000px] max-w-md">
          <div className="flex flex-col gap-1 justify-center items-center">
            <h2 className="text-2xl font-sans font-bold mb-6 text-center text-black">
              Login
            </h2>

            <img src={codeverseLogo} width={60} height={28} alt="logo" />
          </div>

          <form className="flex flex-col gap-6">
            <div className="flex flex-col">
              <div>
                <label
                  htmlFor="emailOrUsername"
                  className="font-medium text-black text-left"
                >
                  Email or Username
                </label>
                <input
                  type="text"
                  name="emailOrUsername"
                  placeholder="Enter email address or username"
                  className=" text-black px-2 py-3 border-2 rounded-lg focus:bg-transparent focus:outline-none focus:placeholder-transparent"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="password"
                  className="font-medium text-black text-left"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  className="text-black px-8 py-3 border-2 rounded-lg focus:bg-transparent focus:outline-none focus:placeholder-transparent"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-custom-red border text-white py-2 px-4 rounded-lg hover:broder-none hover:text-black hover:bg-custom-red"
            ></button>
            <p className="text-center text-black">
              Don't have an account yet?{' '}
              <span>
                <Link
                  to="/sign-up"
                  className="text-custom-red hover:text-custom-purple hover:underline"
                >
                  Sign Up
                </Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login;
