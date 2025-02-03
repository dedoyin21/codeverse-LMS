

const CoursePage = () => {
  const videos = Array.from({ length: 15 }, (_, index) => ({
    id: index + 1,
    title: `Lesson ${index + 1}: Introduction to Key Concepts`,
    thumbnail: `path/to/thumbnail${index + 1}.jpg`, // Placeholder, replace with real paths
    summary: `This lesson covers the core topic of lesson ${index + 1}.`,
    duration: `${Math.floor(Math.random() * 10) + 10}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
  }));

  return (
    <div className="course-page p-6">
      {/* Course Title and Overview */}
      <h1 className="text-4xl font-bold mb-4 text-gray-900">Frontend Development for Beginners</h1>
      <p className="text-lg text-gray-700 mb-6">
        Dive into the world of frontend development and learn how to build modern, interactive web applications from scratch.
      </p>

      {/* Course Details */}
      <section className="course-details mb-8">
        <h2 className="text-2xl font-semibold mb-2">Course Overview</h2>
        <p className="text-gray-700">
          This course covers essential topics such as HTML, CSS, JavaScript, and React, equipping you with skills to build dynamic web applications.
        </p>
      </section>

      {/* Video List */}
      <section className="video-section">
        <h2 className="text-2xl font-semibold mb-4">Course Lessons</h2>
        <div className="w-[50%] bg-custom-blue grid grid-rows-1 gap-4">
          {videos.map((video) => (
            <div
              key={video.id}
              className="video-card flex items-center p-3 transition transform hover:scale-105 hover:bg-gray-800 hover:text-white"
            >
              <img 
                src={video.thumbnail} 
                alt={video.title} 
                className="w-16 h-16 object-cover rounded-lg mr-3"
              />
              <div className="flex flex-col">
                <h3 className="text-md font-semibold">{video.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{video.summary}</p>
                <span className="text-sm text-gray-400 mt-1">Duration: {video.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CoursePage;
