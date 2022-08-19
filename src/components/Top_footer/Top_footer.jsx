import React from 'react'
import "./Top_footer.css"
import { SiFacebook } from 'react-icons/si';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaYoutube } from 'react-icons/fa';
import footer from "../Assets/footer.svg"

function Top_footer() {
  return (
    <div className='Main_footer'>
      <div className="container">
        <div className="row">
            <div className="col-lg-3">
                <h2 className='Footer_head'>The Physio Fix</h2>
                <p className='text-white'>2103 W Parkside Ln, Ste 103 <br />   Phoenix, AZ 85027 <br />(602) 675-0325
                </p>
                <button className='btn footer_btn'>Book <br />APPoinment</button>
                <div className="icons">
               <a className='text-white' href=""><AiOutlineInstagram></AiOutlineInstagram> </a>  <a className='text-white' href=""> <SiFacebook></SiFacebook></a>  <a className='text-white' href=""><FaYoutube></FaYoutube></a>
                </div>
            </div>
            <div className="col-lg-2">
                <img className='fimg' src={footer} alt="" />

            </div>
            <div className="col-lg-2">
                <h5 className='foot_h'>Online Services</h5>
                <a className='foot_a' href="#">VIDEO APPOINTMENTS</a><br />
                <a className='foot_a' href="#">VIDEO APPOINTMENTS</a><br />
                <a className='foot_a' href="#">VIDEO APPOINTMENTS</a>
 
                <h5 className='foot_h mt-4'>Online Services</h5>
                <a className='foot_a' href="#">VIDEO APPOINTMENTS</a><br />
                <a className='foot_a' href="#">VIDEO </a><br />
                <a className='foot_a' href="#">VIDEO APPOINTMENTS</a>

            </div>
            <div className="col-lg-2">
                <h5 className='foot_h'>Online Services</h5>
                <a className='foot_a' href="#">VIDEO APPOINTMENTS</a><br />
                <a className='foot_a' href="#">VIDEO </a><br />
                <a className='foot_a' href="#">VIDEO APPOINTMENTS</a>
 
                <h5 className='foot_h mt-4'>Online Services</h5>
                <a className='foot_a' href="#">VIDEO APPOINTMENTS</a><br />
                <a className='foot_a' href="#">VIDEO</a><br />
                <a className='foot_a' href="#">VIDEO APPOINTMENTS</a>

            </div>
            <div className="col-lg-2">
                <h5 className='foot_h'>Online Services</h5>
                <a className='foot_a' href="#"> APPOINTMENTS</a><br />
                <a className='foot_a' href="#">VIDEO APPOINTMENTS</a><br />
                <a className='foot_a' href="#">VIDEO APPOINTMENTS</a>
 
                <h5 className='foot_h mt-4'>Online Services</h5>
                <a className='foot_a' href="#">VIDEO </a><br />
                <a className='foot_a' href="#">VIDEO APPOINTMENTS</a><br />
                <a className='foot_a' href="#">APPOINTMENTS</a>

            </div>
            <div className="col-lg-1">
            <h5 className='foot_h'>Learn</h5>
            <a className='foot_a' href="#">FAQ</a><br />
            <a className='foot_a' href="#">TESTIMONIALS</a>

            <h5 className='foot_h mt-5'>Learn</h5>
            <a className='foot_a' href="#">FAQ</a><br />
            <a className='foot_a' href="#">TESTIMONIALS</a>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Top_footer
