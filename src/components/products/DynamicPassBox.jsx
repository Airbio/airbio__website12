import React, { useState } from 'react'
import Header from '../Home/Header'
import whatsapp from '../../assets/images/Whatsapp1.svg'
import rightArrow from '../../assets/images/Chevron_Right.svg'
import Assistants from '../Home/Assistants'

// Dynamic Pass Box Images (apne assets folder mein daal dena)
import product1 from '../../assets/images/DynamicPassBox/Dynamic-Pass-Box.png'
import product2 from '../../assets/images/DynamicPassBox/Dynamic-Pass-Box-2.png'
// import product3 from '../../assets/images/DynamicPassBox/Dynamic-Pass-Box-2.png'

const DynamicPassBoxData = [
    {
        name: 'Pass Box',
        title: 'AirBio Dynamic Pass Box',
        highlighted: " Dynamic Pass Box",
        title1: 'Precision',
        title2: 'Contamination-Free',
        title3: 'Reliable',
        description1: 'The AirBio Dynamic Pass Box is a state-of-the-art solution engineered to facilitate the smooth and contamination-free transfer of materials between two classified and non-classified areas. It plays a critical role in upholding integrity, cleanliness, and regulatory compliance of cleanrooms.',
        description2: 'Equipped with HEPA filtration, advanced interlock system, and microprocessor-based controls, it ensures safe material transfer while minimizing downtime and maintaining strict GMP & regulatory standards.',
        img1: product1,
        img2: product2,
        // img3: product3,
    },
]

const technicalSpecs = [
    { parameter: 'Product Type', specification: 'Dynamic Pass Box' },
    { parameter: 'Construction Material', specification: 'Powder-coated CRCA steel' },
    { parameter: 'Internal Chamber', specification: 'SS 304 Stainless Steel' },
    { parameter: 'Door Type', specification: 'Double Door with Electromagnetic / Mechanical Interlock' },
    { parameter: 'Filtration', specification: 'HEPA Filter 99.99% @ 0.3 µm' },
    { parameter: 'Airflow', specification: 'Two Stage Filtration with Recirculation' },
    { parameter: 'UV Lamp', specification: '254 nm Germicidal UV (Optional)' },
    { parameter: 'Control System', specification: 'Microprocessor / HMI + PLC Based' },
    { parameter: 'Power Supply', specification: '220–240 V AC, 50 Hz' },
    { parameter: 'Safety Features', specification: 'Door Interlock, Alarm, Pressure Gauge' },
    { parameter: 'Configuration', specification: 'Wall Mounted / Floor Mounted' },
]

const keyFeatures = [
    { bold: 'Robust Construction', text: 'Strong and durable build for long-lasting performance.' },
    { bold: 'HEPA Filtration', text: 'High-efficiency filtration for clean and sterile environment.' },
    { bold: 'Advanced Interlock System', text: 'Prevents simultaneous door opening with alarm.' },
    { bold: 'Easy Material Transfer', text: 'Two-way control system with visual and audio indicators.' },
    { bold: 'Enhanced Safety Measures', text: 'UV light, pressure monitoring, and cycle time control.' },
    { bold: 'Quick Maintenance', text: 'Easy access panels for filter replacement.' },
    { bold: 'GMP & Regulatory Compliance', text: 'Meets international cleanroom standards.' },
]

const DynamicPassBox = () => {
    const [selectedImage, setSelectedImage] = useState(product1)

    return (
        <div>
            <Header />
            <hr className="w-[95%] h-1 mt-6 border-t-1 border-[#C3C3C3] mx-auto" />
            <div className="p-6">
                {DynamicPassBoxData.map((product, index) => (
                    <div
                        key={index}
                        className="relative md:w-[90%] mx-auto md:flex justify-between items-center md:gap-8 pt-2 rounded-lg border-[#1782C5]"
                    >
                        <div className="mb-4 text-center md:hidden">
                            <h2 className="m-2 mb-3 py-2 px-4 md:m-0 border border-black inline-block font-medium rounded-full">
                                {product.name}
                            </h2>
                            <h3 className="text-2xl md:text-3xl text-[#1E1E1E]">
                                {product.title.split(product.highlighted)[0]}
                                <span className="text-[#1782C5]">{product.highlighted}</span>
                                {product.title.split(product.highlighted)[1]}
                            </h3>
                        </div>

                        {/* Images Section */}
                        <div className="flex flex-col md:flex-row justify-center items-center border-[#1782C5] mb-5">
                            <div className="w-[90%] md:w-full flex justify-center items-center">
                                <img
                                    src={selectedImage}
                                    alt="Selected Product Image"
                                    className="w-full h-[335px] p-4 px-4 lg:w-[423px] lg:h-[458px] object-contain rounded-lg mb-5 md:m-0 border border-[#1782C5]"
                                />
                            </div>

                            <div className="h-auto pl-2 mb-5 flex md:flex-col justify-between items-center gap-5">
                                <img src={product.img1} alt="1" onClick={() => setSelectedImage(product.img1)}
                                    className={`w-[75px] h-[75px] md:w-[107px] md:h-[107px] bg-[#F7F7F7] object-contain p-1 rounded-lg cursor-pointer ${selectedImage === product.img1 ? "border-[#1782C5] border" : ""}`} />
                                <img src={product.img2} alt="2" onClick={() => setSelectedImage(product.img2)}
                                    className={`w-[75px] h-[75px] md:w-[107px] md:h-[107px] bg-[#F7F7F7] object-contain p-1 rounded-lg cursor-pointer ${selectedImage === product.img2 ? "border-[#1782C5] border" : ""}`} />
                                {/* <img src={product.img3} alt="3" onClick={() => setSelectedImage(product.img3)}
                                    className={`w-[75px] h-[75px] md:w-[107px] md:h-[107px] bg-[#F7F7F7] object-cover p-1 rounded-lg cursor-pointer ${selectedImage === product.img3 ? "border-[#1782C5] border" : ""}`} /> */}
                            </div>
                        </div>

                        {/* Right Side Content */}
                        <div className="md:w-[60%]">
                            <div className="hidden md:block mb-4 text-center md:text-start">
                                <h2 className="m-2 py-2 px-4 md:m-0 border border-black inline-block rounded-full font-medium">
                                    {product.name}
                                </h2>
                                <h3 className="md:text-3xl text-[#1E1E1E] pt-4">
                                    {product.title.split(product.highlighted)[0]}
                                    <span className="text-[#1782C5]">{product.highlighted}</span>
                                    {product.title.split(product.highlighted)[1]}
                                </h3>
                            </div>

                            <div className="mb-4 flex justify-between items-center md:justify-start gap-3 text-center md:text-start">
                                <h3 className="text-md text-[#1782C5] p-1 px-4 border border-[#1782C5] rounded-full">{product.title1}</h3>
                                <h3 className="text-md text-[#1782C5] p-1 px-4 border border-[#1782C5] rounded-full">{product.title2}</h3>
                                <h3 className="text-md text-[#1782C5] p-1 px-4 border border-[#1782C5] rounded-full">{product.title3}</h3>
                            </div>

                            <div className="mb-4 text-justify">
                                <p className="mb-2 md:text-sm">{product.description1}</p>
                                <p className="md:text-sm">{product.description2}</p>
                            </div>

                            <div className="mb-4 flex flex-col md:flex-row justify-center md:justify-start md:items-start md:flex-wrap items-center gap-5 mt-8">
                                <a href="https://dashboard.skydo.com/pay/pyl_dd2QAQ" target="_blank" rel="noopener noreferrer">
                                    <button className="bg-[#1782C5] text-white w-[193px] px-4 py-2 rounded-full hover:bg-[#1e1e1e]">
                                        Buy Now
                                    </button>
                                </a>
                                <a href="https://api.whatsapp.com/send?phone=9899829299" target="_blank" rel="noopener noreferrer">
                                    <button className="bg-[#1E1E1E] text-white w-[193px] px-4 py-2 rounded-full hover:bg-[#1782C5]">
                                        Get a Quote
                                    </button>
                                </a>
                                <div className='px-4 py-2 flex justify-between items-center gap-4 rounded-full border border-[#7A7A7A] hover:text-[#1782C5] hover:border-[#1782C5]'>
                                    <a href="https://api.whatsapp.com/send?phone=9899829299" target="_blank" rel="noopener noreferrer">
                                        <button className='flex justify-center items-center gap-2'>
                                            <img src={whatsapp} alt="" /> Speak With Expert
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* About Section */}
            <div className='p-6 md:w-[90%] mx-auto'>
                <h1 className='text-center md:text-start text-xl md:text-2xl text-[#1782C5] p-1 px-2 py-3 rounded-lg bg-[#F5F5F5] font-medium'>
                    Meet AirBio's Dynamic Pass Box
                </h1>
                <p className='my-5 md:px-2 text-justify'>
                    AirBio Dynamic Pass Box is designed for high-performance material transfer in controlled environments. With two-stage HEPA filtration and intelligent interlock system, it ensures zero cross-contamination while maintaining cleanroom integrity.
                </p>
            </div>

            {/* Key Features */}
            <div className='p-6 md:w-[90%] mx-auto'>
                <h1 className='text-center md:text-start text-xl md:text-2xl text-[#1782C5] p-1 px-2 py-3 rounded-lg bg-[#F5F5F5] font-medium'>
                    Key Features of AirBio Dynamic Pass Box
                </h1>
                <div className='md:px-2'>
                    {keyFeatures.map((item, i) => (
                        <div key={i} className='flex items-start gap-3 mt-5'>
                            <img src={rightArrow} alt="Right Arrow" className="w-4 h-4 mt-1" />
                            <p><b>{item.bold}</b> {item.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Technical Specifications */}
            <div className='p-6 md:w-[90%] mx-auto'>
                <h1 className='text-center md:text-start text-xl md:text-2xl text-[#1782C5] p-1 px-2 py-3 rounded-lg bg-[#F5F5F5] font-medium'>Technical Specifications</h1>
                <div className='md:px-2 mt-5 overflow-x-auto'>
                    <table className='w-full border-collapse text-sm'>
                        <thead>
                            <tr className='bg-[#1782C5] text-white'>
                                <th className='text-left p-3 font-medium rounded-tl-lg'>Parameter</th>
                                <th className='text-left p-3 font-medium rounded-tr-lg'>Specification</th>
                            </tr>
                        </thead>
                        <tbody>
                            {technicalSpecs.map((row, i) => (
                                <tr key={i} className={i % 2 === 0 ? 'bg-[#F5F5F5]' : 'bg-white'}>
                                    <td className='p-3 font-medium text-[#1E1E1E]'>{row.parameter}</td>
                                    <td className='p-3 text-[#444444]'>{row.specification}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Comparison Table (Optional) */}
            <div className='p-6 md:w-[90%] mx-auto'>
                <h1 className='text-center md:text-start text-xl md:text-2xl text-[#1782C5] p-1 px-2 py-3 rounded-lg bg-[#F5F5F5] font-medium'>AirBio Dynamic Pass Box vs International Brands</h1>
                <div className='md:px-2 mt-5 overflow-x-auto'>
                    <table className='w-full border-collapse text-sm'>
                        <thead>
                            <tr className='bg-[#1782C5] text-white'>
                                <th className='text-left p-3 font-medium rounded-tl-lg'>Feature</th>
                                <th className='text-left p-3 font-medium'>AirBio</th>
                                <th className='text-left p-3 font-medium rounded-tr-lg'>International Brands</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { feature: 'HEPA Filtration', airbio: 'Yes (Two Stage)', international: 'Yes' },
                                { feature: 'Interlock System', airbio: 'Advanced with Alarm', international: 'Yes' },
                                { feature: 'HMI Control', airbio: 'Optional', international: 'Premium' },
                                { feature: 'Cost Efficiency', airbio: 'High Advantage', international: 'Premium Cost' },
                            ].map((row, i) => (
                                <tr key={i} className={i % 2 === 0 ? 'bg-[#F5F5F5]' : 'bg-white'}>
                                    <td className='p-3 font-medium text-[#1E1E1E]'>{row.feature}</td>
                                    <td className='p-3 text-[#444444]'>{row.airbio}</td>
                                    <td className='p-3 text-[#444444]'>{row.international}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className='py-10'>
                <Assistants />
            </div>
        </div>
    )
}

export default DynamicPassBox