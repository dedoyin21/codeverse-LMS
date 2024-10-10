const {
  User,
  Course,
  Enrollment,
  Content,
  Progress,
  Payment,
} = require('./models')

async function seedDatabase() {
  try {
    const users = await User.bulkCreate([
      {
        email: 'student1@example.com',
        name: 'Student One',
        password: 'password123',
        role: 'student',
      },
      {
        email: 'student2@example.com',
        name: 'Student Two',
        password: 'password123',
        role: 'student',
      },
      {
        email: 'instructor1@example.com',
        name: 'Instructor One',
        password: 'password123',
        role: 'instructor',
      },
      {
        email: 'admin@example.com',
        name: 'Admin User',
        password: 'password123',
        role: 'admin',
      },
    ])

    // Sample Courses
    const courses = await Course.bulkCreate([
      {
        title: 'Introduction to Programming',
        description: 'Learn the basics of programming',
        price: 0,
        isPremium: false,
      },
      {
        title: 'Advanced Web Development',
        description: 'Master modern web technologies',
        price: 99.99,
        isPremium: true,
      },
      {
        title: 'Data Science Fundamentals',
        description: 'Explore the world of data analysis',
        price: 79.99,
        isPremium: true,
      },
    ])

    // Sample Enrollments
    await Enrollment.bulkCreate([
      { UserId: users[0].id, CourseId: courses[0].id },
      { UserId: users[0].id, CourseId: courses[1].id },
      { UserId: users[1].id, CourseId: courses[0].id },
      { UserId: users[1].id, CourseId: courses[2].id },
    ])

    // Sample Content
    const content = await Content.bulkCreate([
      {
        title: 'Variables and Data Types',
        type: 'video',
        data: 'video_url_1',
        CourseId: courses[0].id,
      },
      {
        title: 'Control Structures',
        type: 'text',
        data: 'Learn about if statements and loops',
        CourseId: courses[0].id,
      },
      {
        title: 'React Hooks',
        type: 'video',
        data: 'video_url_2',
        CourseId: courses[1].id,
      },
      {
        title: 'API Integration',
        type: 'quiz',
        data: 'JSON_quiz_data',
        CourseId: courses[1].id,
      },
      {
        title: 'Introduction to Python',
        type: 'video',
        data: 'video_url_3',
        CourseId: courses[2].id,
      },
      {
        title: 'Data Visualization',
        type: 'text',
        data: 'Learn about matplotlib and seaborn',
        CourseId: courses[2].id,
      },
    ])

    // Sample Progress
    await Progress.bulkCreate([
      {
        UserId: users[0].id,
        CourseId: courses[0].id,
        ContentId: content[0].id,
        completed: true,
      },
      {
        UserId: users[0].id,
        CourseId: courses[0].id,
        ContentId: content[1].id,
        completed: false,
      },
      {
        UserId: users[1].id,
        CourseId: courses[2].id,
        ContentId: content[4].id,
        completed: true,
      },
      {
        UserId: users[1].id,
        CourseId: courses[2].id,
        ContentId: content[5].id,
        completed: false,
      },
    ])

    // Sample Payments
    await Payment.bulkCreate([
      {
        UserId: users[0].id,
        CourseId: courses[1].id,
        amount: 99.99,
        status: 'completed',
      },
      {
        UserId: users[1].id,
        CourseId: courses[2].id,
        amount: 79.99,
        status: 'completed',
      },
    ])

    console.log('Database seeded successfully')
  } catch (error) {
    console.error('Error seeding database:', error)
  }
}

module.exports = seedDatabase
