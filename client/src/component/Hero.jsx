import React from "react";

function Hero() {
    return (
        <>
            {/* Hero Section */}
            <div className="w-full h-screen flex flex-col justify-center items-center relative">
                <div className="bg-[url('/page.jpg')] bg-cover bg-center w-full h-full flex items-center justify-center px-4 md:px-12">
                    <div className="flex px-4 md:px-6 items-start w-full max-w-7xl">
                        <div className="flex flex-col gap-4 w-full md:w-1/2 mt-20 md:mt-36 pb-4 md:pb-8 self-stretch">
                            <h1 className="text-custom-red text-3xl md:text-6xl font-serif font-semibold leading-snug text-left">
                                "Empowering Tech Innovators Around the World"
                            </h1>
                            <p className="text-gray-700 text-lg md:text-xl mt-4">
                                Join thousands of innovators on a journey to build a smarter world through technology and collaboration.
                            </p>
                            <div className="mt-6">
                                <button className="px-6 py-2 md:px-8 md:py-3 bg-custom-red text-white text-lg md:text-xl rounded-full hover:bg-custom-orange transition-all duration-300">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="py-8 md:py-12 bg-custom-cream w-full">
                    <div className="text-black flex flex-col md:flex-row gap-6 md:gap-20 justify-center items-center max-w-7xl mx-auto">
                        {/* First Stat */}
                        <div className="flex flex-row gap-4 items-center">
                            <div className="block border-2 p-4 bg-custom-blue rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300">
                                <img src="/people-group-solid.svg" alt="people" className="w-16 md:w-20 h-16 md:h-20" />
                            </div>
                            <div className="text-left">
                                <h1 className="text-3xl md:text-4xl font-bold">150+</h1>
                                <p className="text-gray-600">From the world's best</p>
                            </div>
                        </div>

                        {/* Second Stat */}
                        <div className="flex flex-row gap-4 items-center">
                            <div className="border-2 p-4 bg-custom-purple rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300">
                                <img src="/icons-screen.png" alt="screen" className="w-16 md:w-20 h-16 md:h-20" />
                            </div>
                            <div className="text-left">
                                <h1 className="text-3xl md:text-4xl font-bold">20 Lessons</h1>
                                <p className="text-gray-600">Average per class</p>
                            </div>
                        </div>

                        {/* Third Stat */}
                        <div className="flex flex-row gap-4 items-center">
                            <div className="border-2 p-4 bg-custom-yellow rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300">
                                <img src="/clock-regular.svg" alt="clock" className="w-16 md:w-20 h-16 md:h-20" />
                            </div>
                            <div className="text-left">
                                <h1 className="text-3xl md:text-4xl font-bold">10 Minutes</h1>
                                <p className="text-gray-600">Average per lesson</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;
