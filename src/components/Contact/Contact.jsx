import React from 'react'
import contact from '../../assets/images/contact.svg'
import icon from '../../assets/images/contact2.svg'
import social from '../../assets/images/Social.svg'
import meeting from '../../assets/images/meeting.svg'
import location from '../../assets/images/location.svg'
import social1 from '../../assets/images/social1.svg'
import social2 from '../../assets/images/social2.svg'
import social3 from '../../assets/images/social3.svg'
import contact1 from '../../assets/images/contact1.png'
import contact3 from '../../assets/images/contact3.png'
import connect1 from '../../assets/images/connect1.svg'
import connect2 from '../../assets/images/connect2.svg'
import Header from '../Home/Header'



const Contact = () => {
    return (
        <div>
            <Header />
            <hr className="w-[95%] h-1 mt-6 border-t-1 border-[#C3C3C3] mx-auto" />
            <div className='p-5 py-10 '>
                <div className=' text-center'>
                    <div>
                        <h1 className='font-semibold text-[#1782C5] text-3xl md:text-4xl'>Connect & Support
                        </h1>
                        <p className=' mt-2 text-sm md:text-base'>Let us know how we can help you!</p>
                    </div>

                    <div className='flex justify-center items-center '>
                        <img src={contact1} alt="" className='md:h-[480px] md:w-auto' />
                    </div>
                </div>

                <div className=' border-black md:w-[80%] mx-auto md:flex justify-center my-8'>
                    <div className='md:order-2'>
                        <img src={contact3} alt="" className='w-full h-[245px] md:w-[540px] md:h-[300px] object-cover rounded-t-lg md:rounded-l-none md:rounded-r-lg' />
                    </div>
                    <div className='bg-[#1782C5] md:order-1 md:w-[45%] md:flex items-center p-5 px-8 gap-5 text-white rounded-b-lg md:rounded-b-none md:rounded-l-lg '>
                        <div className=''>
                            <img src={icon} alt="" className=' md:w-10 justify-start items-center p-2 rounded-lg  border ' />
                            <h1 className='font-semibold text-xl md:text-2xl mt-5 mb-3'>Schedule a Meeting
                                <br /> with our Experts</h1>
                            <p className='text-[#D9D9D9] text-sm my-3'>Book a session with our experts to get <br /> personalized solutions tailored to your needs!</p>
                            <button className=' bg-white text-black p-1 px-3 md:py-2 rounded-3xl'>Schedule meeting</button>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-8 md:flex-row md:gap-8 md:w-[80%] mx-auto my-10 '>
                    <div className='border flex flex-col gap-4 p-5 pb-10 px-7 w-[90%] mx-auto font-custom rounded-xl border-[#1782C5]'>
                        <img src={contact} alt="" className='w-10 h-10' />
                        <h1 className='text-lg font-semibold '>Connect with us</h1>
                        <div>
                            <div className='flex gap-3'>
                                <img src={connect1} alt="" />
                                <p className='font-custom text-[#1E1E1E] text-opacity-75'>+91-7942962885</p>
                            </div>
                            <div className='flex gap-3 mt-2 mb-3'>
                                <img src={connect2} alt="" />
                                <p className='font-custom text-[#1E1E1E] text-opacity-75'>contact.airbio@gmail.com</p>
                            </div>

                        </div>
                    </div>

                    <div className='border flex flex-col gap-4 p-5 px-7 w-[90%] mx-auto font-custom rounded-lg border-[#1782C5]'>
                        <img src={social} alt="" className='w-10 h-10' />
                        <h1 className='text-lg font-semibold '>Follow our socials</h1>
                        <div>
                            <p className='text-[#1E1E1E] text-opacity-75'>connect with our social handles stay updated with latest news</p>
                            <div className='font-custom flex justify-center mt-4 gap-5 '>
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                    <img src={social1} alt="Facebook" className='w-[28px] h-[28px]'/>
                                </a>
                                <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
                                    <img src={social2} alt="WhatsApp" />
                                </a>
                                <a href="https://www.linkedin.com/company/airbiotechnologies/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">
                                    <img src={social3} alt="linkedin" className='w-[28px] h-[28px]'/>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* <div className='border flex flex-col gap-8 p-5 px-7 w-[90%] mx-auto font-custom rounded-lg border-[#1782C5]'>
                        <img src={meeting} alt="" className='w-10 h-10' />
                        <p className='text-lg font-semibold '>Schedule a meeting</p>
                        <div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <p className='font-custom'>contact.airbio@gmail.com</p>
                        </div>
                    </div> */}

                    <div className='border flex flex-col gap-4 p-5 pb-7 px-7 w-[90%] mx-auto font-custom rounded-lg border-[#1782C5]'>
                        <img src={location} alt="" className='w-10 h-10' />
                        <h1 className='text-lg font-semibold '>Address</h1>
                        <div>
                            <p className='text-[#1E1E1E] text-opacity-75 mb-6'>New Delhi, India.</p>
                            <div className='flex justify-center items-center'>
                                <a href="https://www.google.com/maps?q=28.67151000,77.35550000" target="_blank" rel="noopener noreferrer">
                                    <button className=' bg-black text-white  p-1 px-3 rounded-3xl'>Locate on Maps</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
