import NavBar from '../component/LandingPage/NavBar'
import Hero from '../component/LandingPage/Hero'
import OurSchool from '../component/LandingPage/OurSchool'
import Courses from '../component/LandingPage/Courses'
import Footer from '../component/LandingPage/Footer'
import Admission from '../component/LandingPage/Admission'
import ReviewSlider from '../component/LandingPage/review'


function Home() {
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
