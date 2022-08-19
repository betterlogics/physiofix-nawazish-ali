import React from 'react'
import "./Input.css"

function Input() {
  return (
    <div className='Input_bg'>
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <h2 className='input_h2'>Get on the newsletter.</h2>
                </div>
                <div className="col-lg-3 mt-3">
                    <input type="text" placeholder='FIRST NAME' className='Input_in' />
                </div>
                <div className="col-lg-3 mt-3">
                    <input type="text" placeholder='FIRST NAME' className='Input_in' />
                </div>
                <div className="col-lg-2 mt-3">
                    <button className='btn Input_in input_btn'>SUBSCRIBE</button>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Input
