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
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Header = () => {
    // State to control the visibility of the mobile menu
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [isNestedSubmenuOpen, setIsNestedSubmenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    // const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [nestedMenuState, setNestedMenuState] = useState({});
    const [activeSubmenu, setActiveSubmenu] = useState("");
    const [currentSubmenu, setCurrentSubmenu] = useState(null);

    const toggleSubmenu = () => setIsSubmenuOpen(!isSubmenuOpen);

    const toggleMobileNestedMenu = (submenu) => {
        setCurrentSubmenu((prev) => (prev === submenu ? null : submenu));
    };

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

    const isActive = (path) => window.location.pathname === path;

    return (
        <header className="w-[95%] mx-auto pt-8 relative">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo Section */}
                <Link to='/'>
                    <div className="flex items-center space-x-2">
                        <img src={logo} alt="Logo" className="h-12 md:h-14" />
                    </div>
                </Link>

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
                                    ? "bg-[#1782C5] w-[95px] h-[43px] pl-1 flex justify-center items-center rounded-full text-white"
                                    : "hover:text-gray-400 flex justify-center items-center  py-2"
                            }
                            onMouseEnter={() => setIsSubmenuOpen(true)}
                            onMouseLeave={() => setIsSubmenuOpen(false)}
                        >
                            Product
                            <div className='pt-1'><MdOutlineKeyboardArrowDown className='w-6 h-6' /></div>

                        </NavLink>

                        {/* Submenu */}
                        {isSubmenuOpen && (
                            <div
                                className="absolute top-[45px] -left-5 bg-white shadow-lg  w-[230px] py-2 z-10 border border-[#CDCDCD]"
                                onMouseEnter={() => setIsSubmenuOpen(true)}
                                onMouseLeave={() => setIsSubmenuOpen(false)}
                            >
                                {/* Biosafety Cabinets */}
                                <div
                                    className="relative"
                                    onMouseEnter={() => setActiveSubmenu("biosafety")}
                                    onMouseLeave={() => setActiveSubmenu("")}
                                >
                                    <NavLink
                                        to="/product/Biosafety"
                                        className=" px-4 py-2 flex justify-between gap-4 hover:bg-gray-100"
                                    >
                                        Biosafety Cabinets
                                        <img src={right} alt="" className="w-4 h-4 mt-1" />
                                    </NavLink>
                                    {activeSubmenu === "biosafety" && (
                                        <div className="absolute top-0 left-[230px] bg-white shadow-lg  w-[280px] py-2 z-20">
                                            <NavLink
                                                to="/product/Biosafety/BscClassIIB2"
                                                className="block px-4 py-2 hover:bg-gray-100"
                                            >
                                                BSC CLASS II B2 <span className='text-[#1782C5]'>(Falcon)</span>
                                            </NavLink>
                                            <NavLink
                                                to="/product/Biosafety/BscClassIIB2(Agies)"
                                                className="block px-4 py-2 hover:bg-gray-100"
                                            >
                                                BSC CLASS II B2 <span className='text-[#1782C5]'>(Agies)</span>
                                            </NavLink>
                                            <NavLink
                                                to="/product/Biosafety/BscClassIIA2"
                                                className="block px-4 py-2 hover:bg-gray-100"
                                            >
                                                BSC CLASS II A2
                                            </NavLink>
                                            {/* <NavLink
                                                to="/product/Biosafety/BscClassIIA2(Agies)"
                                                className="block px-4 py-2 hover:bg-gray-100"
                                            >
                                                BSC CLASS II A2 <span className='text-[#1782C5]'>(Agies)</span>
                                            </NavLink> */}
                                            <NavLink
                                                to="/product/Biosafety/BscMainClassIIA2"
                                                className="block px-4 py-2 hover:bg-gray-100"
                                            >
                                                Main BSC CLASS II A2
                                            </NavLink>
                                        </div>
                                    )}
                                </div>

                                {/* Fume Hoods */}
                                <div
                                    className="relative"
                                    onMouseEnter={() => setActiveSubmenu("fume")}
                                    onMouseLeave={() => setActiveSubmenu("")}
                                >
                                    <NavLink
                                        to="/product/FumeHoods"
                                        className=" px-4 py-2 flex justify-between gap-4 hover:bg-gray-100"
                                    >
                                        Fume Hoods
                                        <img src={right} alt="" className="w-4 h-4 mt-1" />
                                    </NavLink>
                                    {activeSubmenu === "fume" && (
                                        <div className="absolute top-0 left-[230px] bg-white shadow-lg  w-[280px] py-2 z-20">
                                            <NavLink
                                                to="/product/FumeHoods/FumeHood"
                                                className="block px-4 py-2 hover:bg-gray-100"
                                            >
                                                Air Fume Hood
                                            </NavLink>
                                        </div>
                                    )}

                                </div>

                                {/* Laminar Flow Cabinets */}
                                <div
                                    className="relative"
                                    onMouseEnter={() => setActiveSubmenu("laminar")}
                                    onMouseLeave={() => setActiveSubmenu("")}
                                >
                                    <NavLink
                                        to="/product/laminar"
                                        className=" px-4 py-2 flex gap-4 hover:bg-gray-100"
                                    >
                                        Laminar Flow Cabinets
                                        <img src={right} alt="" className="w-4 h-4 mt-1" />
                                    </NavLink>
                                    {activeSubmenu === "laminar" && (
                                        <div className="absolute top-0 left-[230px] bg-white shadow-lg  w-[280px] py-2 z-20">
                                            <NavLink
                                                to="/product/laminar/Airflow"
                                                className="block px-4 py-2 hover:bg-gray-100"
                                            >
                                                Vertical Laminar Airflow
                                            </NavLink>
                                            <NavLink
                                                to="/product/laminar/Airflow(Velocity)"
                                                className="block px-4 py-2 hover:bg-gray-100"
                                            >
                                                Vertical Laminar Airflow <span className='text-[#1782C5]'>(Velocity)</span>
                                            </NavLink>
                                        </div>
                                    )}
                                </div>

                                {/* PCR WorkStation */}
                                <div
                                    className="relative"
                                    onMouseEnter={() => setActiveSubmenu("PCRworkstation")}
                                    onMouseLeave={() => setActiveSubmenu("")}
                                >
                                    <NavLink
                                        to="/product/PCRworkstation"
                                        className=" px-4 py-2 flex justify-between gap-4 hover:bg-gray-100"
                                    >
                                        PCR WorkStation
                                        <img src={right} alt="" className="w-4 h-4 mt-1" />
                                    </NavLink>
                                    {activeSubmenu === "PCRworkstation" && (
                                        <div className="absolute top-0 left-[230px] bg-white shadow-lg  w-[280px] py-2 z-20">
                                            <NavLink
                                                to="/product/PCRworkstation/GeneSafe"
                                                className="block px-4 py-2 hover:bg-gray-100"
                                            >
                                                GeneSafe PCR WorkStation
                                            </NavLink>
                                        </div>
                                    )}
                                </div>

                                {/* Pass Boxes */}
                                <div
                                    className="relative"
                                    onMouseEnter={() => setActiveSubmenu("PassBoxe")}
                                    onMouseLeave={() => setActiveSubmenu("")}
                                >
                                    <NavLink
                                        to="/product/PassBox"
                                        className=" px-4 py-2 flex justify-between gap-4 hover:bg-gray-100"
                                    >
                                        Pass Boxes
                                        <img src={right} alt="" className="w-4 h-4 mt-1" />
                                    </NavLink>
                                    {activeSubmenu === "PassBoxe" && (
                                        <div className="absolute top-0 left-[230px] bg-white shadow-lg  w-[280px] py-2 z-20">
                                            <NavLink
                                                to="/product/PassBox/staticpassbox"
                                                className="block px-4 py-2 hover:bg-gray-100"
                                            >
                                                Static Pass Box
                                            </NavLink>
                        
                                            <NavLink
                                                to="/product/PassBox/dynamicpassbox"
                                                className="block px-4 py-2 hover:bg-gray-100"
                                            >
                                                Dynamic Pass Box
                                            </NavLink>
                                        </div>
                                    )}
                                </div>

                                {/* Air Showers */}
                                <div
                                    className="relative"
                                    onMouseEnter={() => setActiveSubmenu("AirShowers")}
                                    onMouseLeave={() => setActiveSubmenu("")}
                                >
                                    <NavLink
                                        to="/product/AirShowers"
                                        className=" px-4 py-2 flex justify-between gap-4 hover:bg-gray-100"
                                    >
                                        Air Showers
                                        <img src={right} alt="" className="w-4 h-4 mt-1" />
                                    </NavLink>
                                    {activeSubmenu === "AirShowers" && (
                                        <div className="absolute top-0 left-[230px] bg-white shadow-lg  w-[280px] py-2 z-20">
                                            <NavLink
                                                to="/product/AirShowers/airshower"
                                                className="block px-4 py-2 hover:bg-gray-100"
                                            >
                                                Air Shower
                                            </NavLink>
                                        </div>
                                    )}
                                </div>
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
                                ? "bg-[#1782C5] w-[80px] h-[43px] flex justify-center items-center rounded-full text-white"
                                : "hover:text-gray-400"
                        }
                    >
                        Contact
                    </NavLink>
                </nav>

                {/* Quote Request Button and Down Arrow (Hidden on mobile) */}
                <div className="hidden md:flex items-center">
                    <a href="https://api.whatsapp.com/send?phone=9899829299" target="_blank" rel="noopener noreferrer">
                        <button className="flex justify-between items-center gap-3 bg-[#1782C5] text-white w-auto h-[48px] px-3 p-2 rounded-full animate-pulse">
                            Quote Request
                            <div className='bg-black  flex items-center justify-center text-white w-[28px] h-[28px] p-2 rounded-full'>
                                <img src={arrow} className='' alt="Down arrow icon" />
                            </div>
                        </button>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button onClick={toggleMenu} className="md:hidden focus:outline-none pb-3 mr-2">
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
                        <Link
                            to="/"
                            className={`hover:text-gray-400 ${isActive("/") ? "text-[#1782C5]" : ""}`}
                            onClick={toggleMenu}
                        >
                            Home
                        </Link>
                        <div>
                            {/* Product Menu */}
                            <div
                                className="flex justify-between items-center hover:text-gray-400 cursor-pointer"
                                onClick={toggleSubmenu}
                            >
                                <Link
                                    to="/product"
                                    className={`${isActive("/product") ? "text-[#1782C5]" : ""}`}
                                >
                                    Product
                                </Link>
                                {isSubmenuOpen ? <FaMinus /> : <FaPlus />}
                            </div>
                            {isSubmenuOpen && (
                                <div className="ml-4 mt-2 space-y-4">
                                    {/* Submenu 1 */}
                                    <div>
                                        <div
                                            className={`flex justify-between items-center hover:text-gray-400 cursor-pointer ${currentSubmenu === "submenu1" ? "text-[#1782C5]" : ""}`}
                                            onClick={() => toggleMobileNestedMenu("submenu1")}
                                        >
                                            <Link to='/product/Biosafety'>Biosafety Cabinets</Link>
                                            {currentSubmenu === "submenu1" ? <FaMinus /> : <FaPlus />}
                                        </div>
                                        {currentSubmenu === "submenu1" && (
                                            <div className="ml-4 mt-2 space-y-2">
                                                <Link
                                                    to="/product/Biosafety/BscClassIIB2"
                                                    className={`block hover:text-gray-400 ${isActive("/product/category1/item1") ? "text-[#1782C5]" : ""}`}
                                                    onClick={toggleMenu}
                                                >
                                                    BSC CLASS II B2 <span className='text-[#1782C5]'>(Falcon)</span>
                                                </Link>
                                                <Link
                                                    to="/product/Biosafety/BscClassIIB2(Agies)"
                                                    className={`block hover:text-gray-400 ${isActive("/product/category1/item2") ? "text-[#1782C5]" : ""}`}
                                                    onClick={toggleMenu}
                                                >
                                                    BSC CLASS II B2 <span className='text-[#1782C5]'>(Agies)</span>
                                                </Link>
                                                <Link
                                                    to="/product/Biosafety/BscClassIIA2"
                                                    className={`block hover:text-gray-400 ${isActive("/product/category1/item3") ? "text-[#1782C5]" : ""}`}
                                                    onClick={toggleMenu}
                                                >
                                                    BSC CLASS II A2
                                                </Link>
                                                {/* <Link
                                                    to="/product/Biosafety/BscClassIIA2(Agies)"
                                                    className={`block hover:text-gray-400 ${isActive("/product/category1/item4") ? "text-[#1782C5]" : ""}`}
                                                    onClick={toggleMenu}
                                                >
                                                    BSC CLASS II A2 <span className='text-[#1782C5]'>(Agies)</span>
                                                </Link> */}
                                                <Link
                                                    to="/product/Biosafety/BscMainClassIIA2"
                                                    className={`block hover:text-gray-400 ${isActive("/product/category1/item5") ? "text-[#1782C5]" : ""}`}
                                                    onClick={toggleMenu}
                                                >
                                                    Main BSC CLASS II A2
                                                </Link>
                                            </div>
                                        )}
                                    </div>

                                    {/* Submenu 2 */}
                                    <div>
                                        <div
                                            className={`flex justify-between items-center hover:text-gray-400 cursor-pointer ${currentSubmenu === "submenu2" ? "text-[#1782C5]" : ""}`}
                                            onClick={() => toggleMobileNestedMenu("submenu2")}
                                        >
                                            <Link to='/product/FumeHoods'>Fume Hoods</Link>
                                            {currentSubmenu === "submenu2" ? <FaMinus /> : <FaPlus />}
                                        </div>
                                        {currentSubmenu === "submenu2" && (
                                            <div className="ml-4 mt-2 space-y-2">
                                                <Link
                                                    to="/product/FumeHoods/FumeHood"
                                                    className={`block hover:text-gray-400 ${isActive("/product/category2/item1") ? "text-[#1782C5]" : ""}`}
                                                    onClick={toggleMenu}
                                                >
                                                    Air Fume Hood
                                                </Link>
                                            </div>
                                        )}
                                    </div>

                                    {/* Submenu 3 */}
                                    <div>
                                        <div
                                            className={`flex justify-between items-center hover:text-gray-400 cursor-pointer ${currentSubmenu === "submenu3" ? "text-[#1782C5]" : ""}`}
                                            onClick={() => toggleMobileNestedMenu("submenu3")}
                                        >
                                            <Link to='/product/laminar'>Laminar Flow Cabinets</Link>
                                            {currentSubmenu === "submenu3" ? <FaMinus /> : <FaPlus />}
                                        </div>
                                        {currentSubmenu === "submenu3" && (
                                            <div className="ml-4 mt-2 space-y-2">
                                                <Link
                                                    to="/product/laminar/Airflow"
                                                    className={`block hover:text-gray-400 ${isActive("/product/category3/item1") ? "text-[#1782C5]" : ""}`}
                                                    onClick={toggleMenu}
                                                >
                                                    Vertical Laminar Airflow
                                                </Link>
                                                <Link
                                                    to="/product/laminar/Airflow(Velocity)"
                                                    className={`block hover:text-gray-400 ${isActive("/product/category3/item2") ? "text-[#1782C5]" : ""}`}
                                                    onClick={toggleMenu}
                                                >
                                                    Vertical Laminar Airflow <span className='text-[#1782C5]'>(Velocity)</span>
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                    {/* Submenu 4 */}
                                    <div>
                                        <div
                                            className={`flex justify-between items-center hover:text-gray-400 cursor-pointer ${currentSubmenu === "submenu4" ? "text-[#1782C5]" : ""}`}
                                            onClick={() => toggleMobileNestedMenu("submenu4")}
                                        >
                                            <Link to='/product/PCRworkstation'>PCR Workstation</Link>
                                            {currentSubmenu === "submenu4" ? <FaMinus /> : <FaPlus />}
                                        </div>
                                        {currentSubmenu === "submenu4" && (
                                            <div className="ml-4 mt-2 space-y-2">
                                                <Link
                                                    to="/product/PCRworkstation/genesafe"
                                                    className={`block hover:text-gray-400 ${isActive("/product/category3/item1") ? "text-[#1782C5]" : ""}`}
                                                    onClick={toggleMenu}
                                                >
                                                    GeneSafe PCR WorkStation
                                                </Link>
                                                
                                            </div>
                                        )}
                                    </div>
                                    {/* Submenu 5 */}
                                    <div>
                                        <div
                                            className={`flex justify-between items-center hover:text-gray-400 cursor-pointer ${currentSubmenu === "submenu5" ? "text-[#1782C5]" : ""}`}
                                            onClick={() => toggleMobileNestedMenu("submenu5")}
                                        >
                                            <Link to='/product/PassBox'>Pass Boxes</Link>
                                            {currentSubmenu === "submenu5" ? <FaMinus /> : <FaPlus />}
                                        </div>
                                        {currentSubmenu === "submenu5" && (
                                            <div className="ml-4 mt-2 space-y-2">
                                                <Link
                                                    to="/product/PassBox/staticpassbox"
                                                    className={`block hover:text-gray-400 ${isActive("/product/category3/item1") ? "text-[#1782C5]" : ""}`}
                                                    onClick={toggleMenu}
                                                >
                                                    Static Pass Box
                                                </Link>
                                                <Link
                                                    to="/product/PassBox/dynamicpassbox"
                                                    className={`block hover:text-gray-400 ${isActive("/product/category3/item2") ? "text-[#1782C5]" : ""}`}
                                                    onClick={toggleMenu}
                                                >
                                                    Dynamic Pass Box
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                    {/* Submenu 6 */}
                                    <div>
                                        <div
                                            className={`flex justify-between items-center hover:text-gray-400 cursor-pointer ${currentSubmenu === "submenu6" ? "text-[#1782C5]" : ""}`}
                                            onClick={() => toggleMobileNestedMenu("submenu6")}
                                        >
                                            <Link to='/product/AirShowers'>Air Showers</Link>
                                            {currentSubmenu === "submenu6" ? <FaMinus /> : <FaPlus />}
                                        </div>
                                        {currentSubmenu === "submenu6" && (
                                            <div className="ml-4 mt-2 space-y-2">
                                                <Link
                                                    to="/product/AirShowers/airshower"
                                                    className={`block hover:text-gray-400 ${isActive("/product/category3/item1") ? "text-[#1782C5]" : ""}`}
                                                    onClick={toggleMenu}
                                                >
                                                    Air Shower
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                        </div>
                        <Link
                            to="/about"
                            className={`hover:text-gray-400 ${isActive("/about") ? "text-[#1782C5]" : ""}`}
                            onClick={toggleMenu}
                        >
                            About
                        </Link>
                        <Link
                            to="/blog"
                            className={`hover:text-gray-400 ${isActive("/blog") ? "text-[#1782C5]" : ""}`}
                            onClick={toggleMenu}
                        >
                            Blog
                        </Link>
                        <Link
                            to="/contact"
                            className={`hover:text-gray-400 ${isActive("/contact") ? "text-[#1782C5]" : ""}`}
                            onClick={toggleMenu}
                        >
                            Contact
                        </Link>

                        {/* Quote Request Button */}
                        <a href="https://api.whatsapp.com/send?phone=9899829299" target="_blank" rel="noopener noreferrer">
                            <button className="bg-[#000000] hover:bg-[#1782C5]  text-white px-6 py-3 rounded-full flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <img src={quote} alt="Quote icon" />
                                    <span>Quote Request</span>
                                </div>
                                <img src={quote2} alt="Quote icon" />
                            </button>
                        </a>
                    </nav>
                </div>
            </div>

        </header>
    );
};

export default Header;
