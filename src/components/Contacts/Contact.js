import React from 'react';
import {Element} from "react-scroll";
import { IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import "./Contact.css"




const Contact = () => {
  return (
   <Element className="contact" >

  <h1>Contact</h1>
  <div className='contact__container'>
    <p>
        Email  :<span>  gsankar9797@gmail.com</span>
    </p>
    <p>
        Github Username :<span>  @gowrisankar0</span>
    </p>
    <div className='contact__icons'>
   <a href="https://www.linkedin.com/in/gowri-sankar-b875a520b/">
    <IconButton>
    <LinkedInIcon />
    </IconButton>
   </a>

   <a href="https://github.com/gowrisankar0">
    <IconButton>
    <GitHubIcon />
    </IconButton>
   </a>

   <a href="www.google.com">
    <IconButton>
    <FacebookIcon />
    </IconButton>
   </a>
    </div>
  </div>
   </Element>
  )
}

export default Contact