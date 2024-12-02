import React from 'react';
import img from '../../assets/images/team.jpg'
import svg from '../../assets/images/teamSvg.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay, Pagination } from 'swiper/modules';

const Team = () => {
  const team = [
    {
      id: 1,
      icon: svg,
      imgSrc: img, // Replace with your SVG icon path
      name: 'John Doe',
      role: 'Frontend Developer',
    },
    {
      id: 2,
      icon: svg,
      imgSrc: img,
      name: 'Jane Smith',
      role: 'Backend Developer',
    },
    {
      id: 3,
      icon: svg,
      imgSrc: img,
      name: 'Michael Johnson',
      role: 'UI/UX Designer',
    },
    {
      id: 2,
      icon: svg,
      imgSrc: img,
      name: 'Jane Smith',
      role: 'Backend Developer',
    },
    {
      id: 3,
      icon: svg,
      imgSrc: img,
      name: 'Michael Johnson',
      role: 'UI/UX Designer',
    },
  ];

  return (
    <>
      <div className='text-center md:text-start md:flex justify-between items-center p-5 md:p-10  mt-8 border-blue-600'>
        <h1 className='text-2xl font-semibold md:w-[373px]  md:text-4xl md:text-left my-2 '>Our
          Expert Team</h1>
        <p className='text-[15px] py-2 md:py-0 md:w-[553px] text-[#7A7A7A] '>Meet the passionate team behind Airbio—experts in biosafety, engineering, and innovation—driven by a commitment to delivering cutting-edge air and safety solutions tailored to your needs.</p>
      </div>
      <div className="py-8 px-4  mb-10">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={2}
          breakpoints={{
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          loop={true}
          autoplay={{ delay: 3000 }}
          // navigation
          // pagination={{ clickable: true }}
          className="md:w-[95%] md:h-auto mx-auto"
        >
          {team.map((member) => (
            <SwiperSlide key={member.id}>
              <div className="bg-white relative shadow-md rounded-lg mb-8 md:mb-0 p-2 md:py-4 flex flex-col items-center text-center border border-[#CDCDCD]">
                <img
                  className="self-start md:w-[29px] md:h-[18px]"
                  src={member.icon}
                  alt=""
                />
                <img
                  src={member.imgSrc}
                  alt={`${member.name} Icon`}
                  className="w-[113px] h-[109px] md:h-[211px] md:w-auto"
                />

                {/* Name and Role */}
                <div className="absolute bottom-[-20px] min-w-[90%] md:mb-5 bg-white flex flex-col items-center rounded-lg border">
                  <div className="text-lg text-[12px]">{member.name}</div>
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
