import React from 'react';
import{ useNavigate } from 'react-router-dom';

function About() {


const navigate = useNavigate()

  const goTOHOme =() => {
    navigate("/")
  
  }
  return (
    <div>
      <h1>this is about page</h1>
      <button onClick={()=>goTOHOme()} className='btn btn-primary btn-lg'>Go back to home</button>
    </div>
  )
}

export default About
