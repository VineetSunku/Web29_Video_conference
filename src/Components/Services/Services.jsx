import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from '../Card/Card'

import Resume from './resume.pdf'
const Services = () => {
  return (
   <div className="services">
    {/* left side */}
    <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <span>
            Lorem ipsum dolor sit amet consectetur 
            Lorem ipsum dolor sit amet  
            <br />
            obcaecati assumenda praesentium 
        </span>
        <a href={Resume} download>
        <button className="button s-button">Download CV</button>
        </a>
       
        <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
    </div>
    {/* right side */}
    <div className="cards">
      {/* First card */}
  <div style={{left:'14rem'}}>
        <Card
        emoji={HeartEmoji}
        heading={"Design"}
        detail={"Figma, Sketch, Photoshop, Adobe, Adobexd" }
        />
  </div>
  {/* second card */}
  <div style={{top:"12rem", left:"-4rem"}}>
        <Card
        emoji={Glasses}
        heading={"Developer"}
        detail={"Html, CSS, Javascript, React" }
        />
  </div>
  {/* third card */}
  <div style={{top:"19rem",left:"12rem"}}>
        <Card
        emoji={Humble}
        heading={"UI/UX"}
        detail={"I can design highly appealing and interactive website. " }
        />
  </div>
  <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
    </div>
   </div>
  )
}

export default Services
