import React from 'react'
import image1 from '../../assets/images/Slider-Horizontal.jpg'
import image2 from '../../assets/images/Slider-Horizontal1.jpg'

const Slider = () => {
    return (
        <div className="slider-container relative overflow-hidden w-full my-8 ">
            {/* Image wrapper that will slide */}
            <div className="slider-left flex animate-slide mb-3">
                <img src={image1} alt="slider" className="slider-image w-auto h-full" />
                <img src={image1} alt="slider" className="slider-image w-auto h-full" />
            </div>
            <hr className="w-[95%] h-1 border-t-1 border-[#C3C3C3] mx-auto" />
            <div className="slider-right flex animate-slide mt-3 ">
                <img src={image2} alt="slider" className="slider-image w-auto h-full" />
                <img src={image2} alt="slider" className="slider-image w-auto h-full" />
            </div>
        </div>
    )
}

export default Slider
