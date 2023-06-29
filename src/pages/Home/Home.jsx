
import Navbar from "../../Components/Navbar/Navbar";
import Intro from "../../Components/Intro/Intro";
import Services from "../../Components/Services/Services";
import Experience from "../../Components/Experience/Experience";
import Works from "../../Components/Works/Works";
import Portfolio from "../../Components/Portfolio/Portfolio";
import Testimonial from "../../Components/Testimonials/Testimonial";
// import bgImage from '../../img/videobg1.mp4'
import VideoBackground from "../../Components/VideoBackground/VideoBackground";
const Home = () => {
  return (
    <div className='Home'>
      {/* <video autoPlay loop muted>
      <source src={bgImage} type="video/mp4"/>
    </video> */}
    <VideoBackground/>
    <Navbar/>
    <Intro/>
    {/* <Services/>
    <Experience/>
    <Works/>
    <Portfolio/>
    <Testimonial/> */}
    </div>
  )
}

export default Home
