import { useEffect, useState } from 'react';
import All_testimonials from '../All_testimonials/All_testimonials';
import './AllBlogs.css'

import ReactPlayer from 'react-player'
import axios from 'axios'
const AllBlogs = () => {
    const [blogsdata,setblogsdata] = useState([{heading:'',paragraph:'',imagelink:'',videolink:''}])
    const [currentblog,setcurrentblog] = useState(0);
    useEffect(()=>{
        axios.get('http://localhost:5000/allblogs')
        .then(
            res =>{
                console.log(res.data)
                setblogsdata(res.data)
            }
        )
    },[])
    const onNext = ()=>{
        if(currentblog < blogsdata.length-1)
        {
            setcurrentblog(currentblog + 1)
        }
    }
    const onPrev = ()=>{
        if(currentblog > 0)
        {
            setcurrentblog(currentblog - 1)
        }
    }
    return ( 
        <div className='AllBlogs'>
            <All_testimonials heading='All Blogs' text='Read All Blogs' />
            {
                <>
                    <div className='row m-0  p-md-5 mt-4 justify-content-center align-items-center'>
                        <div className="col-md-6 d-flex justify-content-center align-items-center">
                        {
                            blogsdata[currentblog].imagelink == '' ? <></> : 
                            <img src={blogsdata[currentblog].imagelink} className='col-md-6 col-11' />          
                        }</div>
                        <div className='col-md-6 blog mt-4'>
                            <h1 className=' text-start'>{blogsdata[currentblog].heading}</h1>                            
                            <p className=' lead textt'>{blogsdata[currentblog].paragraph}</p> 
                        </div>
                        <div className='col-md-6'>
                            {blogsdata[currentblog].videolink == '' ? <></> : 
                            <ReactPlayer url={blogsdata[currentblog].videolink} playing={true} width='100%'
                            height='100%' loop={true} />}
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-6 bbta">
                        <button className='sub_bt btbl' onClick={onPrev}>Prev</button>                   
                    <button className='sub_bt btbl' onClick={onNext}>Next</button>   
                        </div>
                    </div>
                                  
                </>
            }
        </div>
     );
}
 
export default AllBlogs;