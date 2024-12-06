import React from 'react'
import svg from '../../assets/images/contactSVG.svg'

const Assistants = () => {
    return (
        <div className='bg-black h-[199px] md:w-[90%] md:mx-auto p-5 mt-5 mx-3 mb-10 rounded-2xl md:rounded-lg'>
            <div className='text-white flex flex-col justify-end mt-5 md:mt-0 gap-3 h-[50%] '>
                <h1 className='text-2xl font-semibold'>Need any assistant?</h1>
                <p className='text-sm'>Connect with our experts to explore tailored
                    solutions for your specific needs</p>
            </div>
            <div className=''>
                <div className="flex justify-end items-center mt-3">
                    <button className="bg-white flex justify-between items-center gap-3 hover:bg-[#1782C5] w-auto h-[38px] font-semibold  p-2 rounded-full">
                        Schedule meeting
                        <div className='bg-black text-white flex items-center hover:bg-[#1782C5] justify-center w-[28px] h-[28px] p-2 rounded-full'>
                            <img src={svg} className='w-[20px] h-[25px]' alt="Down arrow icon" />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Assistants
