import React from "react";
import post1 from '../../assets/images/Post1.png'
import post2 from '../../assets/images/Post2.png'
import post3 from '../../assets/images/Post3.png'
import Arrow from '../../assets/images/down-light.svg'

const postsData = [
    {
        img: post1,
    },
    {
        img: post2,
    },
    {
        img: post3,
    },
    {
        img: post1,
    },
    {
        img: post2,
    },
    {
        img: post3,
    },
];



const Instagram = () => {
    return (
        <div className="container mx-auto px-4">
            <div className=' md:flex justify-between items-center p-5  mt-8 border-blue-600'>
                <h1 className='text-2xl text-center md:w-[373px]  md:text-4xl md:text-left my-2 '>What’s going on at Airbio</h1>
                <p className='text-[15px] hidden md:flex py-2 md:py-0 md:w-[553px] text-[#7A7A7A]'>We know that selecting the right product can feel overwhelming, which is why we’ve thoughtfully curated a comprehensive FAQ section to guide you through the decision-making process with ease and confidence.</p>
            </div>
            {/* Card Wrapper */}
            <div className="grid grid-cols-3 md:w-[80%] mx-auto md:grid-cols-3 gap-6">
                {postsData.map((post, index) => (
                    <div
                        key={index}
                        className="bg-white border w-auto h-[118px] md:h-[321px] border-gray-200 rounded-lg shadow-md overflow-hidden"
                    >
                        <img
                            src={post.img}
                            alt={post.title}
                            className="h-[118px] md:h-[321px] w-auto object-cover"
                        />
                    </div>
                ))}
            </div>
            <div className="flex justify-center items-center p-5 my-5">
                <button className="bg-black w-auto h-[48px] text-white px-4 p-2 rounded-full" style={{background: "radial-gradient(182.65% 122.8% at 84.5% 113.5%, #FF1B90 24.39%, #F80261 43.67%, #ED00C0 68.85%, #C500E9 77.68%, #7017FF 89.32%), radial-gradient(51.8% 49.8% at 36.25% 96.55%, #FFD600 0%, #FF6930 48.44%, #FE3B36 73.44%, rgba(254, 59, 54, 0) 100%)"}}>
                    Visit Instagram
                </button>
                <div className='bg-black md:hidden flex items-center justify-center text-white w-[48px] h-[48px] p-1 px-4 rounded-full'>
                    <img src={Arrow} className='w-[40px] h-[80px]' alt="Down arrow icon" />
                </div>
            </div>
        </div>
    );
};



export default Instagram;

