import React from 'react'
import Hh_btn from '../Hh_btn/Hh_btn'
import Hh_help from '../Hh_help/Hh_help'
import Home_header from '../Home_header/Home_header'
import Hh_pics from '../Hh_pics/Hh_pics'
import Mb_home from '../Mb_home/Mb_home'
import H_video from '../H_video/H_video'
import Main_t from '../Main_t/Main_t'
import Shop from '../Shop/Shop'
import Pics_box from '../Pics_box/Pics_box'
import Input from '../Input/Input'
import Top_footer from '../Top_footer/Top_footer'
import Sub_footer from '../Sub_footer/Sub_footer'

function Main_home() {
  return (
    <div>
<Home_header/>
<Hh_btn/>
<Hh_help/>
<Hh_pics/>
<Mb_home/>
<H_video/>
<Main_t/>
<Shop/>
<Pics_box/>

    </div>
  )
}

export default Main_home
