import React from 'react'
import Header from './components/Header/Header'
import TopContainer from './components/TopContainer/TopContainer';
import SkillContainer from './SkillContainer/SkillContainer';
import ProojectContainer from './components/ProjectContainer/ProojectContainer';
import "./App.css";
import CourseContainer from "./components/CourseContainer/CourseContainer";
import Contact from "./components/Contacts/Contact"

const App = () => {
  return (
    <div>
    <Header />
    <TopContainer />
    <SkillContainer />
    <ProojectContainer />
    <CourseContainer />
    <Contact />


    </div>
  )
}

export default App