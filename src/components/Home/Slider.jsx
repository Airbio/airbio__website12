import React from 'react'
// import image1 from '../../assets/images/Slider-Horizontal.jpg'
// import image2 from '../../assets/images/Slider-Horizontal1.jpg'
import image1 from '../../assets/images/certification1.png'
import image2 from '../../assets/images/certification2.png'
import image3 from '../../assets/images/certification3.png'
import image4 from '../../assets/images/certification4.png'
import image5 from '../../assets/images/certification5.png'





const Slider = () => {
    return (
        <div className="slider-container relative overflow-hidden w-full my-8 ">
            {/* Image wrapper that will slide */}
            <div className="slider-left flex gap-5 animate-slide mb-3 border">
                <img src={image1} alt="slider" className="slider-image w-10 h-10 md:w-[100px] md:h-[100px] ml-12" />
                <img src={image2} alt="slider" className="slider-image w-10 h-10 md:w-[100px] md:h-[100px] mx-5" />
                <img src={image3} alt="slider" className="slider-image w-10 h-10 md:w-[100px] md:h-[100px] mx-5" />
                <img src={image4} alt="slider" className="slider-image w-10 h-10 md:w-[100px] md:h-[100px] mx-5" />
                <img src={image5} alt="slider" className="slider-image w-10 h-10 md:w-[100px] md:h-[100px] mx-5" />
            </div>

            <hr className="w-[95%] h-1 border-t-1 border-[#C3C3C3] mx-auto" />

            <div className="slider-right h- flex justify-center items-center gap-5 animate-slide mt-3 border">
                <img src={image5} alt="slider" className="slider-image w-10 h-10 md:w-[100px] md:h-[100px] mr-12" />
                <img src={image4} alt="slider" className="slider-image w-10 h-10 md:w-[100px] md:h-[100px] mx-5" />
                <img src={image3} alt="slider" className="slider-image w-10 h-10 md:w-[100px] md:h-[100px] mx-5" />
                <img src={image2} alt="slider" className="slider-image w-10 h-10 md:w-[100px] md:h-[100px] mx-5" />
                <img src={image1} alt="slider" className="slider-image w-10 h-10 md:w-[100px] md:h-[100px] mx-5" />
            </div>
        </div>
    )
}

export default Slider
