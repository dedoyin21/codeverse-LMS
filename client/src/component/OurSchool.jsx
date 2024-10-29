import React, { useState } from 'react';

const courses = [
  {
    title: 'Frontend Web',
    image: '/frontend.jpg',
    link: '/sign-in',
    updated: 'Updated 2 weeks ago',
    hours: '40 hours',
    level: 'Beginner',
    summary: 'Build stunning web interfaces with HTML, CSS, and React.',
    checklist: [
      'HTML, CSS, JavaScript basics',
      'Responsive Design',
      'React Components',
      'CSS Grid & Flexbox',
      'Basic animations'
    ]
  },
  {
    title: 'Backend',
    image: '/backend.jpg',
    link: '/sign-in',
    updated: 'Updated 1 month ago',
    hours: '50 hours',
    level: 'All Levels',
    summary: 'Master server-side programming and databases.',
    checklist: [
      'Node.js basics',
      'Working with databases',
      'RESTful APIs',
      'Authentication & Authorization',
      'Error handling'
    ]
  },
  {
    title: 'Full Stack',
    image: '/fullstack.jpg',
    link: '/sign-in',
    updated: 'Updated 3 weeks ago',
    hours: '90 hours',
    level: 'All Levels',
    summary: 'Become proficient in both frontend and backend development.',
    checklist: [
      'Frontend & Backend fundamentals',
      'Database integration',
      'Building full-stack applications',
      'Deployment strategies',
      'Version control with Git'
    ]
  },
  {
    title: 'Product Design',
    image: '/product.jpg',
    link: '/sign-in',
    updated: 'Updated 5 days ago',
    hours: '35 hours',
    level: 'Beginner to Intermediate',
    summary: 'Learn to design user-centric products with practical skills.',
    checklist: [
      'User research techniques',
      'Wireframing & prototyping',
      'UX/UI fundamentals',
      'Design systems & guidelines',
      'Figma basics'
    ]
  },
  {
    title: 'Project Management',
    image: '/project-1.jpg',
    link: '/sign-in',
    updated: 'Updated 2 months ago',
    hours: '45 hours',
    level: 'All Levels',
    summary: 'Gain the skills to manage projects from start to finish.',
    checklist: [
      'Project planning',
      'Risk management',
      'Agile & Scrum methodologies',
      'Resource allocation',
      'Team collaboration'
    ]
  },
  {
    title: 'Data Analysis',
    image: '/data1.jpg',
    link: '/sign-in',
    updated: 'Updated 1 week ago',
    hours: '60 hours',
    level: 'Intermediate',
    summary: 'Analyze data to uncover meaningful insights and trends.',
    checklist: [
      'Data wrangling & cleaning',
      'Statistical analysis',
      'Data visualization techniques',
      'Using Python & Excel for analysis',
      'Report generation'
    ]
  }
];


const OurSchool = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
    <div className='bg-custom-blue p-4 lg:p-6 items-center justify-center'>
        <h1 className='font-bold text-3xl lg:text-5xl justify-center text-center'>COURSES</h1>
    </div>
    <div className="bg-custom-cream flex flex-wrap justify-center gap-6 pt-10 py-10">
      {courses.map((course, index) => (
        <div 
          key={index} 
          className="relative w-64 h-64 cursor-pointer"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <a href={course.link} className="block w-full h-full">
            <div className="shadow-lg rounded-lg overflow-hidden relative">
              {/* Course Image */}
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover rounded-lg transform transition-transform duration-300 hover:scale-110"
              />
              
              {/* Course Title */}
              <h2 className="text-xl font-semibold text-custom-red text-center mt-2">
                {course.title}
              </h2>
            </div>
          </a>

          {/* Pop-up Card */}
          {hoveredIndex === index && (
            <div 
              className="absolute top-1/2 left-full ml-4 p-4 w-72 bg-white border border-gray-200 shadow-lg rounded-lg text-gray-800 z-50 transform -translate-y-1/2"
              style={{ minWidth: "280px" }}
            >
              {/* Title and Update Time */}
              <h3 className="text-lg font-semibold mb-1">{course.title}</h3>
              <p className="text-xs text-gray-500 mb-2">{course.updated}</p>

              {/* Lesson Hours and Level */}
              <p className="text-sm mb-1"><strong>Duration:</strong> {course.hours}</p>
              <p className="text-sm mb-1"><strong>Level:</strong> {course.level}</p>

              {/* Summary */}
              <p className="text-sm mb-3">{course.summary}</p>

              {/* Checklist */}
              <ul className="text-sm list-disc list-inside space-y-1 mb-4">
                {course.checklist.map((item, i) => (
                  <li key={i} className="text-gray-700">✓ {item}</li>
                ))}
              </ul>

              {/* Enroll Button */}
              <a 
                href={course.link} 
                className="block text-center px-3 py-2 bg-custom-red text-white rounded-full text-sm hover:bg-white hover:text-custom-red border border-custom-red transition-colors duration-300"
              >
                Enroll Now
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
    </>
  );
};

export default OurSchool;
