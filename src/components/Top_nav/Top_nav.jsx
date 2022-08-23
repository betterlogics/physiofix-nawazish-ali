import React from 'react'
import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';
import "./Top_nav.css"

function Top_nav() {
  return (
    <div className='Top_nav'>
      <div className="container-fluid">
        <div className="row tp_r">

            <div className="col-lg-3 p-0">
<BsFacebook className='nav_icons'/>
<AiFillInstagram className='nav_icons'/>
<BsYoutube className='nav_icons'/>

            </div>
            <div className="col-lg-6">
              <p className='text-white mb-0 nav_p'>Check out our online programs!</p>
            </div>
            <div className="col-lg-3">
              <input type="search" className='NAv_in' placeholder='Search' />
            </div>

        </div>
      </div>
    </div>
  )
}

export default Top_nav
