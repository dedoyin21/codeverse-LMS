import React from 'react';
import '../Index.css';

const courses = [
  { title: 'Frontend Web', imageFront: '/frontend.jpg', imageBack: '/learn-frontend.jpg', link: '/frontend' },
  { title: 'Backend', imageFront: '/backend.jpg', imageBack: '/learn-backend.jpg', link: '/backend' },
  { title: 'Full Stack', imageFront: '/fullstack.jpg', imageBack: '/learn-fullstack.jpg', link: '/fullstack' },
  { title: 'Product Design', imageFront: '/product.jpg', imageBack: '/learn-product-design.jpg', link: '/product-design' },
  { title: 'Project Management', imageFront: '/project-management.jpg', imageBack: '/learn-project-management.jpg', link: '/project-management' },
  { title: 'Data Analysis', imageFront: '/data.jpg', imageBack: '/data-2.jpg', link: '/data-analysis' }
];

const OurSchool = () => {
  return (
    <div className="bg-custom-blue flex flex-wrap justify-center gap-6 mt-10 py-10">
      {courses.map((course, index) => (
        <div key={index} className="relative w-64 h-64 perspective">
          <div className="absolute inset-0 transition-transform transform hover:rotate-y-180 duration-700 preserve-3d">
            {/* Front of Card */}
            <div className="absolute w-full h-full bg-white shadow-lg rounded-lg backface-hidden flex items-center justify-center">
              <img
                src={course.imageFront}
                alt={course.title}
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
              <h2 className="relative z-10 text-xl font-semibold text-black">
                {course.title}
              </h2>
            </div>
            {/* Back of Card */}
            <div className="absolute w-full h-full bg-white shadow-lg rounded-lg rotate-y-180 backface-hidden flex items-center justify-center">
              <img
                src={course.imageBack}
                alt="Learn More"
                className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-60"
              />
              <a
                href={course.link}
                className="relative z-10 text-lg font-bold text-custom-green underline hover:text-custom-orange"
              >
                Learn More &#x2192;
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurSchool;
