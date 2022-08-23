import React from 'react'
import "./Upper_header.css"
import { SiFacebook } from 'react-icons/si';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaYoutube } from 'react-icons/fa';

function Upper_header() {
  return (
    <div className='Upper_bg'>
        <div className="container">
            <div className="row">
            <div className="col-lg-2 p-0">
            <div className="icon_s">
        <a className='text-white' href=""><AiOutlineInstagram></AiOutlineInstagram> </a>  <a className='text-white' href=""> <SiFacebook></SiFacebook></a>  <a className='text-white' href=""><FaYoutube></FaYoutube></a>
        </div>
        </div>
        <div className="col-lg-9 p-0">
            <p className='text-white '>Check Out Our Programs</p>
        </div>
            </div>
        </div>
      
      
    </div>
  )
}

export default Upper_header
