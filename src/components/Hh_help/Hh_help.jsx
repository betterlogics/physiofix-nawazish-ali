import React from 'react'
import "./Hh_help.css"

function Hh_help() {
  return (
    <div className='Hh_helpbg'>
        <h3>WE CAN HELP YOU RESOLVE ALL THESE CONCERNS AND MORE!</h3>
     <div className="container mt-5">
        <div className="row">
            <div className="col-lg-6">
                <p className='left'>Our doctors work with you in devoted one-on-one sessions and take the time to understand your injury, your sport, and your goals to help you get back to doing what you love. We can provide these services both in-person in the Phoenix, AZ metro area or from the comfort of your own home or local gym with our remote programming options!</p>
           <p className='left'>Schedule your session with us today and let us help you unleash your potential!</p>
            </div>
            <div className="col-lg-5 mt-5">
                <button className='btn Hhh_btn text-white'>Schedule In-Person PT Session</button>
                <button className='btn Hhh_btn text-white mt-4'>Schedule Video Appointment</button>
            </div>
            </div>
        </div>      
    </div>
  )
}

export default Hh_help
