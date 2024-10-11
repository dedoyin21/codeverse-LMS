import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className='bg-custom-cream text-sm '>
            <div className="w-full px-4 mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
                <div className='flex flex-col p-6 gap-4 md:flex-row md:gap-32 md:pt-9'>
                    
                    <div className='pb-4 gap-4'>
                        <p className='text-black font-sans'>Powered by:</p>
                        <a href="/">
                            <img src="/codeverseLogo.svg" width={200} height={30.8} alt="logo" className="md:w-30 h-6.5" />
                        </a>
                        <div className='py-6'>
                            <ul className='flex flex-row gap-2'>
                                <li>
                                    <a href="https://web.facebook.com/Codeverse.Africa">
                                        <img src="/ri_facebook-fill.svg" alt="facebook" />
                                    </a>
                                </li>

                                <li>
                                    <a href="https://www.instagram.com/codeverse.africa/">
                                        <img src="/mdi_instagram.svg" alt="instagram" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://x.com/CodeverseAfrica">
                                        <img src="/icons8-twitterx.svg" alt="twitter" className='w-6' />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/company/codeverseng/">
                                        <img src="/bi_linkedin.svg" alt="linkedin" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/@codeverse_africa">
                                        <img src="/ri_youtube-fill.svg" alt="youtube" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <p className='text-black pb-3'>+234 806 1912 304</p>
                        <p className='text-black'>©2024 Codeverse Africa. All rights reserved.</p>
                    </div>

                    <div className='pb-8 font-sans'>
                        <h2 className='text-black font-semibold font-sans'>Program</h2>
                        <a href="/design" className="block py-2 text-black hover:text-custom-red">
                            Product Design
                        </a>
                        <a href="/frontend" className="block py-2 text-black hover:text-custom-red">
                            FrontEnd Web Development
                        </a>
                        <a href="/backend" className="block py-2 text-black hover:text-custom-red">
                            BackEnd Web Development
                        </a>
                        <a href="/fullstack" className="block py-2 text-black hover:text-custom-red">
                            Fullstack Web Development
                        </a>
                        <a href="/data" className="block py-2 text-black hover:text-custom-red">
                            Data Analytics
                        </a>
                    </div>

                    <div className='pb-8 font-sans'>
                        <h2 className='text-black font-semibold font-sans'>About Us</h2>
                        <a href="/" className="block py-2 text-black hover:text-custom-red">
                            Story
                        </a>
                        <a href="#/" className="block py-2 text-black hover:text-custom-red">
                            Blog
                        </a>
                    </div>

                    <div className='pb-8'>
                        <h2 className='text-black font-semibold font-sans'>Resources</h2>
                        <a href="/" className="block py-2 text-black hover:text-custom-red">
                            Privacy Policy
                        </a>
                        <a href="/" className="block py-2 text-black hover:text-custom-red">
                            FAQs
                        </a>
                    </div>

                </div>
            </div>
          {/*   <div className='-mt-20 md:-mt-16'>
                <img src='/site shapes.svg' alt='shape' className='scale-[1]' />
            </div> */}
        </div>
    );
};

export default Footer;
