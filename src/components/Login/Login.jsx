import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router'
function Login({setAdminLoggedIn}) {
    const navigate = useNavigate();
    const [userinfo,setuserinfo] = useState({});
    const userInfoChanged = event =>{
        const name = event.target.name;
        const value = event.target.value;
        setuserinfo(values => ({...values, [name]: value}))
    }
    const handleSubmit = ()=>{
        console.log(userinfo);
        axios.post('http://localhost:5000/signin',{
            email:userinfo.email,
            password:userinfo.password     
        })
        .then(res => {
            console.log(res);

            axios.get('http://localhost:5000/signin')
            .then(
                res =>{          
                    console.log(res.data.admin)   
                    if(res.data.admin == 'true')       
                    {
                        setAdminLoggedIn(true);
                    }
                }
            )
            alert('Succesfully Logged In');
            navigate("/submit");
        })
        .catch(err =>  alert(err))
    }
    
  const onSubmit = (event) => {
    event.preventDefault();
    console.log("submission prevented");
  };
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
                        <form  onSubmit={onSubmit}>
                            <div className="feiled">
                                <span className='bx bx_user'> </span>
                                <input type="email" placeholder='Email ' name='email' onChange={userInfoChanged} />
                            </div>
                            
                            <div className="feiled">
                                <span className='bx bx_lock_alt'> </span>
                                <input type="password" placeholder='password' name='password' onChange={userInfoChanged} />
                            </div>
                            <button className='btn sign__btn'  onClick={handleSubmit}> LOGIN</button>
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
