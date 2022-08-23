import React from 'react'
import "./Va.css"
import first from "../Assets/first.jpg"

function Va() {
  return (
    <div className='VA_main'>
        <div className="container">
            <div className="row">
                <div className="col-lg-5">
                    <img className='Va_img' src={first} alt="" />
                    <h4 className=' left img_h'>WE DO NOT ASCRIBE TO A "ONE SIZE FITS ALL" APPROACH!</h4>
                </div>
                <div className="col-lg-7 mt-5">
                    <h3 className='VA_h'>Video Appointments</h3>
                    <button className='btn va_btn'>VIDEO APPOINMENTS</button>
                    <p className='left mt-3'>We know that not everyone has access to good care depending on where they live – so we bring it to you through our video appointments! Our staff can perform assessments and services through a live, secure, video connection (similar to FaceTime or Zoom). This cuts out travel and waiting time and can be done in your home or office with a stable internet connection (use of a computer is recommended/preferred). We do our best to make it as convenient and simple as possible for you! </p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Va
