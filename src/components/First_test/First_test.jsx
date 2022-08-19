import React from 'react'
import"./First_test.css"
import  first from "../Assets/first.jpg"

function First_test() {
  return (
    <div className='First_testbg'>
      <div className="container">
        <div className="row">
            <div className="col-lg-4">
                <img className='f_img' src={first} alt="" />

            </div>
            <div className="col-lg-8">
                <p className='first_para'>
                    <span>Stacie’s mobility program is easy to follow and takes no longer than 45 min to complete 3-4 days a week (most even shorter- and I take my time and go slow so that’s saying something!) not only are they perfect to squeeze into a busy schedule but I genuinely ENJOY doing them, I can get out if my comfort zone and scale back when I need to.</span>
                </p>
                <p className='first_para'>
                    <span>Stacie’s mobility program is easy to follow and takes no longer than 45 min to complete 3-4 days a week (most even shorter- and I take my time and go slow so that’s saying something!) not only are they perfect to squeeze into a busy schedule but I genuinely ENJOY doing them, I can get out if my comfort zone and scale back when I need to.</span>
                </p>
                <p className='first_para'>
                    <span>Stacie’s mobility program is easy to follow and takes no longer than 45 min to complete 3-4 days a week (most even shorter- and I take my time and go slow so that’s saying something!) not only are they perfect to squeeze into a busy schedule but I genuinely ENJOY doing them, I can get out if my comfort zone and scale back when I need to.</span>
                </p>
                <h3 className='left Cls'>- E.M. IN MICHIGAN</h3>
                <h4 className='left fs-6'>MOBILITY PROGRAM</h4>
            </div>
        </div>
      </div>
    </div>
  )
}

export default First_test
