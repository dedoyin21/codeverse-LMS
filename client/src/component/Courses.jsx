import React, { useState } from 'react';

export default function Courses() {
  const [showMore, setShowMore] = useState(false); 
  const [isFree, setIsFree] = useState(true);


  const freeCourses = [
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
      title: 'Project Management Essentials',
      description: 'Learn the fundamentals of project planning, task management, and team collaboration.',
      price: 'Free',
      duration: '8 weeks',
      image: '/project-2.jpg',
    },
    {
      title: 'Data Analysis Foundations',
      description: 'Understand the basics of data interpretation, data cleaning, and visualizations with Excel.',
      price: 'Free',
      duration: '8 weeks',
      image: '/data1.jpg',
    },
    {
      title: 'Introduction to Full Stack Development',
      description: 'A short introduction to both frontend and backend technologies for web development.',
      price: 'Free',
      duration: '8 weeks',
      image: '/fullstack.jpg',
    }
  ];


  const paidCourses = [
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
      title: 'Product Design',
      description: 'Learn the fundamentals of user experience, UI design, and prototyping using tools like Figma.',
      price: '$150',
      duration: '2 months',
      image: '/product.jpg',
    },
    {
      title: 'Project Management',
      description: 'Gain skills in managing and executing projects efficiently using Agile, Scrum, and other methodologies.',
      price: '$180',
      duration: '3 months',
      image: '/project-2.jpg',
    },
    {
      title: 'Data Analysis',
      description: 'Analyze and interpret complex data sets using Python, Excel, and SQL to make data-driven decisions.',
      price: '$220',
      duration: '3 months',
      image: '/data2.jpg',
    }
  ];

  const handleToggle = () => {
    setIsFree(!isFree); // Toggle between free and paid courses
  };

  const handleShowMore = () => {
    setShowMore(!showMore); // Toggle showing more courses
  };

  const coursesToShow = isFree ? freeCourses : paidCourses;

  return (
    <div className="flex flex-col gap-6 md:gap-12 justify-center items-center">
      {/* Header Section */}
      <div className="w-full flex flex-row justify-between bg-custom-red px-2 py-6 md:px-4 md:py-8">
        <h1 className="text-3xl md:text-5xl text-custom-cream">Trending Courses</h1>
        <div className="flex items-center gap-6">
          <button
            onClick={handleToggle}
            className={`py-2 px-4 md:px-6  rounded-lg transition text-xl md:text-2xl font-semibold duration-300 ${isFree ? 'bg-custom-cream text-black' : 'bg-transparent border border-custom-cream text-custom-cream'}`}
          >
            Free
          </button>
          <button
            onClick={handleToggle}
            className={`py-2 px-4 md:px-6  rounded-lg transition text-xl md:text-2xl font-semibold duration-300 ${!isFree ? 'bg-custom-cream text-black' : 'bg-transparent border border-custom-cream text-custom-cream'}`}
          >
            Paid
          </button>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 text-black">
        {coursesToShow.slice(0, showMore ? 6 : 3).map((course, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={course.image} alt={course.title} className="w-full h-40 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <p className="text-black mb-4">Duration: {course.duration}</p>
              <p className="text-lg font-semibold text-black">{course.price}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all mt-4">
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="flex justify-center mt-4">
        <button
          onClick={handleShowMore}
          className="bg-custom-cream text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-all"
        >
          {showMore ? 'Show Less ' : 'See More'}
        </button>
      </div>
    </div>
  );
}
