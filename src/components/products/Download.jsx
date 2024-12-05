import React from 'react'
import bgimageMobile from '../../assets/images/scan-bg.webp'
import bgimage from '../../assets/images/scan-bg1.webp'
import Qrcode from '../../assets/images/qr_code.png'
import SVG from '../../assets/images/downloadSVG.svg'


const Download = () => {
    return (
        <>
            {/* // for mobile */}
            <div style={{
                backgroundImage: `url(${bgimageMobile})`,
                backgroundSize: 'cover', // Ensures the image covers the entire div
                backgroundPosition: 'center', // Centers the image
            }} className='flex flex-col justify-center items-center md:hidden gap-5 p-6 h-screen'>
                <div>
                    <h1 className='text-xl text-center font-semibold  w-[298px]'>Download <span className='text-[#1782C5] text-xl px-1'>Airbio</span> Product Information  </h1>
                </div>
                <div>
                    <img src={Qrcode} alt="Qr Scanner" className='w-[180px] h-[180px]' />
                </div>
                <div className='flex flex-col justify-center items-center gap-5'>
                    <p className='text-center text-[#7A7A7A]'>Choose the Velocity laminar air flow cabinet for unparalleled cleanliness, safety, and efficiency in your laboratory workflows.
                    </p>
                    <button className="px-4 py-2 font-semibold flex items-center bg-[#FFA757] gap-2 rounded-full border border-[#7A7A7A]">
                        Download Brochure
                        <img src={SVG} alt="" />
                    </button>
                </div>
            </div>

            {/* // for desktop */}
            <div style={{
                backgroundImage: `url(${bgimage})`,
                backgroundSize: 'cover', // Ensures the image covers the entire div
                backgroundPosition: 'center', // Centers the image
            }} className='hidden md:flex flex-col justify-center items-center gap-5 p-6 h-screen '>
                <div className=''>
                    <h1 className='text-2xl text-center font-semibold mb-5'>Download <span className='text-[#1782C5] text-2xl px-1'>Airbio</span> Product Information  </h1>
                </div>
                <div className='flex justify-center items-center w-[80%] mx-auto  '>
                    <div className='w-[50%] flex justify-center items-center'>
                        <img src={Qrcode} alt="Qr Scanner" className='w-[180px] h-[180px]' />
                    </div>
                    <div className='w-[50%] flex flex-col justify-center items-start gap-5 '>
                        <p className=' text-[#7A7A7A] '>Choose the Velocity laminar air flow cabinet for unparalleled cleanliness, safety, and efficiency in your laboratory workflows.
                        </p>
                        <button className="px-4 py-2 font-semibold flex items-center bg-[#FFA757] gap-2 rounded-full border border-[#7A7A7A]">
                            Download Brochure
                            <img src={SVG} alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Download
