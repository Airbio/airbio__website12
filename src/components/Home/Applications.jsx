import React from 'react';
import img1 from '../../assets/images/application1.jpeg'
import img2 from '../../assets/images/application2.png'
import img3 from '../../assets/images/application3.png'
import img4 from '../../assets/images/application4.png'
import img5 from '../../assets/images/application5.png'
import icon1 from '../../assets/images/aicon1.svg'
import icon2 from '../../assets/images/icon2.svg'
import icon3 from '../../assets/images/icon3.svg'
import icon4 from '../../assets/images/icon4.svg'
import icon5 from '../../assets/images/icon5.svg'




const des1 = "Provides sterile environments for research in microbiology, genetics, and tissue culture."

const des2 = "Protects samples from contamination and ensures precise experimental outcomes."

const des3 = "Ideal for handling non-hazardous biological materials and maintaining aseptic conditions."

const Applications = () => {
    const cards = [
        {
            id: 1,
            icon: icon1,
            imgSrc: img1,
            title: 'Life Sciences',
            description1: des1,
            description2: des2,
            description3: des3,
        },
        {
            id: 2,
            imgSrc: img2,
            icon: icon2,
            title: 'Pharmaceuticals',
            description1: des1,
            description2: des2,
            description3: des3,
        },
        {
            id: 3,
            icon: icon3,
            imgSrc: img3,
            title: 'Farming & Agriculture',
            description1: des1,
            description2: des2,
            description3: des3,
        },
        {
            id: 4,
            icon: icon4,
            imgSrc: img4,
            title: 'Botanicals & Herbal Products',
            description1: des1,
            description2: des2,
            description3: des3,
        },
        {
            id: 5,
            icon: icon5,
            imgSrc: img5,
            title: 'Forensics',
            description1: des1,
            description2: des2,
            description3: des3,
        },
        {
            id: 5,
            icon: icon5,
            imgSrc: img5,
            title: 'Food & Beverages',
            description1: des1,
            description2: des2,
            description3: des3,
        },
    ];

    return (
        <>
            <h1 className='text-3xl text-center px-5 pt-5 md:p-10 md:w-[373px] md:text-[40px] font-[500px] md:text-start mt-16'>Applications</h1>
            <div className=" py-8 px-4 ">
                <div className="w-[95%] mx-auto grid  border-black grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 ">
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            className=" bg-[#F7F7F7]  justify-center items-center gap-5 rounded-lg p-6  border-[#CDCDCD]"
                        >
                            {/* 1st Div: Title */}
                            <div className="mb-4 flex gap-4 items-center">
                                <div className='border border-black p-2 rounded-full'>
                                    <img src={card.icon} alt="" />
                                </div>
                                <h2 className="text-xl md:text-2xl font-medium">{card.title}</h2>
                            </div>



                            <div className='md:flex justify-between items-center  gap-4  border-black'>
                                {/* 2nd Div: Title */}
                                {/* <div className="mb-4 flex gap-4 items-center">
                                    <div className='border p-2 rounded-full'>
                                        <img src={card.icon} alt="" />
                                    </div>
                                    <h2 className="text-lg font-bold">{card.title}</h2>
                                </div> */}
                                {/* 2nd Div: Image */}
                                <div className="mb-4 md:w-[50%]  border-green-400">
                                    <img
                                        src={card.imgSrc}
                                        alt={card.title}
                                        className="w-full h-40 md:h-64 object-cover rounded-md"
                                    />
                                </div>

                                {/* 3rd Div: Descriptions */}
                                <div className="flex flex-col md:w-[50%]  text-gray-700 relative  border-green-500">
                                    {/* Timeline */}
                                    {/* <div className="absolute bg-[#1782C5] top-4 left-[6px] bottom-16 sm:bottom-12 md:bottom-16 w-[1px]"></div> */}

                                    {/* Description 1 */}
                                    <div className="flex items-start ">
                                        <div className="relative flex-shrink-0">
                                            <div className="w-3 h-3 mt-1 border border-[#1782C5] rounded-full flex items-center justify-center">
                                                <div className="w-2 h-2 bg-[#1782C5] rounded-full"></div> {/* Inner Dot */}
                                            </div>
                                        </div>
                                        <p className="ml-4 mb-3 leading-5">{card.description1}</p>
                                    </div>

                                    {/* Description 2 */}
                                    <div className="flex items-start">
                                        <div className="relative flex-shrink-0">
                                            <div className="w-3 h-3 mt-1 border border-[#1782C5] rounded-full flex items-center justify-center">
                                                <div className="w-2 h-2 bg-[#1782C5] rounded-full"></div> {/* Inner Dot */}
                                            </div>
                                        </div>
                                        <p className="ml-4 mb-3 leading-5">{card.description2}</p>
                                    </div>

                                    {/* Description 3 */}
                                    <div className="flex items-start">
                                        <div className="relative flex-shrink-0">
                                            <div className="w-3 h-3 mt-1 border border-[#1782C5] rounded-full flex items-center justify-center">
                                                <div className="w-2 h-2 bg-[#1782C5] rounded-full"></div> {/* Inner Dot */}
                                            </div>
                                        </div>
                                        <p className="ml-4 leading-5">{card.description3}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Applications;
