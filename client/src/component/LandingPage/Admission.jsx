import React from 'react';

const Admission = () => {
  return (
    <div className='bg-white md:px-48 md:py-20'>
      <h1 className='text-custom-blue ml-8 py-10 md:ml-14 md:mb-5 font-cabinetGrotesk text-2xl md:text-4xl font-bold'>
        Enrolment Requirement
      </h1>
      <div className='bg-black flex flex-col justify-center text-white gap-2 p-7 md:gap-4 md:py-10 md:pl-20 md:pr-6'>
        <div>
          <h2 className='font-medium text-lg md:text-xl font-sans'>
            1. Commitment to Daily Self-Study:
          </h2>
          <p className='font-sans font-light text-sm py-2'>
            Demonstrate a burning passion for product design through a portfolio or project showcasing your creative problem-solving and design thinking skills.
          </p>
        </div>
        <div>
          <h2 className='font-medium text-lg md:text-xl font-sans'>
            2. Access to Personal Computer and Reliable Internet:
          </h2>
          <p className='font-sans font-light text-sm py-2'>
            Ownership of a personal computer and consistent internet access to participate in online classes, collaborate on projects, and access online learning resources.
          </p>
        </div>
        <div>
          <h2 className='font-medium text-lg md:text-xl font-sans'>
            3. Beyond the Classroom:
          </h2>
          <p className='font-sans font-light text-sm py-2'>
            Commit to dedicating additional daily hours beyond scheduled classes to independent learning, experimentation, and personal skill development.
          </p>
        </div>
        <div>
          <h2 className='font-medium text-lg md:text-xl font-sans'>
            4. Hunger for Feedback:
          </h2>
          <p className='font-sans font-light text-sm py-2'>
            Embrace a growth mindset and actively seek feedback on your work from instructors, peers, and potential users.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Admission;
