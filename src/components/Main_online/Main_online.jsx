import React from 'react'
import About_ser from '../About_services/About_ser'
import Custom from '../Custom/Custom'
import Main_t from '../Main_t/Main_t'
import Online from '../Online/Online'
import Online_btn from '../Online_btn/Online_btn'
import Va from '../Va/Va'

function Main_online() {
  return (
    <div >
      <Online/>
      <Online_btn/>
      <Va/>
      <Custom/>
      <Custom/>
      <About_ser/>
      <Main_t/>
    </div>
  )
}

export default Main_online
