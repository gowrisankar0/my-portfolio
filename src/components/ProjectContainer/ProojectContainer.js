import React from 'react'
import Project from '../Project/Project';
import { Element } from 'react-scroll';
import "./ProjectContainer.css";
import netflix from "../../assets/netflix.png"
import joke from "../../assets/joke.png";
import clock from "../../assets/clock.png";
import form from "../../assets/form.png";
import newyear from "../../assets/newyear.png";
import meal from "../../assets/meal.png";
import quizz from "../../assets/quizz.png";
import user from "../../assets/user.png";
import redux from "../../assets/redux.png";
import grid from "../../assets/grid.png";
import fullstack from "../../assets/fullstack.png";
import video from "../../assets/video.png";



const ProojectContainer = () => {
    const projects=[
 
{
    image:netflix,
    title:"Landing Page Netflix",
    desc:"Netflix landing page Using HTML,CSS",
    link:"www.google.com"

},
{
    image:joke,
    title:"Joke Generator",
    desc:"Random Joke generator using HTML,CSS,JS",
    link:"www.google.com"

},
{
    image:clock,
    title:"Digital Clock",
    desc:"Digital Clock Using HTML,CSS,JS",
    link:"www.google.com"

},
{
    image:form,
    title:"From&Table",
    desc:"From Under Table using, HTML,CSS,JS--form takes an input from form and it stores below the table",
    link:"www.google.com"

},
{
    image:newyear,
    title:"NewYear Countdown",
    desc:"New Year Coutdown using HTML,CSS,JS",
    link:"www.google.com"

},
{
    image:meal,
    title:"Meal finder",
    desc:"Meal finder using HTML,CSS,JS with one API---It returns corresponding meal What we can expect",
    link:"www.google.com"

},
{
    image:quizz,
    title:"Quizz App",
    desc:"Quizz App using React Js",
    link:"www.google.com"

},
{
    image:user,
    title:"User Managemnet System",
    desc:"User Management system using React Js",
    link:"www.google.com"

},
{
    image:redux,
    title:"User Management System",
    desc:"User Management System using React Reduxtoolkit",
    link:"www.google.com"

},
{
    image:grid,
    title:"Daily Routine",
    desc:"Resposive Daily Routine calender Project using HTML,CSS grid system",
    link:"www.google.com"

},
{
    image:fullstack,
    title:"Fullstack Lead Management System",
    desc:"Lead Management Sysytem Using MERN stack",
    link:"www.google.com"

},
{
    image:video,
    title:"Video landing Page",
    desc:"Video Landing Page Using HTML,CSS",
    link:"www.google.com"

},

    ]
  return (
      <Element className="projectContainer" id="projects">
        <br/>
        <br/>
        <br/>
        <br/>

        <h1>Projects</h1>
        <p>Here are some project Which I done for making lives of people easy.</p>
        <div className='projectContainer__projects'>
            {
                projects.map((project,index)=>{
                    return (
                        <Project 
                        key={index} 
                        image={project.image} 
                        title={project.title} 
                        desc={project.desc} 
                        link={project.link} />
                    )
                })
            }

        </div>
      </Element>
  )
}

export default ProojectContainer