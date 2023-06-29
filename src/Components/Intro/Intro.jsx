import React from 'react'
import './Intro.css'
// import Github from '../../img/github.png';
// import LinkedIn from '../../img/linkedin.png';
// import Instagram from '../../img/instagram.png';
// import Vector1 from '../../img/Vector1.png';
// import Vector2 from '../../img/Vector2.png';
// import boy from '../../img/boy.png';
// import lapt from '../../img/boy.jpeg';
// import thumbup from '../../img/thumbup.png';
// import Crown from '../../img/crown.png';
// import Video from '../../img/videoconf.png'
// import glassesimoji from '../../img/glassesimoji.png';
// import FloatingDiv from '../FloatingDiv/FloatingDiv';



const Intro = () => {
  return (
   <div className="intro">
  
    <div className="i-left">
        <div className="i-name">
            <span>Effortless connections,</span>
            <span>extraordinary outcomes.</span>
            <span>Connect, communicate, conquer. TalkVision enhances teamwork and drives success.</span>

        </div>
        <div className='i-options'>
        <button className="button i-button">New Meeting</button>
        <input type="text" className="i-input" placeholder="Enter a code or nickname"/>
        <button className="button i-button i-join">Join</button>
        </div>
        
        {/* <div className="i-icons">
            <a href="https://www.linkedin.com/in/shashantkumar/">
            <img src={Github} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/shashantkumar/">   <img src={LinkedIn} alt="" /></a>
         
         <a href="https://www.linkedin.com/in/shashantkumar/">
         <img src={Instagram} alt="" />
         </a>
           

        </div> */}
    </div>


    <div className="i-right">
     
      {/* <img src={Vector1} alt="" />
      <img src={Vector2} alt="" />
      <img src={boy} alt="" /> */}
      {/* <img src={glassesimoji} alt="" /> */}
     
     {/* <div style={{top:'-4%', left:'68%'}}>
        <FloatingDiv image={Video} txt1='HD Video' txt2='Calling'/>
     </div>
     <div style={{top:'18rem', left:'0rem'}}>
        <FloatingDiv image={thumbup} txt1='Low' txt2='Letency'/>
     </div> */}
    {/* blur divs */}

    <div className="blur" style={{background:"rgb(238 210 255)"}}></div>
    <div className="blur" 
    style={{
      
      background:'#C1F5FF',
      top: '17rem',
      width: '21rem',
      height:'11rem',
      left:'-9rem'

      }}></div>

    </div>
   </div>
  )
}

export default Intro
