import { useState } from 'react'
import NavBar from '../component/NavBar'
import Hero from '../component/Hero'
import Courses from '../component/Courses'


function Home() {
  const [count, setCount] = useState(0)
  return (
    <>
      <NavBar />
      <Hero />
      <Courses />
    </>
  )
}
export default Home
