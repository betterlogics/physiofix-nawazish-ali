import React from 'react'
import "./EditBlog.css"
import men from '../Assets/men.jpg'
import {AiOutlineMinus} from 'react-icons/ai'
import {AiOutlinePlus} from 'react-icons/ai'

function EditBlog() {
  return (
    <div className='Edit_blog'>
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <img className='Edit_img' src={men} alt="" />

                </div>
                <div className="col-md-6">
                    <h1  className='text-truncate'>hello hello hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello</h1>
                <p className='left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, cumque recusandae sapiente debitis, rerum dolor nesciunt voluptatibus minima hic pariatur maiores consequuntur autem odio libero, aliquid quaerat commodi quam quae.
                </p>
                </div>
                <div className="col-md-2"><button className='btn  sub_bt1'>Edit <span> <AiOutlinePlus></AiOutlinePlus></span></button></div>
                <div className="col-md-2"><button className='btn  sub_bt1
                '>Delete <span> <AiOutlineMinus></AiOutlineMinus></span></button></div>
          
            </div>
            <div className="row mt-4">
                <div className="col-md-2">
                    <img className='Edit_img' src={men} alt="" />

                </div>
                <div className="col-md-6">
                    <h1  className='text-truncate'>hello hello hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello</h1>
                <p className='left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, cumque recusandae sapiente debitis, rerum dolor nesciunt voluptatibus minima hic pariatur maiores consequuntur autem odio libero, aliquid quaerat commodi quam quae.
                </p>
                </div>
                <div className="col-md-2"><button className='btn  sub_bt1'>Edit <span> <AiOutlinePlus></AiOutlinePlus></span></button></div>
                <div className="col-md-2"><button className='btn  sub_bt1
                '>Delete <span> <AiOutlineMinus></AiOutlineMinus></span></button></div>
          
            </div>
        </div>
      
    </div>
  )
}

export default EditBlog
