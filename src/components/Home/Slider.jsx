import React from 'react'
import image from '../../assets/images/Client logo.svg'
// import image2 from '../../assets/images/Slider-Horizontal1.jpg'
import image1 from '../../assets/images/certification1.png'
import image2 from '../../assets/images/certification2.png'
import image3 from '../../assets/images/certification3.png'
import image4 from '../../assets/images/certification4.png'
import image5 from '../../assets/images/certification5.png'





const Slider = () => {
    return (
        <div className="slider-container relative overflow-hidden w-full my-8 ">
            <div className=' md:flex justify-between px-5 pb-5 md:px-10 md:p-5  border-blue-600'>
                <h1 className='text-2xl font-semibold text-center md:text-start md:w-[373px] md:text-4xl  '>Client we have catered </h1>
                <p className='text-[15px] text-center py-2 md:py-0 md:w-[553px] md:h-[80px] text-[#7A7A7A]  '>Meet the clients of Airbio who has used our products.</p>
            </div>

            {/* Image wrapper that will slide */}
            <div className="slider-left flex gap-5 animate-slide mb-3 ">
                {/* <img src={image1} alt="slider" className="slider-image w-10 h-10 md:w-[100px] md:h-[100px] ml-12" />
                <img src={image2} alt="slider" className="slider-image w-10 h-10 md:w-[100px] md:h-[100px] mx-5" />
                <img src={image3} alt="slider" className="slider-image w-10 h-10 md:w-[100px] md:h-[100px] mx-5" />
                <img src={image4} alt="slider" className="slider-image w-10 h-10 md:w-[100px] md:h-[100px] mx-5" />
                <img src={image5} alt="slider" className="slider-image w-10 h-10 md:w-[100px] md:h-[100px] mx-5" /> */}
                <img src={image} alt="" className='h-16 w-auto'/>
                <img src={image} alt="" className='h-16 w-auto'/>
                <img src={image} alt="" className='h-16 w-auto'/>
            </div>

            <hr className="w-[95%] h-1 border-t-1 border-[#C3C3C3] mx-auto" />

            {/* <div className="slider-right h- flex justify-center items-center gap-5 animate-slide mt-3 ">
                <img src={image5} alt="slider" className="slider-image w-10 h-10 md:w-[100px] md:h-[100px] mr-12" />
                <img src={image4} alt="slider" className="slider-image w-10 h-10 md:w-[100px] md:h-[100px] mx-5" />
                <img src={image3} alt="slider" className="slider-image w-10 h-10 md:w-[100px] md:h-[100px] mx-5" />
                <img src={image2} alt="slider" className="slider-image w-10 h-10 md:w-[100px] md:h-[100px] mx-5" />
                <img src={image1} alt="slider" className="slider-image w-10 h-10 md:w-[100px] md:h-[100px] mx-5" />
                <img src={image} alt="" />
                <img src={image} alt="" />
                <img src={image} alt="" />
            </div> */}
        </div>
    )
}

export default Slider
