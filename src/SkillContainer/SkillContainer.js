import React from 'react';
import {Element} from "react-scroll";
import skills from "../assets/skills.jpg";
import LinearProgress from '@mui/material/LinearProgress';
import "./skillContainer.css"

const SkillContainer = () => {
  return (
   <Element className='skillContainer' id="skills">
  
      
     <div className='skillContainer__image'>
      <img src={skills}alt="skill"/>
     </div>
     <div className='skillContainer__text'>
      <h2>SKILLSET</h2>
      <div className='skillContainer__skillset'>
        <h5>React</h5>
        <div className='skillContainer__slider skillContainer__slider1'>
          <LinearProgress variant="determinate" value={90} />
        </div>
      </div>

      <div className='skillContainer__skillset'>
        <h5>Node Js</h5>
        <div className='skillContainer__slider skillContainer__slider2'>
          <LinearProgress variant="determinate" value={75} />
        </div>
      </div>

      <div className='skillContainer__skillset'>
        <h5>Express</h5>
        <div className='skillContainer__slider skillContainer__slider3'>
          <LinearProgress variant="determinate" value={80} />
        </div>
      </div>

      <div className='skillContainer__skillset'>
        <h5>MongoDb</h5>
        <div className='skillContainer__slider skillContainer__slider4'>
          <LinearProgress variant="determinate" value={70} />
        </div>
      </div>

      <div className='skillContainer__skillset'>
        <h5>JavaScript</h5>
        <div className='skillContainer__slider skillContainer__slider5'>
          <LinearProgress variant="determinate" value={90} />
        </div>
      </div>


      <div className='skillContainer__skillset'>
        <h5>CSS</h5>
        <div className='skillContainer__slider skillContainer__slider6'>
          <LinearProgress variant="determinate" value={80} />
        </div>
      </div>

      <div className='skillContainer__skillset'>
        <h5>UI UX</h5>
        <div className='skillContainer__slider skillContainer__slider7'>
          <LinearProgress variant="determinate" value={80} />
        </div>
      </div>
     </div>
   </Element>
  )
}

export default SkillContainer 