import React from "react";


function Hero() {
    return(
        <>
            <div className="w-full h-full top-5 items-center justify-center">
                <div className=" bg-[url('/page.jpg')] items-center justify-center px-4  md:gap-8 md:mt-28 md:px-12 text-black ">
                    <div className=" flex px-6 md:px-6 items-start">
                        <div className="flex flex-col gap-4 w-1/2 mt-32 self-stretch">
                            <h1 className="text-custom-red  text-5xl font-serif font-semibold text-left">
                                "Empowering Techinnovators Around the World"
                            </h1>
                            
                            <div>
                                <button className="px-4 py-1 bg-custom-red text-white rounded-2xl hover:bg-custom-orange transition duration-300">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='py-8'>
                    <div className="bg-custom-cream text-black flex flex-row gap-4 md:gap-20 justify-center items-center">
                        <div className="flex flex-row gap-4 ">
                            <div className="block border px-4 w-[100px] bg-custom-blue rounded-xl">
                                 <img
                                    src="/people-group-solid.svg"
                                    alt="image"
                                    className="w-[80px] h-[80px]"
                                />
                            </div>
                            <div className="mt-6">                         
                                <h1 className="text-4xl font-bold">150+</h1>
                                <p className="text-gray-600">From the world's best</p>
                                
                            </div>
                        </div>
                        <div className="flex flex-row gap-4">
                            <div className="border px-4 w-[100px] bg-custom-purple rounded-xl">
                                <img
                                    src="/icons-screen.png"
                                    alt="image"
                                    className="w-[80px] h-[80px] "
                                />
                            </div>

                            <div className="mt-6">
                            
                                <h1 className="text-4xl font-bold">20 lessons</h1>
                                <p className="text-gray-600">Avrage per class</p>
                                
                            </div>
                        </div>
                        <div className="flex flex-row gap-4">
                            <div className=" border px-4 w-[100px] bg-custom-yellow rounded-xl">
                                <img
                                src="/clock-regular.svg"
                                alt="image"
                                className="w-[70px] h-[70px]"
                                />
                            </div>
                                
                            <div className="mt-6">
                                <h1 className="text-4xl font-semibold">10 minutes</h1>
                                <p className="text-gray-600">Average per lesson </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero