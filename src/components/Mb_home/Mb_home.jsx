import React from "react";
import "./Mb_home.css";
import left from "../Assets/left.png";
import right from "../Assets/right.png";

function Mb_home() {
  return (
    <div className="Mb_mainbg">
        <div className="container-fluid">
      <div className="row m-0 mb_row">
<div className="col-lg-3 p-0">
    <img src={left}  className='mb_img'alt="" />
</div>
<div className="col-lg-3 -0">
    <div className="mb_txt">
        <h3 className="left">Online Training</h3>
        <p className="left">We work with clients all over the world by offering a wide variety of online programs through The Physio Fix app. We are continuously adding more and revamping existing programs, so no matter what you want to work on, we can ensure the right fit for your goals, access to equipment, and schedule!</p>
        <button className="Hhh1_btn">CHECK OUT THE PROGRAMS</button>
    </div>
</div>
<div className="col-lg-3 p-0">
    <img src={right} className='mb_img' alt="" />
</div>

      </div>
      </div>
       
    </div>
  );
}

export default Mb_home;
