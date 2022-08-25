import React from "react";
import testbg from "../Assets/testbg.jpg";
import "./test.css";
function All_testimonials({heading,text}) {
  return (
    <div>
      <div className="Main_bg">
        <div className="container">
          <div className="row">
            
              <div className="over">
              <div className="col-lg-4 margf">
                <h3 className="TER_head">{heading}</h3>
                <p className="TER_para">{text}</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default All_testimonials;
