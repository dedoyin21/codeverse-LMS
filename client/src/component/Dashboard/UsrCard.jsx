/* import React from 'react';
import { FaClock, FaCheckCircle, FaStar } from 'react-icons/fa';

const UserProfile = () => {
  return (
    <div className="profile-container dark:bg-dark-gray text-white mx-auto">
         <h2 className="text-2xl font-bold text-custom-red dark:text-dark-text">Welcome back Ades!</h2>
         <p className="dark:text-gray-400 text-black pb-6">Take a look at your learning progress for Today Oct 17, 2024</p>
      
         <div className="container dark:bg-gray-700 bg-custom-red p-8 mb-5 text-white rounded-3xl md:w-full mx-auto">
            <div className="profile-header flex items-center gap-4 mb-4 rounded-3xl p-6 w-full dark:bg-gray-700 bg-custom-cream">
                <div className="profile-avatar dark:bg-purple-500 bg-custom-red text-center flex items-center justify-center rounded-full w-20 h-20 text-4xl font-bold">
                    AA
                </div>  
            <div>
                <h1 className="text-2xl font-semibold text-custom-red dark:text-dark-text">Ades Adediran</h1>
                <div className="flex items-center mt-2">
                    <div className="xp-bar bg-gray-600 h-2 rounded-full w-32 mr-2">
                    <div className="xp-progress bg-green-500 h-2 rounded-full" style={{ width: '33%' }}></div>
                    </div>
                    <span className='dark:text-gray-400 text-custom-red'>0 XP</span>
                    <span className="dark:text-gray-400 text-custom-red mx-2">/</span>
                    <span className='dark:text-gray-400 text-custom-red'>100 XP</span>
                </div>
                </div>
            </div>

            <div className="course-status flex justify-between mb-4 gap-4">
                <div className="status-box dark:bg-gray-800 bg-custom-cream p-4 rounded-md flex flex-col items-center w-1/3">
                    <FaClock className="text-2xl mb-1 bg-custom-red" />
                    <p className="font-medium text-custom-red dark:text-dark-text">In Progress</p>
                    <p className="text-sm dark:text-gray-400">0 Courses</p>
                </div>
                <div className="status-box dark:bg-gray-800 bg-custom-cream p-4 rounded-md flex flex-col items-center w-1/3">
                    <FaCheckCircle className="text-2xl mb-1 bg-custom-red" />
                    <p className="font-medium text-custom-red dark:text-dark-text">Completed</p>
                    <p className="text-sm dark:text-gray-400 text-custom-red">0 Courses</p>
                </div>
                <div className="status-box dark:bg-gray-800 bg-custom-cream p-4 rounded-md flex flex-col items-center w-1/3">
                    <FaStar className="text-2xl mb-1 bg-custom-red" />
                    <p className="font-medium text-custom-red dark:text-dark-text">Points</p>
                    <p className="text-sm text-custom-red dark:text-gray-400">0 XP</p>
                </div>
            </div>
        </div>

      <div className="no-courses dark:bg-gray-800 bg-custom-red p-6 rounded-md text-center">
        <p>No courses found</p>
      </div>
    </div>
  );
};

export default UserProfile;
 */


import React from 'react';
import { FaClock, FaCheckCircle, FaStar } from 'react-icons/fa';

const UserProfile = () => {
  return (
    <div className="profile-container dark:bg-dark-gray text-white max-w-full mx-auto sm:p-8">
      <h2 className="text-xl sm:text-2xl font-bold text-custom-red dark:text-dark-text text-center sm:text-left">Welcome back Ades!</h2>
      <p className="dark:text-gray-400 text-black pb-4 sm:pb-6 text-left">
        Take a look at your learning progress for Today Oct 17, 2024
      </p>

      <div className="container dark:bg-gray-700 bg-custom-red p-4 sm:p-8 mb-4 sm:mb-5 text-white rounded-3xl w-full mx-auto">
        <div className="profile-header flex flex-col sm:flex-row items-center gap-4 mb-4 rounded-3xl p-4 sm:p-6 w-full dark:bg-gray-700 bg-custom-cream">
          <div className="profile-avatar dark:bg-purple-500 bg-custom-red text-center flex items-center justify-center rounded-full w-16 h-16 sm:w-20 sm:h-20 text-3xl sm:text-4xl font-bold">
            AA
          </div>
          <div>
            <h1 className="text-lg sm:text-2xl font-semibold text-custom-red dark:text-dark-text">Ades Adediran</h1>
            <div className="flex items-center mt-2">
              <div className="xp-bar bg-gray-600 h-2 rounded-full w-24 sm:w-32 mr-2">
                <div className="xp-progress bg-green-500 h-2 rounded-full" style={{ width: '33%' }}></div>
              </div>
              <span className="dark:text-gray-400 text-custom-red">0 XP</span>
              <span className="dark:text-gray-400 text-custom-red mx-1 sm:mx-2">/</span>
              <span className="dark:text-gray-400 text-custom-red">100 XP</span>
            </div>
          </div>
        </div>

        <div className="course-status flex flex-col sm:flex-row justify-between gap-2 sm:gap-4">
          <div className="status-box dark:bg-gray-800 bg-custom-cream p-4 rounded-md flex flex-col items-center w-full sm:w-1/3">
            <FaClock className="text-xl sm:text-2xl mb-1 bg-custom-red" />
            <p className="text-sm sm:text-base font-medium text-custom-red dark:text-dark-text">In Progress</p>
            <p className="text-xs sm:text-sm dark:text-gray-400">0 Courses</p>
          </div>
          <div className="status-box dark:bg-gray-800 bg-custom-cream p-4 rounded-md flex flex-col items-center w-full sm:w-1/3">
            <FaCheckCircle className="text-xl sm:text-2xl mb-1 bg-custom-red" />
            <p className="text-sm sm:text-base font-medium text-custom-red dark:text-dark-text">Completed</p>
            <p className="text-xs sm:text-sm dark:text-gray-400 text-custom-red">0 Courses</p>
          </div>
          <div className="status-box dark:bg-gray-800 bg-custom-cream p-4 rounded-md flex flex-col items-center w-full sm:w-1/3">
            <FaStar className="text-xl sm:text-2xl mb-1 bg-custom-red" />
            <p className="text-sm sm:text-base font-medium text-custom-red dark:text-dark-text">Points</p>
            <p className="text-xs sm:text-sm text-custom-red dark:text-gray-400">0 XP</p>
          </div>
        </div>
      </div>

      <div className="no-courses dark:bg-gray-800 bg-custom-red p-4 sm:p-6 rounded-md text-center">
        <p className="text-sm sm:text-base">No courses found</p>
      </div>
    </div>
  );
};

export default UserProfile;
