import React, { useState } from 'react';
import { AiOutlineDown, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import logo from '../../assets/images/logo.svg'
import quote from '../../assets/images/quote-icon.svg'
import quote2 from '../../assets/images/quote-icon2.svg'
import arrow from '../../assets/images/down_arrow.svg'
import { Link } from "react-router-dom";

const Header = () => {
    // State to control the visibility of the mobile menu
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle the mobile menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="w-[95%] mx-auto pt-8 relative">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center space-x-2">
                    <img src={logo} alt="Logo" className="h-10" /> {/* Replace with your logo */}
                </div>

                {/* Navigation Section (Hidden on mobile) */}
                <nav className="hidden md:flex justify-center items-center space-x-8 w-[442px] h-[54px] border rounded-full bg-white">
                    <Link to="/" className="hover:text-gray-400 bg-[#1782C5] w-[70px] h-[43px] flex justify-center items-center rounded-full text-white border">Home</Link>
                    <Link to="/product" className="hover:text-gray-400">Product</Link>
                    <a href="#about" className="hover:text-gray-400">About</a>
                    <a href="#blog" className="hover:text-gray-400">Blog</a>
                    <a href="#contact" className="hover:text-gray-400">Contact</a>
                </nav>

                {/* Quote Request Button and Down Arrow (Hidden on mobile) */}
                <div className="hidden md:flex items-center">
                    <button className="bg-black hover:bg-[#1782C5] w-auto h-[48px] text-white px-4 p-2 rounded-full">
                        Quote Request
                    </button>
                    <div className='bg-black hover:bg-[#1782C5] flex items-center justify-center text-white w-[48px] h-[48px] p-1 px-4 rounded-full'>
                        <img src={arrow} className='w-[20px] h-[20px]' alt="Down arrow icon" />
                    </div>
                </div>  

                {/* Mobile Menu Button */}
                <button onClick={toggleMenu} className="md:hidden focus:outline-none">
                    {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation - Slide-in Menu */}
            <div
                className={`fixed top-0 right-0 h-full w-4/5 bg-[#FFFFFF] transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    } transition-transform duration-300 ease-in-out z-50 rounded-tl-3xl rounded-bl-3xl  border-red-500`}
            >
                {/* Close Icon at the Top */}
                <div className="flex justify-end p-4">
                    <button onClick={toggleMenu} className="text-2xl">
                        <AiOutlineClose />
                    </button>
                </div>

                {/* Logo Section */}
                <div className="p-4 ">
                    <img src={logo} alt="Logo" className="w-[189px] h-[53px]" /> {/* Replace with your logo */}
                </div>

                {/* Menu Items */}
                <div className="p-7 ">
                    <nav className="flex flex-col space-y-6 text-lg">
                        <a href="#home" className="hover:text-gray-400" onClick={toggleMenu}>Home</a>
                        <Link to="/product" className="hover:text-gray-400" onClick={toggleMenu}>Product</Link>
                        <a href="#about" className="hover:text-gray-400" onClick={toggleMenu}>About</a>
                        <a href="#blog" className="hover:text-gray-400" onClick={toggleMenu}>Blog</a>
                        <a href="#contact" className="hover:text-gray-400" onClick={toggleMenu}>Contact</a>

                        {/* Quote Request Button */}
                        <button className="bg-[#000000] hover:bg-[#1782C5] w-[251px] h-[40px] text-white px-4 py-2 rounded-lg mt-8 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <img src={quote} alt="Quote icon" />
                                <span>Quote Request</span>
                            </div>
                            <img src={quote2} alt="Quote icon"/>
                        </button>
                    </nav>
                </div>
            </div>

        </header>
    );
};

export default Header;
