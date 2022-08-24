import React from 'react'
import "./Submit.css"
import {BsUpload} from 'react-icons/bs'

function Submit() {
  return (
    <div className='Main_submit'>
      <div className="container">
            <div className="row justify-content-center  ">
                <div className="col-lg-6">
                    <div className="content">
                        {/* <div className="sign_text">
                            Sign up
                        </div> */}
                        <form action="#">
                            <div className="feiled">
                                <span className='bx bx_user'> </span>
                                <input type="name" placeholder='heading ' />
                            </div>
                            {/* <div className="feiled">
                                <span className='bx bx_envelop'> </span>
                                <input type="email" placeholder='Email' />
                            </div>
                            <div className="feiled">
                                <span className='bx bx_lock_alt'> </span>
                                <input type="password" placeholder='password' />
                            </div> */}
                           <textarea name="" id="" cols="30" rows="10" className='TExt_a'></textarea>
                           <div className="saa">
                           <button className='btn  sub_bt'>Upload <BsUpload className='icon_sb'></BsUpload></button>
                           <button  className='btn  sub_bt'> Upload<BsUpload className='icon_sb'></BsUpload></button>
          
                           </div>
                           <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <button className='btn  as'>Submit</button>
            </div>

          </div>
        </div>
                        </form>
                    </div>
                  </div>
              </div>
         
        </div>
      
     
     
    </div>
  )
}

export default Submit
