import React from 'react';
import {Link} from "react-scroll";
import "./TopContent.css"

const TopContent = () => {
  return (
    <div className='topContent'>



<div className='topContent__container'>
      <h1>Mr.Gowri Sankar</h1>
      <p>A Professional Entry Leval MERN Web developper</p>
      <a href="https://drive.google.com/drive/u/0/folders/1zl0tKeX-XBHnBRvX-HMhYZW7We0Rb1Wx">
        <button className='topContent__downloadeButton'> Downloade CV</button>
        <Link to="projects" smooth={true} duration={500}> 
        <button className='topContent__workButton'>My work</button>
        
        </Link>
        
      </a>
    </div>        
    </div>
  )
}

export default TopContent