import React from 'react'
import svg from '../../assets/images/calendar-linear.svg'

const Assistants = () => {
    return (
        <div className='bg-black md:w-[90%] md:mx-auto px-5 py-10 mt-5 mx-3 mb-10 rounded-2xl '>
            <div className='text-white flex flex-col justify-end md:mt-0 gap-3 h-[50%] '>
                <h1 className='text-2xl md:w-[30%]'>Book an appointement with our <span className='font-medium'>Experts</span></h1>
                <p className='text-sm '>Book your meeting and take the next step forward!</p>
            </div>
            <div className=''>
                <div className="flex justify-end items-center mt-5">
                    <button className="bg-white flex justify-between items-center gap-1 hover:bg-[#1782C5] w-auto h-[38px]  p-2 px-3 rounded-full">
                        Schedule meeting
                        <div className=' text-white flex items-center hover:bg-[#1782C5] justify-center w-[28px] h-[28px] rounded-full'>
                            <img src={svg} className='w-[20px] h-[25px]' alt="Down arrow icon" />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Assistants
