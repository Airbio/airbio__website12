import React from 'react'
import banner from '../../assets/images/banner.jpeg'
import art1 from '../../assets/images/art1.webp'
import art2 from '../../assets/images/art2.webp'
import art3 from '../../assets/images/art3.webp'
import vector from '../../assets/images/Vector.svg'

const About = () => {
    return (
        <div>
            <div className='p-5  flex flex-col md:flex justify-center items-center border-red-600'>
                <h1 className='text-center md:hidden p-1 px-3 border border-[#C0C0C0] rounded-full text-black font-semibold inline-block mx-auto'>About Airbio</h1>
                <div className='md:flex justify-between md:px-5 items-center border-black'>
                    <div className='my-5'><img src={banner} className='w-[370px] md:w-[520px] h-[243px] md:h-[358px]' alt="" /></div>
                    <div className='flex flex-col gap-10 md:w-[50%] border-blue-500'>
                        <h1 className='hidden md:inline-block p-[6px] font-urbanist px-4 border border-[#C0C0C0] rounded-full text-black font-semibold w-fit'>About Airbio</h1>
                        <p className='text-center md:text-start font-custom text-[#868686]'>At AirBio, we specialize in manufacturing innovative, high quality safety systems designed to protect people, systems and the environment. From ductless fume hoods to biological safety cabinets, our product range provides protection against hazardous materials, air pollution and hazardous vapors. <span className='text-black'>With the most advanced technology, our solutions are designed to meet global environmental standards and support green initiatives such as LEED compliance.</span></p>
                    </div>
                </div>
            </div>

            <div>
                <div className=' md:flex justify-between p-5 md:p-10 mt-8 border-blue-600'>
                    <h1 className='text-2xl font-semibold text-center md:text-start md:w-[373px] md:h-[96px] md:text-4xl my-2 font-urbanist'>State-of-the-art manufacturing</h1>
                    <p className='text-[15px] text-center md:text-start py-2 md:py-0 md:w-[553px] md:h-[80px] text-[#7A7A7A] '>Our state-of-the-art research and manufacturing facilities reflect our commitment to excellence. Every part we manufacture is tested to meet the highest industry standards. From engineering and manufacturing to installation and technical support, the entire process is managed by the integrated team to ensure the best customer experience.</p>
                </div>
                <div>
                    <div className="flex overflow-x-scroll md:grid md:grid-cols-3 gap-4 md:gap-10 p-4 mx-auto max-w-screen-lg">
                        {/* Card 1 */}
                        <div className="min-w-[318px] h-[530px] md:w-[318px] md:h-[448px] flex flex-col justify-center items-center md:min-w-0 rounded-3xl p-4 border border-[#CDCDCD]">
                            <h2 className="text-[16px] p-[4px]  px-4 mb-5 bg-[#1782C5] text-white border rounded-[50px]">Ductless Fume Hoods</h2>
                            <img src={art1} alt="Card 1" className="w-full md:w-[221px] h-auto object-cover mb-4" />
                            <button className=" px-4 py-1 flex  justify-center items-center gap-2 rounded-[50px] border border-[#CDCDCD]">View More
                                <img src={vector} alt="vector icon" />
                            </button>
                        </div>

                        {/* Card 2 */}
                        <div className="min-w-[318px] h-[530px] md:w-[318px] md:h-[448px] flex flex-col justify-center items-center md:min-w-0 rounded-3xl p-4 border border-[#CDCDCD]">
                            <h2 className="text-[16px] p-[4px]  px-4 mb-5 bg-[#1782C5] text-white border rounded-[50px]">Laminar Flow Cabinets</h2>
                            <img src={art2} alt="Card 2" className="w-full h-auto md:w-[221px] object-cover mb-4" />
                            <button className=" px-4 py-1 flex  justify-center items-center gap-2 rounded-[50px] border border-[#CDCDCD]">View More
                            <img src={vector} alt="vector icon" /></button>
                        </div>

                        {/* Card 3 */}
                        <div className="min-w-[318px] h-[530px] md:w-[318px] md:h-[448px] flex flex-col justify-center items-center md:min-w-0 rounded-3xl p-4 border border-[#CDCDCD]">
                            <h2 className="text-[16px] p-[4px]  px-4 mb-5 bg-[#1782C5] text-white border rounded-[50px]">Biosafety Cabinets</h2>
                            <img src={art3} alt="Card 3" className="w-full h-auto md:w-[221px] object-cover mb-4" />
                            <button className=" px-4 py-1 flex  justify-center items-center gap-2 rounded-[50px] border border-[#CDCDCD]">View More
                            <img src={vector} alt="vector icon" /></button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About
