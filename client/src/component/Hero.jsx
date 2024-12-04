import React from "react";

function Hero() {
    return (
        <>
            <div className="w-full h-screen flex flex-col-reverse md:flex-row justify-center items-center  bg-custom-cream">
                <div className="w-full md:w-1/2 flex flex-col gap-4 mt-4 lg:mt-20 px-4 md:px-10 lg:px-16">
                    <h1 className=" text-custom-blue text-center md:text-left text-3xl md:text-4xl lg:text-5xl font-bold font-cabinetGrotesk">
                        Invest in Knowledge and <span className="text-custom-yellow">Your Future</span>
                    </h1>
                    <p className="text-sm px-2 md:px-4 font-sans font-normal text-gray-600">
                        We are revolutionizing the World of Technology; transforming Tech Newbies into Industry Game-Changers, by enhancing their skills to prepare them for the ever-evolving Digital Age.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 mt-6">
                        <button className="px-3 py-2 md:px-5 md:py-2 bg-custom-red text-custom-cream text-base md:text-lg rounded-full hover:bg-custom-cream hover:text-custom-red transition-all duration-300 w-40 mx-auto md:mx-0">
                            Get Started
                        </button>
                        <button className="px-3 py-2 md:px-5 md:py-2 border-custom-red border-2 bg-custom-cream text-custom-red text-base md:text-lg rounded-full hover:bg-custom-red hover:text-custom-cream transition-all duration-300 w-40 mx-auto md:mx-0">
                            Learn More
                        </button>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="relative flex -space-x-4">
                            <img src="/student.png" alt="Student 1" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                            <img src="/student1.png" alt="Student 2" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                            <img src="/student3.jpg" alt="Student 3" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                            <img src="/student4.jpg" alt="Student 4" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                        </div>
                        <div className="flex flex-col items-left">
                            <p className="text-2xl text-custom-red font-bold">165+</p>
                            <p className="text-sm text-gray-500">Enrolled Students</p>
                        </div>
                    </div>
                </div>
                
                <div className="w-full md:w-1/2 flex justify-left mt-10 md:mt-20 ">
                    <img 
                        src="/man.png" 
                        alt="Illustration of tech advancements"
                        className=""
                    />
                </div>
            </div>
        </>
    );
}

export default Hero;
