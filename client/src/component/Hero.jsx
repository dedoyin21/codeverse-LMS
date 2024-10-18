import React from "react";

function Hero() {
    return (
        <>
            {/* Hero Section */}
            <div className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-b from-red-700 via-black to-black text-custom-cream">
                <div className="text-center flex flex-col gap-4 mt-4 md:mt-28 px-6 ">
                    {/* Bold Heading */}
                    <h1 className="text-4xl md:text-5xl font-bold font-cabinetGrotesk">
                    "Shape the Future of Tech by Mastering the Skills of Tomorrow"
                    </h1>
                    {/* Normal Paragraph */}
                    <p className="text-base md:text-xl px-14 justify-center items-center font-sans  font-light">
                    We are revolutionizing the World of Technology; transforming Tech Newbies into Industry Game-Changers, by enhancing their skills to prepare them for the ever-evolving Digital Age.
                    </p>
                    {/* Buttons */}
                    <div className="flex flex-col gap-4 mt-6">
                        <button className="px-4 font-sans font-normal py-2 md:px-6 md:py-3 bg-custom-red text-custom-cream text-lg md:text-xl rounded-full hover:bg-custom-cream hover:text-custom-red transition-all duration-300 w-48 mx-auto">
                            Get Started
                        </button>
                        <button className="px-4 font-sans font-normal py-2 md:px-6 text-custom-red md:py-3 bg-custom-cream  text-lg md:text-xl rounded-full hover:bg-custom-red hover:text-custom-cream transition-all duration-300 w-48 mx-auto">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;
