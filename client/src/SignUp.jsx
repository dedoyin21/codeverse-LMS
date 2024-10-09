import React from "react";

function SignUp() {
  return (
    <>
        <div className="flex justify-center items-center h-screen bg-custom-cream mt-[100px]">
            <div className="bg-gray-300 flex flex-col gap-8 p-8 rounded-lg shadow-lg w-[1000px] max-w-md">
                <div className="flex flex-col gap-1 justify-center items-center">
                    <h2 className="text-2xl font-sans font-bold mb-6 text-center text-black">
                        Sign Up
                    </h2>
                    
                    <img src="/codeverseLogo.svg" width={60} height={28} alt="logo" />
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="flex flex-col">
                        <label
                            htmlFor="Username"
                            className="font-medium text-black text-left"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            name="emailOrUsername"
                            value={values.Username}
                            placeholder="Enter username"
                            onChange={handleInput}
                            className=" text-black px-2 py-3 border-2 rounded-lg focus:bg-transparent focus:outline-none focus:placeholder-transparent"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label
                            htmlFor="email"
                            className="font-medium text-black text-left"
                        >
                            Email
                        </label>
                        <input
                            type="text"
                            name="email"
                            value={values.email}
                            placeholder="Enter email address "
                            onChange={handleInput}
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
                            value={values.password}
                            placeholder="Enter password"
                            onChange={handleInput}
                            className="text-black px-8 py-3 border-2 rounded-lg focus:bg-transparent focus:outline-none focus:placeholder-transparent"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-custom-red border text-white py-2 px-4 rounded-lg hover:broder-none hover:text-black hover:bg-custom-red"
                    >
                        {isLoading ? 'Logging in...' : 'Login'}
                    </button>
                    <p className="text-center text-black">
                        Already have an account{' '}
                        <span>
                        <Link
                           to="/login"
                            className="text-custom-red hover:text-custom-purple hover:underline"
                        >
                            Login
                        </Link>
                        </span>
                    </p>
                </form>
            </div>
        </div>
        
    </>
    
  );
}

export default SignUp;
