import React, { useEffect, useState } from 'react'
import NewsEventsCard from '../Components/NewsEventsCard'
import sections_bg from '../Assets/sections_bg.png'
import bg2 from '../Assets/bg2.jpg'

function Newsevents() {

  return (
    <div className='overflow-x-hidden' style={{ backgroundImage:` url(${bg2})`}}>
    <div>
    <div className='flex-col bg-[#e3867f]' style={{height:"300px",display:"flex",justifyContent:"center",alignItems:'center'}}>
 
   <h1 
    className='text-4xl md:text-6xl uppercase font-extrabold mb-2 md:mb-4 text-white ' style={{fontFamily:'cursive'}}>News & Events
    </h1>
  
    <h1
    className='text-xl p-3 bg-yellow-600 rounded-xl text-white  'style={{fontFamily:'cursive'}}><b>Home - News & Events</b>
    </h1>
    </div>

    <div className='p-14'>
    <h1 className='font_fredoka text-[#12265a] text-center text-2xl md:text-4xl capitalize mb-8' >explore kindergarten's news & events</h1>

      <NewsEventsCard/>
      
    </div>
    

    </div>

    </div>
  )
}

export default Newsevents