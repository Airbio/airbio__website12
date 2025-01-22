import React from 'react'
import Header from '../Home/Header'
import about from '../../assets/images/about.png'
import card1 from '../../assets/images/card1.png'
import card2 from '../../assets/images/card2.png'
import card3 from '../../assets/images/card3.png'
import customer from '../../assets/images/customer.svg'
import truck from '../../assets/images/delivered.svg'
import industry from '../../assets/images/industry.svg'
import booking from '../../assets/images/booking.svg'
import TeamData from '../Home/TeamData';

const cards = [
  {
    id: 1,
    img: card1,
    name: "Exclusive Range",
    description: "Immerse yourself in our meticulously curated selection, backed by over 20 years of industry experience..",
  },
  {
    id: 2,
    img: card2,
    name: "Exclusive Range",
    description: "Immerse yourself in our meticulously curated selection, backed by over 20 years of industry experience..",
  },
  {
    id: 3,
    img: card3,
    name: "Exclusive Range",
    description: "Immerse yourself in our meticulously curated selection, backed by over 20 years of industry experience..",
  },
];

const About = () => {
  return (
    <div>
      <Header />
      <hr className="w-[95%] h-1 mt-6 border-t-1 border-[#C3C3C3] mx-auto" />

      <div className='p-5'>
        <div className=' text-center md:max-w-[85%] mx-auto'>
          <h1 className='text-3xl font-medium'>Get to Know Us</h1>
          <p className='mt-1 text-[#7A7A7A]'>Driving innovation and excellence to craft products that transform ideas into reality.</p>
          <img src={about} alt="" className='my-8 lg:w-full h-auto' />
          <p className='text-justify px-2'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>

        <div className='md:max-w-[80%] mx-auto flex flex-col md:flex-row justify-center items-center gap-10 my-10 py-5'>
          <div className=' flex flex-col justify-center items-center mx-5'>
            <img src={customer} alt="" className='mb-2'/>
            <h1 className='font-bold text-2xl mt-2 mb-1 tracking-wide'>10,000+</h1>
            <p className='w-[150px] text-center text-[#1E1E1E] tracking-wider'>Happy Customers <br />& Couting</p>
          </div>

          <div className=' flex flex-col justify-center items-center mx-5'>
            <img src={truck} alt="" className='mb-2'/>
            <h1 className='font-bold text-2xl mt-2 mb-1 tracking-wide'>9,000+</h1>
            <p className='w-[150px] text-center text-[#1E1E1E] tracking-wider'>Pin code <br />delivered</p>
          </div>

          <div className=' flex flex-col justify-center items-center md:h-[156px] w-auto mx-5'>
            <img src={industry} alt="" className='mb-2' />
            <h1 className='font-bold text-2xl mt-2 mb-1 tracking-wide'>30+</h1>
            <p className='w-[150px] text-center text-[#1E1E1E] tracking-wider'>Industries <br />served</p>
          </div>

          <div className=' flex flex-col justify-center items-center mx-5'>
            <img src={booking} alt="" className='mb-2'/>
            <h1 className='font-bold text-2xl mt-2 mb-1 tracking-wide'>15,000+</h1>
            <p className='w-[150px] text-center text-[#1E1E1E] tracking-wider'>Order <br />placed</p>
          </div>
        </div>

        <div className=" my-10 md:py-10">
          <div className="flex md:max-w-[85%] mx-auto overflow-x-auto md:grid md:grid-cols-3 gap-4 md:gap-8 scrollbar-hide ">
            {cards.map((card) => (
              <div
                key={card.id}
                className="flex-shrink-0 w-[90%] md:w-auto bg-white pb-5 md:pb-0 border-green-500 rounded-lg scrollbar scrollbar-thumb-customBlue scrollbar-track-gray-200 scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
              >
                <img
                  src={card.img}
                  alt={card.name}
                  className="w-auto h-[297px] md:w-full object-cover rounded-xl"
                />
                <h3 className="mt-2 text-xl font-medium">{card.name}</h3>
                <p className="mt-1 mb-2 text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className=' my-10 pt-5'>
          <div className='text-center md:text-start md:max-w-[85%] mx-auto md:flex justify-between items-center pt-5 border-blue-600'>
            <h1 className='text-3xl font-medium md:w-[373px]  md:text-4xl md:text-left my-2 '>Our
              Expert Team</h1>
            <p className='text-[15px] py-2 md:py-0 md:w-[283px] text-[#7A7A7A] '>Driving innovation and excellence to craft products that transform ideas into reality.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 md:max-w-[85%] h-auto my-10 mx-auto gap-4">
            {TeamData.map((card) => (
              <div
                key={card.id}
                className="bg-white border border-[#CDCDCD] border-g md:mb-5 rounded-lg "
              >
                <div className=' border-red-600 flex items-end h-[160px] md:h-[210px]'>
                  <img
                    src={card.imgSrc}
                    alt={card.name}
                    className="w-full h-auto rounded-t-lg"
                  />
                </div>

                <div className="pt-2 bg-[#f8f8f8] rounded-b-lg">
                  <h3 className="text-lg text-center font-medium">{card.name}</h3>
                  <p className="mt-1 text-center pb-2 text-[#1782C5]">{card.role}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

export default About
