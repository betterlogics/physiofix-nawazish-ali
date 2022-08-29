import React from 'react'
import { useState } from 'react';
import Moralis from 'moralis';
import "./Submit.css"
import axios from 'axios'
import { useMoralis, useMoralisFile } from "react-moralis";
// import Moralis from "moralis";
import {BsUpload} from 'react-icons/bs'

function Submit() {
  
  const [bloginfo,setbloginfo] = useState({photo:'',video:''});
  const [bloginfotext,setbloginfotext] = useState({});
  const links = {imagelink:'',videolink:''}

  const {
    authenticate, isAuthenticated, isAuthenticating, user, account, logout 
  } = useMoralis();
  const blogInfotextChanged = event =>{
    const name = event.target.name;
    const value = event.target.value;
    setbloginfotext(values => ({...values, [name]: value}))
}

    const blogInfoChanged = event =>{
        const name = event.target.name;  
        const files = event.target.files[0];      
        setbloginfo(values => ({...values, [name]: files}))
    }
  //   const handleSubmit = async ()=>{
  //     console.log('what is blog info',bloginfo);
  //     const data = bloginfo.photo;
  //     const file = new Moralis.File('myfile', data);
  //     console.log("what is response from moralis",file._IPFS)

  //     await file.saveIPFS();
  //     // axios.post('http://localhost:5000/signup',{
  //     //     username:userinfo.username,
  //     //     password:userinfo.password,
  //     //     email:userinfo.email,
  //     // })
  //     // .then(res => {
  //     //     console.log(res);
  //     //     alert('Account Createtd')
  //     // })
  //     // .catch(err => alert('Email Already Registered'))
  // }


  const IpfsStorage = async () => {
   var  value = bloginfo.photo;
   if(bloginfo.photo != '')
   {
    await authenticate({ signingMessage: "Log in using Moralis" })
    .then(async function (user) {
      console.log("logged in user:", user);
      const fileIpfs = new Moralis.File(value.name,value);
      await fileIpfs.saveIPFS(null, { useMasterKey: true });
      console.log("what is return from moralis", fileIpfs._ipfs);
      links.imagelink = fileIpfs._ipfs;
    })
    .catch(function (error) {
      console.log(error);
    });
   }
    value = bloginfo.video;
    if(bloginfo.video != '')
    {
      await authenticate({ signingMessage: "Log in using Moralis" })
        .then(async function (user) {
          console.log("logged in user:", user);
          const fileIpfs = new Moralis.File(value.name,value);
          await fileIpfs.saveIPFS(null, { useMasterKey: true });
          console.log("what is return from moralis", fileIpfs._ipfs);
          links.videolink = fileIpfs._ipfs;
        })
        .catch(function (error) {
          console.log(error);
        }); 
    }
      
        console.log('Links : ' ,links)
        console.log('Text : ' ,bloginfotext)

        axios.post('http://localhost:5000/submit',{
          heading:bloginfotext.heading,paragraph:bloginfotext.paragraph,imagelink:links.imagelink,videolink:links.videolink
        })
        .then(res => {
            console.log(res);
            alert('Succesfully Submitted');
        })
        .catch(err =>  alert(err))
  };


  const onSubmit = (event) => {
    event.preventDefault();
    console.log("submission prevented");
  };
  return (
    <div className='Main_submit'>
      <div className="container">
            <div className="row justify-content-center  ">
                <div className="col-lg-6">
                    <div className="content">
                        {/* <div className="sign_text">
                            Sign up
                        </div> */}
                        <form onSubmit={onSubmit}>
                            <div className="feiled">
                                <span className='bx bx_user'> </span>
                                <input type="name" placeholder='heading ' name='heading' onChange={blogInfotextChanged} />
                            </div>
                            {/* <div className="feiled">
                                <span className='bx bx_envelop'> </span>
                                <input type="email" placeholder='Email' />
                            </div>
                            <div className="feiled">
                                <span className='bx bx_lock_alt'> </span>
                                <input type="password" placeholder='password' />
                            </div> */}
                           <textarea name="paragraph" id="" cols="30" rows="10" className='TExt_a'  onChange={blogInfotextChanged}></textarea>
                         <div className="row justify-content-center">
                          <div className="col-md-12">
                          <div className="saa">
                          <label type="file" for="photo"      class="btn   sub_input sub_bt">Upload image</label>
                          <input type="file" placeholder='Upload image'  id="photo" name="photo" accept="image/*" className='btn btas'  onChange={blogInfoChanged}/>
                          <label type="file" for="video"      class="btn   sub_input sub_bt">Upload video</label>
                          <input type="file"  id="video" name="video" accept="video/*" className='btn btas   ' onChange={blogInfoChanged} />
         
                          </div>
                          </div>
                         </div>
                        
                           <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <button className='btn  as' onClick={IpfsStorage}>Submit</button>
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
