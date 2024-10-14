import { useState } from 'react'
import NavBar from '../component/Layout/NavBar'
import Hero from '../component/Hero'
import Courses from '../component/Courses'
import Footer from '../component/Footer'
import Admission from '../component/Admission'
import OurSchool from '../component/OurSchool'


function Home() {
  const [count, setCount] = useState(0)
  return (
    <>
      <NavBar />
      <Hero />
      <OurSchool />
      <Courses />
      <Admission />
      < Footer />
    </>
  )
}
export default Home
