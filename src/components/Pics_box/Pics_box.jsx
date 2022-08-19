import React from 'react'
import "./Pics.css"
import men from "../Assets/men.jpg"
import women from "../Assets/women.jpg"
import w1 from "../Assets/w1.jpg"

function Pics_box() {
  return (
    <div className='Pics_bg'>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-2 p-0 br">
                <div className="cont">
  <img src={men} alt="Avatar" className="image"/>
  <div className="overlay">
    <div className="text">Dr. Nathan Wong</div>
  </div>
</div>
                </div>
                <div className="col-lg-2 p-0 br">
                <div className="cont">
  <img src={women} alt="Avatar" className="image"/>
  <div className="overlay">
    <div className="text">Dr. Hailey Kaus</div>
  </div>
</div>
                </div>
                <div className="col-lg-2 p-0 br">
                <div className="cont">
  <img src={w1} alt="Avatar" className="image"/>
  <div className="overlay">
    <div className="text">Dr. Stacie Barber</div>
  </div>
</div>
                </div>
                <div className="col-lg-2 p-0 br">
                <div className="cont">
  <img src={w1} alt="Avatar" className="image"/>
  <div className="overlay">
    <div className="text">Dr. Stacie Barber</div>
  </div>
</div>
                </div>
                <div className="col-lg-2 p-0 br">
                <div className="cont">
  <img src={women} alt="Avatar" className="image"/>
  <div className="overlay">
    <div className="text">Dr. Hailey Kaus</div>
  </div>
</div>
                </div> <div className="col-lg-2 p-0 br">
                    <div className="card card_pics">
                        <div className="card-body py-2">
  
                            <h5 className='Pic_h5 mt-3  mb-2'>
                                MEET THE <br />  TEAM
                            </h5> 
                            
                             <button className='btn pics_btn mt-2'>About us</button> 


                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Pics_box
