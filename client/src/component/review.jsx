import React, { useState, useEffect } from 'react';

const reviews = [
  {
    name: "John Doe",
    title: "Frontend Developer",
    image: "/student1.jpg",
    review: "This course was life-changing. I learned so much about frontend development and built real projects. I can't recommend it enough!"
  },
  {
    name: "Jane Smith",
    title: "Backend Engineer",
    image: "/student2.jpg",
    review: "The backend course was well-structured, and the instructors were incredibly knowledgeable. The hands-on practice was invaluable."
  },
  {
    name: "Sam Johnson",
    title: "Full Stack Developer",
    image: "/student3.jpg",
    review: "Amazing learning experience! I now feel confident working with both frontend and backend technologies."
  },
  {
    name: "Alice Williams",
    title: "UI/UX Designer",
    image: "/student4.jpg",
    review: "The Product Design course helped me land my first job as a UI/UX designer. Great content and practical lessons!"
  }
];

function ReviewSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const interval = setInterval(nextReview, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-custom-cream py-8">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl text-custom-red font-bold mb-8">Student Reviews</h2>

        <div className="relative w-full md:w-3/4">
          <div className="flex items-center justify-between">
            {/* Render arrows only on larger screens */}
            <div className="hidden md:flex">
              <button
                onClick={prevReview}
                className="text-custom-red text-3xl font-bold hover:text-custom-orange transition duration-300"
              >
                &#8249;
              </button>
            </div>

            <div className="w-full flex flex-col items-center text-center bg-white p-6 shadow-lg rounded-xl">
              <img
                src={reviews[currentIndex].image}
                alt={reviews[currentIndex].name}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">{reviews[currentIndex].name}</h3>
              <p className="text-gray-600 text-sm mb-2">{reviews[currentIndex].title}</p>
              <p className="text-gray-700 italic">"{reviews[currentIndex].review}"</p>
            </div>

            <div className="hidden md:flex">
              <button
                onClick={nextReview}
                className="text-custom-red text-3xl font-bold hover:text-custom-orange transition duration-300"
              >
                &#8250;
              </button>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            {reviews.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 mx-1 rounded-full ${index === currentIndex ? 'bg-custom-red' : 'bg-gray-300'}`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewSlider;
