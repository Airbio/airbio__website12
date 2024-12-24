import React, { useState } from 'react'
import Header from '../Home/Header'
import productData from './productPageData';
import SVG from '../../assets/images/downloadSVG.svg'
import logo from '../../assets/images/teamSvg.svg'
import product1 from '../../assets/images/product1.png'
import whatsapp from '../../assets/images/Whatsapp1.svg'
import arrow from '../../assets/images/crossArrow.svg'
import KeyFeatures from './KeyFeatures';
import Download from './Download';
import DiscoverProducts from './DiscoverProducts';
import Assistants from '../Home/Assistants'


const ProductPage = () => {
    const [selectedImage, setSelectedImage] = useState(product1);

    return (
        <div>
            <Header />
            <hr className="w-[95%] h-1 mt-6 border-t-1 border-[#C3C3C3] mx-auto" />
            <div className="p-6">
                {productData.map((product, index) => (
                    <div
                        key={index}
                        className="relative md:w-[90%] mx-auto md:flex justify-between items-center md:gap-8 pt-2 rounded-lg  border-[#1782C5]"
                    >
                        <div className="mb-4 text-center md:hidden">
                                <h2 className="text-2xl text-[#1782C5] m-2 py-2 md:m-0  font-bold">
                                    {product.name}
                                </h2>
                                <h3 className="md:text-3xl text-[#1E1E1E]">{product.title}</h3>
                            </div>
                        {/* 1st Div: Images */}
                        <div className="flex flex-col  md:flex-row justify-center items-center  border-[#1782C5] mb-5">
                            {/* Main Image Display */}
                            <div className="w-[70%] md:w-full flex justify-center items-center  ">
                                <img
                                    src={selectedImage}
                                    alt="Selected Product Image"
                                    className="w-[229px] h-[335px] md:w-[423px] md:h-[458px] object-cover rounded-lg mb-5 md:m-0 border border-[#1782C5]"
                                />
                            </div>

                            {/* Thumbnail Images */}
                            <div className="h-auto  pl-2 mb-5 flex md:flex-col justify-between items-center gap-5">
                                <img
                                    src={product.img1}
                                    alt="Product Image 1"
                                    onClick={() => setSelectedImage(product.img1)} // Update state on click
                                    className={`w-[69px] h-[69px] md:w-[107px] md:h-[107px] object-cover rounded-lg border ${selectedImage === product.img1 ? "border-blue-500" : ""
                                        }`}
                                />
                                <img
                                    src={product.img2}
                                    alt="Product Image 2"
                                    onClick={() => setSelectedImage(product.img2)} // Update state on click
                                    className={`w-[69px] h-[69px] md:w-[107px] md:h-[107px] object-cover rounded-lg border ${selectedImage === product.img2 ? "border-blue-500" : ""
                                        }`}
                                />
                                <img
                                    src={product.img3}
                                    alt="Product Image 3"
                                    onClick={() => setSelectedImage(product.img3)} // Update state on click
                                    className={`w-[69px] h-[69px] md:w-[107px] md:h-[107px] object-cover rounded-lg border ${selectedImage === product.img3 ? "border-blue-500" : ""
                                        }`}
                                />
                            </div>
                        </div>
                        <div className="md:w-[60%] ">
                            {/* 1st Div: Name & Title */}
                            <div className="hidden md:block mb-4 text-center md:text-start">
                                <h2 className="text-2xl text-[#1782C5] m-2 py-2 md:m-0  font-bold">
                                    {product.name}
                                </h2>
                                <h3 className="md:text-3xl text-[#1E1E1E]">{product.title}</h3>
                            </div>
                            <div className="mb-4 flex justify-between items-center md:justify-start gap-3 text-center md:text-start">
                                <h3 className="text-md text-[#1782C5] p-1 px-4 border border-[#1782C5] rounded-full">{product.title1}</h3>
                                <h3 className="text-md text-[#1782C5] p-1 px-4 border border-[#1782C5] rounded-full">{product.title2}</h3>
                                <h3 className="text-md text-[#1782C5] p-1 px-4 border border-[#1782C5] rounded-full">{product.title3}</h3>
                            </div>
                            

                            {/* 2nd Div: Description */}
                            <div className="mb-4 text-justify ">
                                <p className=" mb-2 md:text-sm ">
                                    {product.description1}
                                </p>
                                <p className="md:text-sm">
                                    {product.description2}
                                </p>
                            </div>

                            {/* 3rd Div: Buttons */}
                            <div className="mb-4 flex flex-col justify-center md:justify-start md:items-start items-center gap-3  ">
                                <div className='flex justify-between gap-2'>
                                    <button className="bg-[#1E1E1E] text-white px-4 py-2 rounded-full hover:bg-blue-600">
                                        Get a Quote
                                    </button>
                                    <button className="px-4 py-2 bg-[#1E1E1E] text-white flex items-center gap-2 rounded-full border border-[#7A7A7A]">
                                        Request a Demo
                                    </button>
                                </div>
                                <div className='px-4 py-1 text-sm flex justify-between items-center gap-4 rounded-full border border-[#7A7A7A]'>
                                    <button className='flex justify-center items-center gap-2'>
                                        <img src={whatsapp} alt="" />Speak With Expert
                                    </button>
                                    <img src={arrow} alt="" className='bg-[#55AE36] p-1 rounded-full' />
                                </div>
                            </div>

                        </div>


                    </div>
                ))}
            </div>

            <div className='p-6 md:w-[90%] mx-auto'>
                <h1 className='text-center md:text-start text-xl text-[#1782C5] p-1 py-3 rounded-lg bg-[#F5F5F5] font-bold'>Meet AirBio’s Velocity Laminar Air Flow Cabinet   </h1>
                <p className='my-5 text-justify'>A trusted solution in laboratories worldwide, the Velocity vertical laminar air flow cabinet combines advanced technology with user-friendly features to elevate safety and efficiency. Available in multiple sizes, it boasts a modern touch-screen interface for seamless operation. </p>
            </div>
            
            <KeyFeatures/>
            <Download/>
            <DiscoverProducts/>
            <div className='py-10'>
            <Assistants/>
            </div>
        </div>
    )
}

export default ProductPage
