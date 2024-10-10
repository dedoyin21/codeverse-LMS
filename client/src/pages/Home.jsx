import { useState } from 'react'
import NavBar from '../component/NavBar'
import Hero from '../component/Hero'

function Home() {
  const [count, setCount] = useState(0)
  return (
    <>
      <NavBar />
      <Hero />
    </>
  )
}
export default Home
