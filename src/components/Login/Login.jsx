import React from 'react'

function Login() {
  return (
    <div>
       <div className='Main_sign'>
        <div className="container">
            <div className="row justify-content-center  ">
                <div className="col-lg-6">
                    <div className="content">
                        <div className="sign_text">
                          LOGIN
                        </div>
                        <form action="#">
                            <div className="feiled">
                                <span className='bx bx_user'> </span>
                                <input type="name" placeholder='username' />
                            </div>
                            
                            <div className="feiled">
                                <span className='bx bx_lock_alt'> </span>
                                <input type="password" placeholder='password' />
                            </div>
                            <button className='btn sign__btn'> LOGIN</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     
    </div>
    </div>
  )
}

export default Login
