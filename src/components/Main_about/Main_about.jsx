import React from 'react'
import About_about from '../About_about/About_about'
import About_btn from '../About_btn/About_btn'
import About_pic from '../About_pic/About_pic'
import About_ser from '../About_services/About_ser'
import Boxes from '../Boxes/Boxes'

import Header_about from '../Header_about/Header_about'
import Input from '../Input/Input'
import Physio from '../Physio/Physio'
import Pics_box from '../Pics_box/Pics_box'
import Sub_footer from '../Sub_footer/Sub_footer'
import Top_footer from '../Top_footer/Top_footer'



function Main_about() {
  return (
    <div>
      <Header_about/>
      <About_btn/>
      <About_about/>
      <About_pic/>
      <About_ser/>
      <Physio/>
      <Boxes/>
      <Pics_box/>
    
      
    </div>
  )
}

export default Main_about
