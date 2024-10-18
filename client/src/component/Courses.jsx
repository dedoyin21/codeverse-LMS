import React, { useState } from 'react';

export default function Courses() {
  const [showMore, setShowMore] = useState(false);

  // Combining free and paid courses
  const courses = [
    {
      title: 'Introduction to Backend Development',
      description: 'Learn the basics of server-side development with an introduction to Node.js and Express.',
      price: 'Free',
      duration: '8 weeks',
      image: '/backend.jpg',
    },
    {
      title: 'Frontend Basics with HTML & CSS',
      description: 'Get started with building simple websites using HTML and CSS. Perfect for beginners.',
      price: 'Free',
      duration: '8 weeks',
      image: '/frontend.jpg',
    },
    {
      title: 'Product Design Fundamentals',
      description: 'An introduction to UI/UX principles and basic wireframing techniques using Figma.',
      price: 'Free',
      duration: '8 weeks',
      image: '/product.jpg',
    },
    {
      title: 'Backend Web Development',
      description: 'Master the server-side of web development, databases, and APIs with Node.js, Express, and MongoDB.',
      price: '$250',
      duration: '4 months',
      image: '/backend.jpg',
    },
    {
      title: 'Frontend Web Development',
      description: 'Learn to build stunning websites and web applications using HTML, CSS, JavaScript, and React.',
      price: '$200',
      duration: '3 months',
      image: '/frontend.jpg',
    },
    {
      title: 'Full Stack Web Development',
      description: 'Become a full stack developer by mastering both frontend and backend technologies.',
      price: '$400',
      duration: '6 months',
      image: '/fullstack.jpg',
    },
    {
      title: 'Project Management Essentials',
      description: 'Learn the fundamentals of project planning, task management, and team collaboration.',
      price: 'Free',
      duration: '8 weeks',
      image: '/project-2.jpg',
    },
    {
      title: 'Product Design',
      description: 'Learn the fundamentals of user experience, UI design, and prototyping using tools like Figma.',
      price: '$150',
      duration: '2 months',
      image: '/product.jpg',
    },
    {
      title: 'Data Analysis Foundations',
      description: 'Understand the basics of data interpretation, data cleaning, and visualizations with Excel.',
      price: 'Free',
      duration: '8 weeks',
      image: '/data1.jpg',
    },
    {
      title: 'Data Analysis',
      description: 'Analyze and interpret complex data sets using Python, Excel, and SQL to make data-driven decisions.',
      price: '$220',
      duration: '3 months',
      image: '/data2.jpg',
    }
  ];

  const handleShowMore = () => {
    setShowMore(!showMore); // Toggle showing more courses
  };

  return (
    <div className="bg-custom-blue flex flex-col gap-6 md:gap-12 justify-center items-center">
      {/* Header Section */}
      <div className="w-full flex flex-row justify-between bg-custom-purple px-2 py-6 md:px-4 md:py-8">
        <h1 className="text-3xl font-cabinetGrotesk font-bold md:text-5xl text-custom-cream">Trending Courses</h1>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 text-black">
        {courses.slice(0, showMore ? courses.length : 6).map((course, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={course.image} alt={course.title} className="w-full h-40 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <p className="text-black mb-4">Duration: {course.duration}</p>
              {/* Price Section with distinct styles for Free and Paid Courses */}
              <p
                className={`text-lg font-semibold  py-1 px-2 rounded-xl ${
                  course.price === 'Free'
                    ? 'bg-green-200 border-[0.5px] w-16 border-green-200 text-green-800' // Free course with reduced border width
                    : 'bg-blue-200 border-[0.5px] w-40 border-blue-400 text-blue-800 flex items-center' // Paid course with reduced border width
                }`}
              >
                {course.price === 'Free' ? (
                  course.price
                ) : (
                  <>
                    <span className="mr-1">{course.price}</span>👑
                    <span className="ml-1 text-yellow-500">Premium</span>
                  </>
                )}
              </p>

              <button className="relative group px-4 py-2 hover:px-4 hover:py-2 transition-all duration-300 mt-4">
                {/* Circle behind the text in the default state */}
                <div className="absolute inset-0 flex items-center justify-left">
                  <div className="w-12 h-12 bg-custom-red rounded-full group-hover:bg-transparent transition-all duration-300"></div>
                </div>
                {/* Button text */}
                <span className="relative z-10 text-custom-blue group-hover:text-custom-red transition-all duration-300">Enroll Now</span>
  
                {/* Border appears on hover */}
                <div className="absolute inset-0 border-2 border-custom-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="flex justify-center mt-4 mb-6">
        <button
          onClick={handleShowMore}
          className="bg-custom-cream text-black px-6 py-2 rounded-lg font-semibold hover:bg-custom-red transition-all"
        >
          {showMore ? 'Show Less' : 'See More'}
        </button>
      </div>
    </div>
  );
}
