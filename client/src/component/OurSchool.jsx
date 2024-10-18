import React from 'react';

const courses = [
  { title: 'Frontend Web', image: '/frontend.jpg', link: '/sign-in' },
  { title: 'Backend', image: '/backend.jpg', link: '/sign-in' },
  { title: 'Full Stack', image: '/fullstack.jpg', link: '/sign-in' },
  { title: 'Product Design', image: '/product.jpg', link: '/sign-in' },
  { title: 'Project Management', image: '/project-1.jpg', link: '/sign-in' },
  { title: 'Data Analysis', image: '/data1.jpg', link: '/sign-in' }
];

const OurSchool = () => {
  return (
    <div className="bg-custom-cream flex flex-wrap justify-center gap-6 pt-10 py-10">
      {courses.map((course, index) => (
        <div key={index} className="relative w-64 h-64 cursor-pointer">
          <a href={course.link} className="block w-full h-full">
            <div className="shadow-lg rounded-lg overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover rounded-lg transform transition-transform duration-300 hover:scale-110"
              />
              <h2 className="text-xl font-semibold text-custom-red text-center mt-2">
                {course.title}
              </h2>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default OurSchool;
