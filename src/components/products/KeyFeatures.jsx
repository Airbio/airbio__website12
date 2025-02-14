import React from 'react'
import rightArrow from '../../assets/images/Chevron_Right.svg'

const KeyFeatures = () => {
     return (
          <div className='p-6 md:w-[90%] mx-auto'>
               <h1 className='text-center md:text-start text-xl md:text-2xl text-[#1782C5] p-1 px-2 py-3 rounded-lg bg-[#F5F5F5] font-medium'> Key Features of Class II, Type B2 Biosafety Cabinet</h1>

               <div className='md:px-2'>
                    <div className='flex items-start gap-3  mt-5'>
                         <img src={rightArrow} alt="Right Arrow" className="w-4 h-4 mt-1" />
                         <p><b>Versatile Design:</b> Benchtop model with multiple base stand options, enabling configuration as a full console unit to suit various workspace requirements.</p>
                    </div>
                    <div className='flex items-start gap-3  mt-5'>
                         <img src={rightArrow} alt="Right Arrow" className="w-4 h-4 mt-1" />
                         <p><b>100% Exhaust System:</b> Entire work zone air is fully exhausted through the facility’s internal exhaust system, ensuring safe handling of volatile chemicals and trace radionuclides.</p>
                    </div>
                    <div className='flex items-start gap-3  mt-5'>
                         <img src={rightArrow} alt="Right Arrow" className="w-4 h-4 mt-1" />
                         <p><b>Specialized Application:</b> Ideal for low to moderate risk-hazard environments requiring strict containment of airborne biological pathogens or particulate chemical agents.</p>
                    </div>
                    <div className='flex items-start gap-3  mt-5'>
                         <img src={rightArrow} alt="Right Arrow" className="w-4 h-4 mt-1" />
                         <p><b>Dynamic Air Barrier:</b> Creates a protective air barrier at the front of the cabinet, enhancing safety for personnel and reducing exposure risks.</p>
                    </div>
                    <div className='flex items-start gap-3  mt-5'>
                         <img src={rightArrow} alt="Right Arrow" className="w-4 h-4 mt-1" />
                         <p><b>Primary Engineering Control:</b> Provides robust safety when used with proper techniques, ensuring effective containment of hazardous materials.</p>
                    </div>
                    <div className='flex items-start gap-3  mt-5'>
                         <img src={rightArrow} alt="Right Arrow" className="w-4 h-4 mt-1" />
                         <p><b>Optimal Protection:</b> Offers reliable containment for both personnel and products, making it suitable for specialized laboratory applications.</p>
                    </div>
                    <div className='flex items-start gap-3  mt-5'>
                         <img src={rightArrow} alt="Right Arrow" className="w-4 h-4 mt-1" />
                         <p><b>Flexible Integration: </b>Designed for compatibility with internal exhaust systems for enhanced operational safety and efficiency.</p>
                    </div>
               </div>
          </div>
     )
}

export default KeyFeatures
