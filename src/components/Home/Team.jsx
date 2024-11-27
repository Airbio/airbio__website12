import React from 'react';
import img from '../../assets/images/team.jpg'
import svg from '../../assets/images/teamSvg.svg'

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
      <div className='text-center md:text-start md:flex justify-between items-center p-5  mt-8 border-blue-600'>
        <h1 className='text-2xl md:w-[373px]  md:text-4xl md:text-left my-2 '>Our <br />
        Expert Team</h1>
        <p className='text-[15px] py-2 md:py-0 md:w-[553px] text-[#7A7A7A] '>Meet the passionate team behind Airbio—experts in biosafety, engineering, and innovation—driven by a commitment to delivering cutting-edge air and safety solutions tailored to your needs.</p>
      </div>
      <div className="bg-gray-100 py-8 px-4">
        <div className="md:w-[95%] md:h-auto mx-auto grid gap-3 md:gap-5 grid-cols-3 lg:grid-cols-5 ">
          {team.map((member) => (
            <div
              key={member.id}
              className="bg-white relative shadow-md rounded-lg mb-8 md:mb-0 p-2 md:py-4 flex flex-col items-center text-center "
            >
              <img className="self-start md:w-[29px] md:h-[18px]" src={member.icon} alt="" />

              <img
                src={member.imgSrc}
                alt={`${member.name} Icon`}
                className="w-[113px] h-[109px] md:h-[211px] md:w-auto"
              />

              {/* Name and Role */}
              <div className="absolute bottom-[-20px] min-w-[90%] bg-white flex flex-col items-center rounded-lg border">
                <div className="text-lg text-[12px]">{member.name}</div>
                <div className="text-gray-500 text-[10px]">{member.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>




  );
};

export default Team;
