import React from 'react';

const CourseCard = () => {
  return (
    <div className="container mx-auto p-4 bg-gray-900 text-white">
      {/* Category Navigation */}
      <div className="categories flex gap-4 mb-6">
        <button className="category-btn bg-gray-800 text-white px-4 py-2 rounded-md">Mobile App Development</button>
        <button className="category-btn bg-gray-800 text-white px-4 py-2 rounded-md">Electronics</button>
        <button className="category-btn bg-green-600 text-white px-4 py-2 rounded-md">Design</button>
        <button className="category-btn bg-gray-800 text-white px-4 py-2 rounded-md">Programming</button>
        <button className="category-btn bg-gray-800 text-white px-4 py-2 rounded-md">Web Development</button>
      </div>

      {/* Course Card */}
      <div className="course-card bg-gray-800 rounded-lg p-4 max-w-sm mx-auto">
        <div className="course-image relative">
          <img 
            src="https://example.com/course-image.jpg" 
            alt="Course Thumbnail" 
            className="w-full h-32 object-cover rounded-lg"
          />
          <span className="badge absolute top-2 left-2 bg-gray-900 text-white text-sm px-2 py-1 rounded-full">Design</span>
        </div>

        <div className="course-info mt-4">
          <h2 className="text-xl font-semibold">How to Build a Plane in X-Plane with PlaneMaker</h2>
          <p className="text-gray-400">By: UncertifiedPilot</p>
          
          <div className="course-actions mt-4 flex justify-between items-center">
            <button className="bg-gray-700 text-white px-4 py-2 rounded-md">View Info</button>
            <div className="flex items-center text-gray-400">
              <span className="mr-2">FREE</span>
              <span>25 Chapters</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
