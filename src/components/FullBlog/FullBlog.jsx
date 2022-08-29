import React from 'react'
import "./FullBlog.css"
import men from '../Assets/men.jpg'
import video from '../Assets/video.mp4'

function FullBlog() {
  return (
    <div className=''>
        <div className="container-fluid Main_fblog">
            <div className="row justify-content-center">
                <div className="col-md-6 mt-5">
                    <img src={men} alt="" className='full_men' />

                </div>
                <div className="col-md-6 mt-5">
                    <h2>hello text-truncatetext-truncatetext-truncatetext-truncatetext-truncatetext-truncatetext-truncatetext-truncatetext-truncatetext-truncatetext-truncatetext-truncate
                </h2>
                <p className='left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis accusamus eius, eveniet dignissimos et reiciendis tempore, sed quae molestiae quod explicabo velit alias fuga repellendus autem quaerat, laudantium ipsam cumque.</p>
                <p className='left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis accusamus eius, eveniet dignissimos et reiciendis tempore, sed quae molestiae quod explicabo velit alias fuga repellendus autem quaerat, laudantium ipsam cumque.</p>
                <p className='left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis accusamus eius, eveniet dignissimos et reiciendis tempore, sed quae molestiae quod explicabo velit alias fuga repellendus autem quaerat, laudantium ipsam cumque.</p>
            <p className='left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis accusamus eius, eveniet dignissimos et reiciendis tempore, sed quae molestiae quod explicabo velit alias fuga repellendus autem quaerat, laudantium ipsam cumque.</p>
                </div>
            </div>
        </div>
        <div className="container pb-4">
            <div className="row justify-content-center mt-4">
                <div className="col-md-12">
                    <div >
                    <video className="video" src={video}></video></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export  default FullBlog
