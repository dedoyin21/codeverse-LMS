

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
     {/*  <div className=" bg-custom-cream flex flex-col justify-center items-center text-center gap-3 pb-2 md:pb-6">
        <div>
          <h1 className="text-xl font-bold">The Learning Platform</h1>
          <p className="text-lg">which helps you to</p>
        </div>
        <div className="flex flex-row justify-center items-center gap-6">
            
          <div className="flex flex-col items-center justify-center bg-custom-red rounded-full w-20 h-20">
            <img src="/Engage.png" alt="engage" className="w-8 h-8" />
            <p className="text-xs font-medium">Engage</p>
          </div>

          <div className="flex flex-col items-center justify-center bg-custom-red rounded-full w-20 h-20">
            <img src="/Training.png" alt="train" className="w-8 h-8" />
            <p className="text-xs font-medium">Teach</p>
          </div>

          <div className="flex flex-col items-center justify-center bg-custom-red rounded-full w-20 h-20">
            <img src="/Vector.png" alt="vector" className="w-8 h-8" />
            <p className="text-xs font-medium">Access</p>
          </div>

          <div className="flex flex-col items-center justify-center bg-custom-red rounded-full w-20 h-20">
            <img src="/Increase.png" alt="increase" className="w-8 h-8" />
            <p className="text-xs font-medium">Analyse</p>
          </div>

          <div className="flex flex-col items-center justify-center bg-custom-red rounded-full w-20 h-20">
            <img src="/Laptop Play Video.png" alt="explore" className="w-8 h-8" />
            <p className="text-xs font-medium">Explore</p>
          </div>
        </div>
      </div> */}

      <div>
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
      </div>
      
    </>
  );
};

export default OurSchool;
