import { useState } from 'react'
import NavBar from '../component/Layout/NavBar'
import Hero from '../component/Hero'
import OurSchool from '../component/OurSchool'
import Courses from '../component/Courses'
import Footer from '../component/Footer'
import Admission from '../component/Admission'
import ReviewSlider from '../component/review'


function Home() {
  const [count, setCount] = useState(0)
  return (
    <>
      <NavBar />
      <Hero />
      <OurSchool />
      <Courses />
      <Admission />
      <ReviewSlider />
      < Footer />
    </>
  )
}
export default Home
