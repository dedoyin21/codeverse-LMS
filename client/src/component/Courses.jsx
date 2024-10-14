import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
);

export default function Courses() {
  const [isFree, setIsFree] = React.useState(true); // Toggle state

  // Sample data for the courses
  const freeCourses = [
    {
      title: '3-Days HTML & CSS Bootcamp',
      description: 'Learn how to create responsive and interactive websites using HTML, CSS, JavaScript, and React.',
      image: '/react.jpg'
    },
    {
      title: 'Java Script',
      description: 'Master the fundamentals of product design, from wireframes to prototypes.',
      image: '/product.jpg'
    },
    {
        title: 'Git',
        description: 'Learn how to create responsive and interactive websites using HTML, CSS, JavaScript, and React.',
        image: '/react.jpg'
    },
    {
        title: 'Site hosting',
        description: 'Master the fundamentals of product design, from wireframes to prototypes.',
        image: '/product.jpg'
    }
    ];
  const paidCourses = [
    {
      title: 'Backend Web Development',
      description: 'Develop expertise in server-side programming, databases, and APIs.',
      image: '/backend.jpg'
    },
    {
      title: 'Full Stack Development',
      description: 'Become a full-stack developer by mastering both front-end and back-end technologies.',
      image: '/backend.jpg' 
    },
    {
        title: 'Backend Web Development',
        description: 'Develop expertise in server-side programming, databases, and APIs.',
        image: '/backend.jpg'
    },
    {
        title: 'Full Stack Development',
        description: 'Become a full-stack developer by mastering both front-end and back-end technologies.',
        image: '/backend.jpg' 
    }
  ];

  const handleToggle = () => {
    setIsFree(!isFree); // Toggle between free and paid
  };

  return (
    <>
      <div className='flex flex-col gap-6 md:gap-12 justify-center items-center'> 
        <div className='w-full flex flex-row gap-4 md:gap-32 bg-custom-red px-2 py-6 md:px-4 md:py-8'>
          <h1 className='text-5xl text-custom-cream'>Trending Course</h1>
          <div className='flex justify-end items-center gap-6'>
            <button 
              onClick={handleToggle} 
              className={`px-4 py-2 rounded-lg transition duration-300 ${isFree ? 'bg-custom-cream text-black' : 'bg-transparent border border-custom-cream text-custom-cream'}`}
            >
              Free
            </button>
            <button 
              onClick={handleToggle} 
              className={`px-4 py-2 rounded-lg transition duration-300 ${!isFree ? 'bg-custom-cream text-black' : 'bg-transparent border border-custom-cream text-custom-cream'}`}
            >
              Paid
            </button>
          </div>
        </div>

        <div className='bg-custom-cream flex flex-col md:flex-row gap-6 md:gap-12 px-4 py-6 md:px-6 md:py-10 justify-center items-center'>
          {(isFree ? freeCourses : paidCourses).map((course, index) => (
            <div key={index}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={course.image}
                    alt={course.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {course.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {course.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" className='text-custom-red'>
                    Take Course
                  </Button>
                </CardActions>
              </Card>
            </div>
          ))}
        </div>

        
      </div>
    </>
  );
}
