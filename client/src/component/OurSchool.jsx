import React from 'react';

const courses = [
  { title: 'Frontend Web Development', svg: '/frontend.svg', link: '/coursepage', bgColor: 'bg-custom-red' },
  { title: 'Backend Web Development', svg: '/node.svg', link: '/sign-in', bgColor: 'bg-black' },
  { title: 'Full Stack Web Development', svg: '/api.svg', link: '/sign-in', bgColor: 'bg-custom-blue' },
  { title: 'Product Design', svg: '/ui.svg', link: '/sign-in', bgColor: 'bg-custom-yellow' },
  { title: 'Data Analysis', svg: '/server.svg', link: '/sign-in', bgColor: 'bg-custom-purple' }
];

const OurSchool = () => {
  return (
    <>
      <div className='px-12 text-black'>
        <h1 className='break-words text-2xl lg:text-5xl font-cabinetGrotesk font-bold py-6'>Get Top Essential Tech Courses</h1>
      </div>
      <div className="bg-white flex flex-col md:flex-row gap-6 px-12 py-10 justify-center items-center">
        {/* Course Cards */}
        {courses.map((course, index) => (
          <div key={index} className="relative w-52 h-52 cursor-pointer ">
            <a href={course.link} className="block w-full h-full">
              <div className={`shadow-lg rounded-2xl flex flex-col items-left p-4 ${course.bgColor} h-full`}>
                {/* SVG Icon */}
                <img src={course.svg} alt={`${course.title} icon`} className="w-10 h-10 mb-2 md:w-12 md:h-12" />
                
                {/* Course Title with Text Wrapping */}
                <h2 className="w-[38] h-20 text-xl md:text-2xl font-semibold text-left text-white leading-tight break-words">
                  {course.title}
                </h2>
                
                {/* Colored Line */}
                <div className="h-1 w-full mt-8 bg-white"></div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default OurSchool;
