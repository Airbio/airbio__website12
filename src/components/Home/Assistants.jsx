import React from 'react'
import svg from '../../assets/images/contactSVG.svg'

const Assistants = () => {
    return (
        <div className='bg-black h-[199px] md:w-[90%] md:mx-auto p-5 mt-5 mx-3 mb-10 rounded-2xl md:rounded-lg'>
            <div className='text-white flex flex-col justify-end mt-5 md:mt-0 gap-3 h-[50%] '>
                <h1 className='text-2xl'>Need any assistant?</h1>
                <p className='text-sm'>Connect with our experts to explore tailored
                solutions for your specific needs</p>
            </div>
            <div className=''>
                <div className="flex justify-end items-center mt-3">
                    <button className="bg-white hover:bg-[#1782C5] w-auto h-[38px] px-4 p-2 rounded-full">
                    Schedule meeting
                    </button>
                    <div className='bg-white flex items-center hover:bg-[#1782C5] justify-center w-[48px] h-[48px] p-1 px-4 rounded-full'>
                        <img src={svg} className='w-[20px] h-[20px]' alt="Down arrow icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Assistants
