import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';


export default function Courses() {
  return (
    <>
        <div className='bg-custom-red flex flex-col md:flex-row gap-6 md:gap-12 px-4 py-6 md:px-6 md:py-10 justify-center items-center'> 
            <div>  
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image="/react.jpg"
                        alt="green iguana"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Frontend Web develpment
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Learn how to create responsive and interactive websites using HTML, CSS, JavaScript, and React.
                            Build modern, dynamic web applications with a focus on user experience.
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

            <div>  
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image="/product.jpg"
                        alt="green iguana"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Product Design
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Master the fundamentals of product design, from wireframes to prototypes.
                            Learn to create visually appealing, user-centered designs that enhance functionality.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        Take Course
                        </Button>
                    </CardActions>
                </Card>
            </div>

            <div>  
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image="/backend.jpg"
                        alt="green iguana"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Backend Web Development
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Develop expertise in server-side programming, databases, and APIs.
                            Learn how to build secure, scalable back-end systems for modern web applications.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Take Course
                        </Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    </>
  );
}
