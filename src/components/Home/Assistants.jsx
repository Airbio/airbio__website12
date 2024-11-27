import React from 'react'
import svg from '../../assets/images/contactSVG.svg'

const Assistants = () => {
    return (
        <div className='bg-black md:w-[90%] md:mx-auto p-5 mt-5 mx-3 mb-10 rounded-2xl md:rounded-lg'>
            <div className='text-white'>
                <h1 className='text-2xl'>Need any assistant?</h1>
                <p className='text-sm my-4'>Connect with our experts to explore tailored
                solutions for your specific needs</p>
            </div>
            <div >
                <div className="flex justify-end items-center mt-5">
                    <button className="bg-white hover:bg-blue-600 w-auto h-[48px] px-4 p-2 rounded-full">
                    Schedule meeting
                    </button>
                    <div className='bg-white flex items-center justify-center w-[48px] h-[48px] p-1 px-4 rounded-full'>
                        <img src={svg} className='w-[20px] h-[20px]' alt="Down arrow icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Assistants
