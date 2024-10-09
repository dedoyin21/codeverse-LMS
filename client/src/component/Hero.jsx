import React from "react";


function Hero() {
    return(
        <>
            <div className="w-full h-full bg-custom-cream top-5 items-center justify-center">
                <div className=" bg-custom-cream items-center justify-center px-4  md:gap-28 md:px-12 md:pb-8 text-black ">
                    <div className="flex flex-col md:flex-row gap-8 px-6 md:px-6 mt-32 md:mt-28 ">
                        <div className="flex flex-col gap-4 mt-16">
                            <h1 className="text-custom-red text-4xl font-serif font-semibold text-left justify-center">
                                "Discover a dynamic learning experience that empowers you to master the latest technologies, build innovative solutions,
                                and shape your future in a world driven by digital transformation..."
                            </h1>
                            <p>Read more</p>
                            <div>
                                <button className="px-4 py-1 bg-custom-red text-white rounded-2xl hover:bg-custom-orange transition duration-300">
                                    Get Started
                                </button>
                            </div>

                        </div>
                        <div>
                            <img
                                src="/pict1.jpg"
                                alt="pict"
                                className="scale-[0.7] text-gray-500"
                            />
                            
                        </div>
                        
                    </div>
                </div>
                <div className='bg-white px-4 py-10 z-10'>
                    <div className="bg-custom-blue text-custom-yellow flex flex-row gap-4 md:gap-8 mx-auto w-[45%] py-8 justify-center items-center z-10 -mt-28 ">
                        <div className='land'>
                            <h1 className="text-4xl font-bold ">10K+</h1>
                            <p>Success Stories</p>
                        </div>

                        <hr className='bg-white w-1 h-12 mx-4' />

                        <div className='t-p'>
                            <h1 className="text-4xl font-bold">15K+</h1>
                            <p>Trained Persons</p>
                            
                        </div>

                        <hr className='bg-white w-1 h-12 mx-4' />

                        <div className='b-d'>
                            <h1 className="text-4xl font-bold">350</h1>
                            <p>Business Developed</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Hero