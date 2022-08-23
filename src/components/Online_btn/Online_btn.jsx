import React from 'react'
import "./Online_btn.css"

function Online_btn() {
  return (
    <div>
 <div className="container-fluid">
    <div className="row">
        <div className="col-lg-4 p-0">
        <button className='btn  online_btn'>video appoinment</button>
        </div>
        <div className="col-lg-4 p-0">
        <button className='btn  online_btn ca'>Custom Programming</button>
        </div>
        <div className="col-lg-4 p-0">
        <button className='btn online_btn'>Training and (P)re-hab Programs</button>
        </div>
    </div>
 </div>
    </div>
  )
}

export default Online_btn
