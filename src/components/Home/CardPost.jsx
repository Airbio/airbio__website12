import React from 'react';
import card1 from '../../assets/images/card1.jpeg'

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
      imgSrc: card1,
      title: 'Cleanroom-Grade Laminar Flow Cabinets',
      date: '2024-11-24',
      time: '3 min read',
      readMore: '#',
    },
    {
      id: 3,
      imgSrc: card1,
      title: 'Cleanroom-Grade Laminar Flow Cabinets',
      date: '2024-11-23',
      time: '3 min read',
      readMore: '#',
    },
    {
      id: 4,
      imgSrc: card1,
      title: 'Cleanroom-Grade Laminar Flow Cabinets',
      date: '2024-11-22',
      time: '3 min read',
      readMore: '#',
    },
  ];

  return (
    <div className="bg-gray-100 py-8 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                className="w-full h-40 object-cover rounded-md"
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
  );
};

export default CardPost;
