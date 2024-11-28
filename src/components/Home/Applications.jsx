import React from 'react';
import img1 from '../../assets/images/application1.jpeg'
import icon1 from '../../assets/images/aicon1.svg'


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
            imgSrc: img1,
            icon: icon1,
            title: 'Pharmaceuticals',
            description1: des1,
            description2: des2,
            description3: des3,
        },
        {
            id: 3,
            icon: icon1,
            imgSrc: img1,
            title: 'Farming & Agriculture',
            description1: des1,
            description2: des2,
            description3: des3,
        },
        {
            id: 4,
            icon: icon1,
            imgSrc: img1,
            title: 'Botanicals & Herbal Products',
            description1: des1,
            description2: des2,
            description3: des3,
        },
        {
            id: 5,
            icon: icon1,
            imgSrc: img1,
            title: 'Forensics',
            description1: des1,
            description2: des2,
            description3: des3,
        },
    ];

    return (
        <>
            <h1 className='text-2xl text-center font-semibold px-5 pt-5 md:p-10 md:w-[373px]  md:text-4xl md:text-start my-2 '>Applications</h1>
            <div className=" py-8 px-4">
                <div className="w-[95%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 ">
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            className="bg-white md:flex justify-center items-center gap-5 shadow-lg rounded-lg p-6  border-gray-200"
                        >
                            {/* 1st Div: Image */}
                            <div className="mb-4 md:w-[50%]">
                                <img
                                    src={card.imgSrc}
                                    alt={card.title}
                                    className="w-full h-40 md:h-64 object-cover rounded-md"
                                />
                            </div>

                            <div className=' md:w-[50%]'>
                                {/* 2nd Div: Title */}
                                <div className="mb-4 flex gap-4 items-center">
                                    <div className='border p-2 rounded-full'>
                                        <img src={card.icon} alt="" />
                                    </div>
                                    <h2 className="text-lg font-bold">{card.title}</h2>
                                </div>

                                {/* 3rd Div: Descriptions */}
                                <div className="flex flex-col space-y-4 text-gray-700 relative">
                                    {/* Timeline */}
                                    <div className="absolute top-[15px] left-[3.5px] bottom-[20px] h-full w-[1px] bg-gray-300"></div>

                                    {/* Description 1 */}
                                    <div className="flex items-start">
                                        <div className="relative">
                                            <div className="w-2 h-2 bg-gray-500 rounded-full"></div> {/* Dot */}
                                        </div>
                                        <p className="ml-4">{card.description1}</p>
                                    </div>

                                    {/* Description 2 */}
                                    <div className="flex items-start">
                                        <div className="relative">
                                            <div className="w-2 h-2 bg-gray-500 rounded-full"></div> {/* Dot */}
                                        </div>
                                        <p className="ml-4">{card.description2}</p>
                                    </div>

                                    {/* Description 3 */}
                                    <div className="flex items-start">
                                        <div className="relative">
                                            <div className="w-2 h-2 bg-gray-500 rounded-full"></div> {/* Dot */}
                                        </div>
                                        <p className="ml-4">{card.description3}</p>
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
