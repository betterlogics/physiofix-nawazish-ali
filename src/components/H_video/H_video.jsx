import React from 'react'
import "./H_video.css"
import {useNavigate} from 'react-router-dom'

function H_video() {
  const navigate = useNavigate();
  const gotoabout = ()=>{
  navigate('/about')
}
  return (
    <div className='main_hbg'>
        <div className="container-fluid">
            <div className="row m-0 p-0">
                <div className="col-lg-7 p-0">
                <iframe className='i_ha' width="560" height="315" src="https://www.youtube.com/embed/jgwRIPb9TIw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="col-lg-4">
                    <h3 className='left text-white'>WE ARE THE <span> PHYSIO FIX </span></h3>
                    <p className='left text-white'>Our goal is to provide top quality, personalized physical therapy and performance coaching services that are accessible and affordable to anyone, anywhere, at any time. We offer solutions to help everyone no matter where you are in your journey. Whether you want to work with us in-person or online, we’ll help you become mobile, stable, and strong.</p>
                <button  onClick={()=>gotoabout()} className='btn btn_v'>About Us</button>
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default H_video
