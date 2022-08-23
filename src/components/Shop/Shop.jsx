import React from 'react'
import "./Shop.css"
import shop from "../Assets/shop.jpg"

function Shop() {
  return (
    <div className='Shop_mbg'>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
<img src={shop} className='s_img' alt="" />
                </div>
                <div className="col-lg-6 shop_mr">
                    <h2 className='shop_h left'>RECOMMENDED PRODUCTS, MERCH AND THE INSTAGRAM COURSE!</h2>
                    <p className='text-white left'>Check out The Physio Fix swag, products we love, and get the inside scoop on how to grow your Instagram following authentically below!</p>
                <button className='btn btn_v'>check out the shop</button>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Shop
