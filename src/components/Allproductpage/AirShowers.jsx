import React, { useState } from 'react'
import Header from '../Home/Header'
import vector from '../../assets/images/Vector.svg'
import arrow from '../../assets/images/crossArrow.svg'
import { Link } from 'react-router-dom'

// Air Shower Image
import airShowerMain from '../../assets/images/AirShower/Air-Shower-Stage.png'
import airShowerimg from '../../assets/images/AirShower/Air-Shower-main.png'

import post3 from '../../assets/images/Post3.webp'
import airShowerwithbg from '../../assets/images/AirShower/Air-Shower-with-bg.avif'


// Features Icons
import icon1 from '../../assets/images/AirShower/key Features/Icon1.svg'
import icon2 from '../../assets/images/AirShower/key Features/Icon2.svg'
import icon3 from '../../assets/images/AirShower/key Features/Icon3.svg'
import icon4 from '../../assets/images/AirShower/key Features/Icon4.svg'
import icon5 from '../../assets/images/AirShower/key Features/Icon5.svg'
import icon6 from '../../assets/images/AirShower/key Features/Icon6.svg'


const features = [
    {
        icon: icon1,
        title: "High Velocity HEPA Filtration",
        description: "99.99% efficient filtration removes particles up to 0.3 microns.",
    },
    {
        icon: icon2,
        title: "Interlocking Doors",
        description: "Prevents simultaneous opening to maintain cleanroom integrity.",
    },
    {
        icon: icon3,
        title: "Microprocessor Control",
        description: "Advanced control system with cycle timing and alarms.",
    },
    {
        icon: icon4,
        title: "Customizable Design",
        description: "Available in single leaf, double leaf and various sizes.",
    },
    {
        icon: icon5,
        title: "Easy Maintenance",
        description: "Quick access panels for filter replacement.",
    },
    {
        icon: icon6,
        title: "GMP Compliant",
        description: "Meets pharmaceutical and cleanroom industry standards.",
    },
];

const cardsData = [
    {
        title: "Air Shower",
        image: airShowerimg,
        subtitle: "AirBio Air Shower",
        description: "High-velocity HEPA filtered air shower for personnel decontamination",
        buttonText: "Visit Product",
        path: '/product/airshowers/airshower',
    },
];

const AirShowers = () => {
    const [showAll, setShowAll] = useState(false);

    const handleReadMore = () => {
        setShowAll(true);
    };

    return (
        <div>
            <Header />
            <hr className="w-[95%] h-1 mt-6 border-t-1 border-[#C3C3C3] mx-auto" />

            <div className=''>
                {/* Hero Section */}
                <div className='p-5 md:w-[80%] mx-auto flex flex-col lg:flex-row justify-between items-center'>
                    <div className='mb-5'>
                        <h1 className='text-3xl md:text-5xl font-medium text-center lg:text-start my-3 md:mb-8 text-[#1782C5] leading-10 md:leading-tight lg:w-[280px]'>
                            Air Showers
                        </h1>
                        <div className='flex items-center justify-center gap-3 md:gap-5'>
                            <p className='border border-black p-1 px-4 text-sm md:text-lg rounded-3xl'>Contamination-Free</p>
                            <p className='border border-black p-1 px-4 text-sm md:text-lg rounded-3xl'>Personnel Decontamination</p>
                            <p className='border border-black p-1 px-4 text-sm md:text-lg rounded-3xl'>Reliable</p>
                        </div>
                    </div>
                    <div className=''>
                        <img src={airShowerMain} alt="Air Shower" className='md:h-[404px] md:w-auto object-cover' />
                    </div>
                </div>

                {/* All Air Showers Section */}
                <div>
                    <div className="gap-3 p-5 flex flex-col my-5 items-center">
                        <h1 className="p-2 px-4 text-2xl mt-8 border border-[#C0C0C0] rounded-full font-medium inline-block text-center">
                            All Air Showers
                        </h1>
                        <p className="text-sm text-[#1E1E1E] text-center">
                            AirBio Air Showers provide high-velocity HEPA filtered air to effectively remove contaminants from personnel before entering cleanroom areas.
                        </p>
                    </div>

                    <div className='pl-5 md:pl-10'>
                        <div className="flex md:justify-center md:overflow-hidden overflow-x-scroll scrollbar scrollbar-thumb-customBlue scrollbar-track-gray-200 scrollbar-thumb-rounded-full scrollbar-track-rounded-full pr-5 md:pr-10 gap-4 md:gap-10 py-4 mx-auto">
                            {cardsData.map((card, index) => (
                                <div key={index}>
                                    <div className="min-w-[318px] md:w-[300px] h-[370px] flex flex-col justify-center items-center md:min-w-0 rounded-3xl p-4 border border-[#CDCDCD]">
                                        <img
                                            src={card.image}
                                            alt={card.subtitle}
                                            className="w-auto h-[302px] md:w-[221px] object-cover py-4"
                                        />
                                    </div>

                                    <div className="py-2 md:w-[300px] flex flex-col justify-center items-center md:items-start">
                                        <h1 className="font-medium md:text-start text-lg">{card.subtitle}</h1>
                                        <p className="text-[#1782C5] text-center mb-3 md:text-start h-[50px]">{card.description}</p>
                                        <Link to={card.path}>
                                            <button className="px-4 py-1 bg-black hover:bg-[#1782C5] text-white flex justify-center items-center gap-2 rounded-[50px] mt-5 border-[#CDCDCD]">
                                                {card.buttonText}
                                                <img src={vector} alt="vector icon" />
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Key Features */}
                <div className="my-10 p-5 md:my-16 md:py-5">
                    <h1 className="text-2xl font-medium text-center my-5 pb-5">
                        Key Features of <span className="text-[#1782C5]">Air Showers</span>
                    </h1>

                    <div className="grid grid-cols-1 md:max-w-[97%] mx-auto md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features
                            .filter((_, index) => showAll || index < 6)
                            .map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex w-full max-w-[350px] md:max-w-[370px] bg-[#F8F8F8] py-5 rounded-xl mx-auto"
                                >
                                    <div className="pl-3 md:pl-4 w-[25%] py-1 px-2">
                                        <img src={feature.icon} alt={feature.title} className="w-14 h-14 brightness-0" />
                                    </div>
                                    <div className="pr-3 w-[75%]">
                                        <h1 className="font-medium mb-4">{feature.title}</h1>
                                        <p className="text-sm text-[#1E1E1E] text-opacity-75">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                    </div>

                    {!showAll && (
                        <div className="flex justify-center items-center mt-5">
                            <button
                                className="bg-white flex justify-between items-center gap-3 hover:bg-black hover:text-white w-auto h-[38px] px-2 pl-3 bg-transparent border-[#1782C5] rounded-full border"
                                onClick={handleReadMore}
                            >
                                Read more
                                <div className='bg-[#1782C5] flex items-center justify-center text-white w-[28px] h-[28px] p-2 rounded-full'>
                                    <img src={arrow} alt="Down arrow icon" />
                                </div>
                            </button>
                        </div>
                    )}
                </div>

                {/* About Air Showers */}
                <div className='my-10 p-5'>
                    <div className='bg-[#F8F8F8] lg:w-[80%] mx-auto p-5 px-6 flex flex-col md:flex-row items-center gap-5 rounded-lg'>
                        <div className='md:w-[40%]'>
                            <img src={post3} alt="" className='w-[300px] h-auto md:h-[300px] md:w-[318px] object-cover rounded-xl' />
                        </div>
                        <div className='md:w-[60%] md:px-5 lg:px-0 lg:mr-8'>
                            <h1 className='text-xl text-center md:text-start md:text-3xl font-medium mb-5'>
                                About <span className='text-[#1782C5]'>Air Showers</span>
                            </h1>
                            <p className='text-justify text-[14px] text-opacity-75'>
                                Air Showers are essential personnel decontamination systems used in cleanrooms. They use high-velocity HEPA filtered air to remove dust, particles, and contaminants from personnel before they enter the controlled environment.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Meet AirBio’s Air Shower */}
                <div className='my-10 p-5'>
                    <div className='bg-[#F8F8F8] lg:w-[80%] mx-auto p-5 px-6 flex flex-col md:flex-row items-center gap-5 rounded-lg'>
                        <div className='md:w-[40%]'>
                            <img src={airShowerwithbg} alt="" className='w-[300px] h-auto md:h-[300px] md:w-auto object-cover rounded-xl' />
                        </div>
                        <div className='md:w-[60%] md:px-5 lg:px-0 lg:mr-8'>
                            <h1 className='text-xl text-center md:text-start md:text-3xl font-medium mb-5'>
                                Meet AirBio’s <span className='text-[#1782C5]'>Air Showers</span>
                            </h1>
                            <p className='text-justify text-[14px] text-opacity-75'>
                                AirBio Air Showers are engineered with advanced HEPA filtration, interlocking doors, and intelligent control systems for stringent contamination control in pharmaceutical, biotechnology, electronics, and other high-tech industries.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AirShowers