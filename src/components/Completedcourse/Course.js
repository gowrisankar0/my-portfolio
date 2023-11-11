import React from 'react';
import "./Course.css"

const Course = ({number,title,style}) => {
  return (
    <div style={{...style}} className='course'>
        <h1>{number}</h1>
        <p>{title}</p>
    </div>
  )
}

export default Course