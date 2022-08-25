import React from 'react'
import "./Sign.css"
import axios from 'axios'
import { useState,useEffect } from 'react';

function Sign_up() {
    const [userinfo,setuserinfo] = useState({});
    const userInfoChanged = event =>{
        const name = event.target.name;
        const value = event.target.value;
        setuserinfo(values => ({...values, [name]: value}))
    }
    const handleSubmit = ()=>{
        console.log(userinfo);
        axios.post('http://localhost:5000/signup',{
            username:userinfo.username,
            password:userinfo.password,
            email:userinfo.email,
        })
        .then(res => {
            console.log(res);
            alert('Account Createtd')
        })
        .catch(err => alert('Email Already Registered'))
    }
    const onSubmit = (event) => {
        event.preventDefault();
      };
  return (
    <div className='Main_sign'>
        <div className="container">
            <div className="row justify-content-center  ">
                <div className="col-lg-6">
                    <div className="content">
                        <div className="sign_text">
                            Sign up
                        </div>
                        <form  onSubmit={onSubmit}>
                            <div className="feiled">
                                <span className='bx bx_user'> </span>
                                <input type="name" placeholder='username' name='username' onChange={userInfoChanged} />
                            </div><div className="feiled">
                                <span className='bx bx_envelop'> </span>
                                <input type="email" placeholder='Email' name='email' onChange={userInfoChanged} />
                            </div>
                            <div className="feiled">
                                <span className='bx bx_lock_alt'> </span>
                                <input type="password" placeholder='password' name='password' onChange={userInfoChanged} />
                            </div>
                            <button className='btn sign__btn'  onClick={handleSubmit}>Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     
    </div>
  )
}

export default Sign_up
