import React from 'react';
import { Element } from 'react-scroll';
import Course from '../Completedcourse/Course';
import "./CourseContainer.css"

const CourseContainer = () => {
  return (
      <Element className='educationContainer' id="exp">
        <h1>Completed Course</h1>
        <div className='eduction__info'>
            <Course number="web design" title="UI UX" />
            <Course number="FrontEnd" title="Web Development" style={{backgroundColor:"orangered"}}/>
            <Course number="Backend" title="Web Development" />
            <Course number="Fullsatck" title="MERN" />
        </div>



      </Element>
  )
}

export default CourseContainer