import React from 'react'
import "./Sign.css"

function Sign_up() {
  return (
    <div className='Main_sign'>
        <div className="container">
            <div className="row justify-content-center  ">
                <div className="col-lg-6">
                    <div className="content">
                        <div className="sign_text">
                            Sign up
                        </div>
                        <form action="#">
                            <div className="feiled">
                                <span className='bx bx_user'> </span>
                                <input type="name" placeholder='username' />
                            </div><div className="feiled">
                                <span className='bx bx_envelop'> </span>
                                <input type="email" placeholder='Email' />
                            </div>
                            <div className="feiled">
                                <span className='bx bx_lock_alt'> </span>
                                <input type="password" placeholder='password' />
                            </div>
                            <button className='btn sign__btn'>Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     
    </div>
  )
}

export default Sign_up
