import React from 'react'
import art1 from '../../assets/images/art1.webp'
import art2 from '../../assets/images/art2.webp'
import art3 from '../../assets/images/art3.webp'
import vector from '../../assets/images/Vector.svg'
import Header from '../Home/Header'

const cardData = [
    {
        title: "Laminar Flow Cabinets",
        image: art2,
        description: "Ensure contaminant free, precision tasks in research, healthcare and manufacturing",
    },
    {
        title: "Laminar Flow Cabinets",
        image: art2,
        description: "Ensure contaminant free, precision tasks in research, healthcare and manufacturing",
    },
    {
        title: "Biosafety Cabinets",
        image: art2,
        description: "Ensure contaminant free, precision tasks in research, healthcare and manufacturing",
    },
    // {
    //     title: "Biosafety Cabinets",
    //     image: art2,
    //     description: "Ensure contaminant free, precision tasks in research, healthcare and manufacturing",
    // },
];

const DiscoverProducts = () => {
    return (
        <div>
            <Header />
            <hr className="w-[95%] h-1 mt-6 border-t-1 border-[#C3C3C3] mx-auto" />
            <div className='my-10'>
                <div className="flex justify-center items-center pt-12 pb-5">
                    <h1 className="text-center p-1 px-3 border border-[#C0C0C0] rounded-full text-black font-semibold">
                        Discover Our Products
                    </h1>
                </div>
                <div className="flex overflow-x-scroll md:grid md:grid-cols-3 gap-4 md:gap-10 p-4 mx-auto max-w-screen-lg">
                    {cardData.map((card, index) => (
                        <div
                            key={index}
                            className="min-w-[318px] h-[600px] md:w-[318px] md:h-[500px] flex flex-col justify-center items-center md:min-w-0 rounded-3xl p-4 border border-[#CDCDCD]"
                        >
                            <h2 className="text-[16px] p-[4px] px-4 mb-5 bg-[#1782C5] text-white border rounded-[50px]">
                                {card.title}
                            </h2>
                            <img
                                src={card.image}
                                alt={`Card ${index + 1}`}
                                className="w-full md:w-[221px] h-auto object-cover"
                            />
                            <p className="mb-4 text-center text-[#1782C5]">{card.description}</p>
                            <button className="px-4 py-1 flex justify-center items-center gap-2 rounded-[50px] border border-[#CDCDCD] self-end">
                                View More
                                <img src={vector} alt="vector icon" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DiscoverProducts
