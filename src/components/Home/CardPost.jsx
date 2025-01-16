import React from 'react';
import card1 from '../../assets/images/Article_Image1.jpeg'
import card2 from '../../assets/images/Article_Image2.png'
import card3 from '../../assets/images/Article_Image3.png'
import img1 from '../../assets/images/iso.png'
import img2 from '../../assets/images/CDSO.png'
import img3 from '../../assets/images/medical.png'
import img4 from '../../assets/images/makeIn.png'

const CardPost = () => {
  const posts = [
    {
      id: 1,
      imgSrc: card1,
      title: 'Cleanroom-Grade Laminar Flow Cabinets',
      date: '2024-11-25',
      time: '3 min read',
      readMore: '#',
    },
    {
      id: 2,
      imgSrc: card2,
      title: 'Efficient and Safe Ductless Fume Hoods',
      date: '2024-11-24',
      time: '3 min read',
      readMore: '#',
    },
    {
      id: 3,
      imgSrc: card3,
      title: 'Advanced Class II Biosafety Cabinets',
      date: '2024-11-23',
      time: '3 min read',
      readMore: '#',
    },
    // {
    //   id: 4,
    //   imgSrc: card4,
    //   title: 'Customizable Solutions for Laboratory Safety',
    //   date: '2024-11-22',
    //   time: '3 min read',
    //   readMore: '#',
    // },
  ];

  return (
    <>
    <div>
        <div className=' md:flex justify-between items-center p-5 md:p-10 mt-8 border-blue-600'>
          <h1 className='text-2xl text-center font-semibold md:w-[373px]  md:text-4xl md:text-start my-2 '>Certifications</h1>
          <p className='text-[15px] text-center  py-2 md:py-0 md:w-[553px] text-[#7A7A7A] '>Proudly serving leading laboratories, hospitals, and research facilities.</p>
        </div>
        <div className="p-4  border-red-600">
          {/* Image Row */}
          <div className="w-auto  grid grid-cols-2 md:grid-cols-4 gap-4  border-black">
            {/* Image 1 */}
            <div className="flex flex-col items-center mb-5 md:mb-0">
              <img src={img1} alt="Image 1" className="w-auto h-[72px] md:h-[68px] md:w-auto" />
              {/* <hr className="w-full md:w-1/4 border-t-2 mt-2" /> */}
            </div>

            {/* Image 2 */}
            <div className="flex flex-col items-center">
              <img src={img2} alt="Image 2" className="w-auto h-[72px] md:w-auto md:h-[68px]" />
              {/* <hr className="w-full md:w-1/4 border-t-2 mt-2" /> */}
            </div>

            {/* Image 3 */}
            <div className="flex flex-col items-center mb-5 md:mb-0">
              <img src={img3} alt="Image 3" className="w-auto h-[72px] md:w-auto md:h-[68px]" />
              {/* <hr className="w-full md:w-1/4 border-t-2 mt-2" /> */}
            </div>

            {/* Image 4 */}
            <div className="flex flex-col items-center justify-center">
              <img src={img4} alt="Image 4" className="w-auto h-[72px] md:h-[68px] md:w-auto" />
              {/* <hr className="w-full md:w-1/4 border-t-2 mt-2" /> */}
            </div>
          </div>
        </div>



      </div>
    <div className="py-8 px-4">

      <div className="max-w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
          >
            {/* Image */}
            <div className="mb-4">
              <img
                src={post.imgSrc}
                alt={post.title}
                className="w-full h-[195px] object-cover rounded-md"
              />
            </div>

            {/* Title */}
            <div className="mb-2">
              <h2 className=" font-semibold">{post.title}</h2>
            </div>

            {/* Info Section */}
            <div className="text-sm text-gray-600 space-y-1">
              <p>
                <a href={post.readMore} className="text-blue-500 hover:underline">
                  Read More
                </a>
              </p>
              <div className='flex justify-between'>
                <p>{post.date}</p>
                <p>{post.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default CardPost;
