import React from 'react'
import contact from '../../assets/images/contact.svg'
import social from '../../assets/images/Social.svg'
import meeting from '../../assets/images/meeting.svg'
import location from '../../assets/images/location.svg'
import social1 from '../../assets/images/social1.svg'
import social2 from '../../assets/images/social2.svg'
import social3 from '../../assets/images/social3.svg'



const Contact = () => {
    return (
        <div>
            <hr className="w-[95%] h-1 border-t-1 border-[#C3C3C3] mx-auto" />
            <div className='p-5 py-10 '>
                <div className=' text-center'>
                    <h1 className='font-semibold md:text-2xl'>Get in touch with us for more information</h1>
                    <p className='text-[#7A7A7A] mt-2 text-sm md:text-base'>Let us know how we can help</p>
                </div>

                <div className='flex flex-col gap-8 md:flex-row md:gap-8 md:w-[90%] mx-auto my-10 '>
                    <div className='border flex flex-col gap-8 p-5 px-7 w-[80%] mx-auto font-custom rounded-lg border-[#CDCDCD]'>
                        <img src={contact} alt="" className='w-10 h-10' />
                        <p className='text-lg font-semibold '>Connect with us</p>
                        <div>
                            <p className='font-custom'>+91 101010101010</p>
                            <p className='font-custom'>contact.airbio@gmail.com</p>
                        </div>
                    </div>

                    <div className='border flex flex-col gap-8 p-5 px-7 w-[80%] mx-auto font-custom rounded-lg border-[#CDCDCD]'>
                        <img src={social} alt="" className='w-10 h-10' />
                        <p className='text-lg font-semibold '>Follow our socials</p>
                        <div>
                            <p>connect with our social handles stay updated with latest news</p>
                            <div className='font-custom flex justify-center mt-3 gap-5'>
                                <img src={social1} alt="linkedin.svg" />
                                <img src={social2} alt="facebook.svg" />
                                <img src={social3} alt="whastapp.svg" />
                            </div>
                        </div>
                    </div>

                    <div className='border flex flex-col gap-8 p-5 px-7 w-[80%] mx-auto font-custom rounded-lg border-[#CDCDCD]'>
                        <img src={meeting} alt="" className='w-10 h-10' />
                        <p className='text-lg font-semibold '>Schedule a meeting</p>
                        <div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            {/* <p className='font-custom'>contact.airbio@gmail.com</p> */}
                        </div>
                    </div>

                    <div className='border flex flex-col gap-8 p-5 px-7 w-[80%] mx-auto font-custom rounded-lg border-[#CDCDCD]'>
                        <img src={location} alt="" className='w-10 h-10' />
                        <p className='text-lg font-semibold '>Location</p>
                        <div>
                            <p className='font-custom'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            {/* <p className='font-custom'>contact.airbio@gmail.com</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
