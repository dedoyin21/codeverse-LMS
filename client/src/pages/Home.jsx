import { useState } from 'react'
import NavBar from '../component/NavBar'

function Home() {
  const [count, setCount] = useState(0)
  return (
    <>
      <NavBar />
    </>
  )
}
export default Home
