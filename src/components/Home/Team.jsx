import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import TeamData from './TeamData';

const Team = () => {


  return (
    <>
      <div className='text-center md:text-start md:flex justify-between items-center p-5 md:p-10  mt-8 border-blue-600'>
        <h1 className='text-2xl font-semibold md:w-[373px]  md:text-4xl md:text-left my-2 '>Our
          Expert Team</h1>
        <p className='text-[15px] py-2 md:py-0 md:w-[553px] text-[#7A7A7A] '>Meet the passionate team behind Airbio—experts in biosafety, engineering, and innovation—driven by a commitment to delivering cutting-edge air and safety solutions tailored to your needs.</p>
      </div>


      <div className="relative py-8 px-4 mb-10 border">
        {/* Navigation Buttons */}
        {/* <div className="swiper-button-prev custom-swiper-button absolute left-[-50px] top-[50%] bottom-0 translate-y-[-50%] z-10 w-10 h-10  rounded-full flex items-center justify-center cursor-pointer">
         
        </div>
        <div className="swiper-button-next custom-swiper-button absolute right-[-50px] top-[50%] translate-y-[-50%] z-10 w-10 h-10  rounded-full flex items-center justify-center cursor-pointer">
         
        </div> */}

        <Swiper 
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={2}
          breakpoints={{
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          loop={true}
          autoplay={{ delay: 3000 }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{ clickable: true }}
          className="md:w-[95%] md:h-auto mx-auto"
        >
          {TeamData.map((member) => (
            <SwiperSlide key={member.id}>
              <div className="bg-white relative shadow-md rounded-lg mb-20 p-2 md:py-4 flex flex-col items-center text-center border border-[#CDCDCD]">
                <img
                  className="self-start md:w-[29px] md:h-[18px]"
                  src={member.icon}
                  alt=""
                />
                <img
                  src={member.imgSrc}
                  alt={`${member.name} Icon`}
                  className="w-auto h-[150px] md:h-[211px] md:w-auto"
                />

                {/* Name and Role */}
                <div className="absolute p-1 top-full translate-y-[-50%] min-w-[90%] md:mb-5 bg-white flex flex-col items-center rounded-lg border border-[#CDCDCD]">
                  <div className="px-2">{member.name}</div>
                  <div className="text-gray-500 text-[10px] md:text-base">
                    {member.role}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>

  );
};

export default Team;
