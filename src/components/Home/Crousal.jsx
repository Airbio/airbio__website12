import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import product1 from '../../assets/images/Frame 9.png'
import product2 from '../../assets/images/Frame 10.png'
import product3 from '../../assets/images/Frame 11.png'
import product4 from '../../assets/images/Frame 12.png'
import mproduct1 from '../../assets/images/mframe1.webp'
import mproduct2 from '../../assets/images/mframe2.webp'
import mproduct3 from '../../assets/images/mframe3.webp'
import Arrow from '../../assets/images/down-light.svg'
import Header from './Header';
import { Link } from 'react-scroll';



const slides = [
    {
        image: product1,
        mImage: mproduct1,
        text: 'Revolutionizing Safety Solutions Across Healthcare and Research Industry',
        highlights: ["Revolutionizing", "Across", "and", "Industry"],
        italics: ["Safety", "Solutions"]
    },
    {
        image: product2,
        mImage: mproduct2,
        text: 'AirBio : Your Trusted Partner in Safety Solutions',
        highlights: ["Trusted", "Safety", "and", "Industry"]
    },
    {
        image: product3,
        mImage: mproduct3,
        text: 'Minimize Risk, Maximize Safety with AirBio Technology',
        highlights: ["Minimize", "Safety", "AirBio",]
    },
    // {
    //     image: product4,
    //     text: '',

    // },
];

const Crousal = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <div>
            <div className="relative hidden md:block w-full h-screen">
                {/* Header */}
                <div className="absolute top-0 left-0 w-full z-10 bg-opacity-50">
                    <Header />
                </div>

                {/* Swiper Slider */}
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 3000 }}
                    onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
                    className="h-full"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index} className="relative">
                            {/* Image */}
                            <div className=''>
                                <img
                                    src={slide.image}
                                    alt={`Slide ${index + 1}`}
                                    className="w-full h-full object-fill"
                                />
                            </div>

                            {/* Text Overlay */}
                            <div className="absolute w-[50%] inset-0 flex md:flex-col justify-center gap-3 items-start ">
                                <h1 className="text-4xl w-[420px] font-bold ml-16 ">
                                    {slide.text.split(" ").map((word, idx) => (
                                        <span
                                            key={idx}
                                            className={`
                                                ${slide.highlights.includes(word) ? "text-blue-500 font-semibold" : ""}
                                                ${slide.italics && slide.italics.includes(word) ? "italic" : ""}
                                              `}
                                        >
                                            {word}{" "}
                                        </span>
                                    ))}
                                </h1>
                                <div className="hidden md:flex items-center self-start ml-16">
                                    <Link to="product-section"
                                        smooth={true}
                                        duration={500}>
                                        <button className="bg-black hover:bg-[#1782C5] w-auto h-[48px] text-white px-4 p-2 rounded-full">
                                            Explore More
                                        </button>
                                    </Link>
                                    <div className='bg-black flex items-center justify-center text-white w-[48px] h-[48px] p-1 px-4 rounded-full'>
                                        <img src={Arrow} className='w-[20px] h-[20px]' alt="Down arrow icon" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>



            {/* for mobile */}
            <div className="relative md:hidden w-full h-auto border">
                {/* Header */}
                <div className="absolute top-0 left-0 w-full z-10 bg-opacity-50">
                    <Header />
                </div>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 3000 }}
                    onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
                    className="h-full"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index} className="relative">
                            {/* Image */}
                            <div className="">
                                <img
                                    src={slide.mImage}
                                    alt={`Slide ${index + 1}`}
                                    className="w-full h-full object-cover"  // Changed to object-cover for better image cropping
                                />
                            </div>

                            {/* Text Overlay for mobile */}
                            <div className="absolute h-[50%] inset-0 flex flex-col justify-center gap-5 mt-5  p-4  border-black">
                                <h1 className="text-xl font-bold text-center w-60 self-center">
                                    {slide.text.split(" ").map((word, idx) => (
                                        <span
                                            key={idx}
                                            className={`
                                                ${slide.highlights.includes(word) ? "text-blue-500 font-semibold" : ""}
                                                ${slide.italics && slide.italics.includes(word) ? "italic" : ""}
                                              `}
                                        >
                                            {word}{" "}
                                        </span>
                                    ))}
                                </h1>

                                {/* Buttons for mobile */}
                                <div className="flex justify-center items-center">
                                    <button className="bg-black hover:bg-blue-600 w-auto h-[48px] text-white px-4 p-2 rounded-full">
                                        Explore More
                                    </button>
                                    <div className="bg-black flex items-center justify-center text-white w-[48px] h-[48px] p-1 rounded-full">
                                        <img src={Arrow} className="w-[20px] h-[20px]" alt="Down arrow icon" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>


        </div>
    )
}

export default Crousal
