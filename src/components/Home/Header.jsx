import React, { useState } from 'react';
import { AiOutlineDown, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import logo from '../../assets/images/logo.png'
import quote from '../../assets/images/quote-icon.svg'
import quote2 from '../../assets/images/quote-icon2.svg'
import arrow from '../../assets/images/crossArrow.svg'
import right from '../../assets/images/right.svg'
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa6";

const Header = () => {
    // State to control the visibility of the mobile menu
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [isNestedSubmenuOpen, setIsNestedSubmenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    // const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [nestedMenuState, setNestedMenuState] = useState({});

    const toggleSubmenu = () => setIsSubmenuOpen(!isSubmenuOpen);

    const toggleNestedMenu = (menuKey) => {
        setNestedMenuState((prev) => ({
            ...prev,
            [menuKey]: !prev[menuKey],
        }));
    };

    // Function to toggle the mobile menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="w-[95%] mx-auto pt-8 relative">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center space-x-2">
                    <img src={logo} alt="Logo" className="h-12 md:h-14" />
                </div>

                {/* Navigation Section (Hidden on mobile) */}
                <nav className="hidden md:flex justify-center items-center px-4 space-x-8 w-auto h-[54px] border border-[#CDCDCD] rounded-full bg-white">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "bg-[#1782C5] w-[70px] h-[43px] flex justify-center items-center rounded-full text-white"
                                : "hover:text-gray-400"
                        }
                    >
                        Home
                    </NavLink>
                    <nav className="relative">
                        {/* Main NavLink */}
                        <NavLink
                            to="/product"
                            className={({ isActive }) =>
                                isActive
                                    ? "bg-[#1782C5] w-[70px] h-[43px] flex justify-center items-center rounded-full text-white"
                                    : "hover:text-gray-400"
                            }
                            onMouseEnter={() => setIsSubmenuOpen(true)}
                            onMouseLeave={() => setIsSubmenuOpen(false)}
                        >
                            Product
                        </NavLink>

                        {/* Submenu */}
                        {isSubmenuOpen && (
                            <div
                                className="absolute top-[42px] left-0 bg-white shadow-lg  w-[230px] py-2 z-10  border-green-400"
                                onMouseEnter={() => setIsSubmenuOpen(true)}
                                onMouseLeave={() => setIsSubmenuOpen(false)}
                            >
                                <div
                                    className="relative"
                                    onMouseEnter={() => setIsNestedSubmenuOpen(true)}
                                    onMouseLeave={() => setIsNestedSubmenuOpen(false)}
                                >
                                    <NavLink
                                        to="/product/category1"
                                        className=" px-4 py-2 flex gap-4 hover:bg-gray-100"
                                    >
                                        Laminar Flow Cabinets
                                        <img src={right} alt="" className='w-4 h-4 mt-1' />
                                    </NavLink>
                                    {isNestedSubmenuOpen && (
                                        <div className="absolute top-0 left-[230px] bg-white shadow-lg  w-[280px] py-2 z-20">
                                            <NavLink
                                                to="/product/category1/sub1"
                                                className="block px-4 py-2 hover:bg-gray-100"
                                            >
                                                Class II, Type A2 Biosafety Cabinet
                                            </NavLink>
                                            <NavLink
                                                to="/product/category1/sub2"
                                                className="block px-4 py-2 hover:bg-gray-100"
                                            >
                                                Class II, Type B2 Biosafety Cabinet
                                            </NavLink>
                                        </div>
                                    )}
                                </div>
                                <NavLink
                                    to="/product/category2"
                                    className="block px-4 py-2 hover:bg-gray-100"
                                >
                                    Ductless Fume Hoods
                                </NavLink>
                                <NavLink
                                    to="/product/category3"
                                    className="block px-4 py-2 hover:bg-gray-100"
                                >
                                    Biosafety Cabinets
                                </NavLink>
                            </div>
                        )}
                    </nav>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive
                                ? "bg-[#1782C5] w-[70px] h-[43px] flex justify-center items-center rounded-full text-white"
                                : "hover:text-gray-400"
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/blog"
                        className={({ isActive }) =>
                            isActive
                                ? "bg-[#1782C5] w-[70px] h-[43px] flex justify-center items-center rounded-full text-white"
                                : "hover:text-gray-400"
                        }
                    >
                        Blog
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive
                                ? "bg-[#1782C5] w-[70px] h-[43px] flex justify-center items-center rounded-full text-white"
                                : "hover:text-gray-400"
                        }
                    >
                        Contact
                    </NavLink>
                </nav>

                {/* Quote Request Button and Down Arrow (Hidden on mobile) */}
                <div className="hidden md:flex items-center">
                    <button className="bg-white flex justify-between items-center gap-3 hover:bg-[#1782C5] hover:text-white w-auto h-[48px] px-3 p-2 bg-transparent border-[#CDCDCD] rounded-full border">
                        Quote Request
                        <div className='bg-black  flex items-center justify-center text-white w-[28px] h-[28px] p-2 rounded-full'>
                            <img src={arrow} className='' alt="Down arrow icon" />
                        </div>
                    </button>
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
                        <Link to="/" className="hover:text-gray-400" onClick={toggleMenu}>Home</Link>
                        <div>
                            {/* Product Menu */}
                            <div
                                className="flex justify-between items-center hover:text-gray-400 cursor-pointer"
                                onClick={toggleSubmenu}
                            >
                                <span>Product</span>
                                {isSubmenuOpen ? <FaMinus /> : <FaPlus />}
                            </div>
                            {isSubmenuOpen && (
                                <div className="ml-4 mt-2 space-y-4">
                                    <div>
                                        {/* Submenu 1 */}
                                        <div
                                            className="flex justify-between items-center hover:text-gray-400 cursor-pointer"
                                            onClick={() => toggleNestedMenu("submenu1")}
                                        >
                                            <span>Laminar Flow Cabinets</span>
                                            {nestedMenuState.submenu1 ? <FaMinus /> : <FaPlus />}
                                        </div>
                                        {nestedMenuState.submenu1 && (
                                            <div className="ml-4 mt-2 space-y-2">
                                                <Link
                                                    to="/product/category1/item1"
                                                    className="block hover:text-gray-400"
                                                    onClick={toggleMenu}
                                                >
                                                   Class II, Type A2 Biosafety Cabinet
                                                </Link>
                                                <Link
                                                    to="/product/category1/item2"
                                                    className="block hover:text-gray-400"
                                                    onClick={toggleMenu}
                                                >
                                                    Class II, Type B2 Biosafety Cabinet
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                    {/* Submenu 2 */}
                                    <Link
                                        to="/product/category2"
                                        className="block hover:text-gray-400"
                                        onClick={toggleMenu}
                                    >
                                        Ductless Fume Hoods
                                    </Link>
                                    {/* Submenu 3 */}
                                    <Link
                                        to="/product/category3"
                                        className="block hover:text-gray-400"
                                        onClick={toggleMenu}
                                    >
                                        Biosafety Cabinets
                                    </Link>
                                </div>
                            )}
                        </div>
                        <Link to="/about" className="hover:text-gray-400" onClick={toggleMenu}>About</Link>
                        <Link to="/blog" className="hover:text-gray-400" onClick={toggleMenu}>Blog</Link>
                        <Link to="/contact" className="hover:text-gray-400" onClick={toggleMenu}>Contact</Link>

                        {/* Quote Request Button */}
                        <button className="bg-[#000000] hover:bg-[#1782C5] w-[251px] h-[40px] text-white px-4 py-2 rounded-lg mt-8 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <img src={quote} alt="Quote icon" />
                                <span>Quote Request</span>
                            </div>
                            <img src={quote2} alt="Quote icon" />
                        </button>
                    </nav>
                </div>
            </div>

        </header>
    );
};

export default Header;
