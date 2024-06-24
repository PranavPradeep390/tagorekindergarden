
import React from 'react'
import ImageGrid from '../Components/ImageGrid'
import sections_bg from '../Assets/sections_bg.png'
import bg2 from '../Assets/bg2.jpg'


function Gallery() {
  return (
    <div className='overflow-x-hidden' style={{ backgroundImage:` url(${bg2})`}}>

<div className='flex-col bg-[#e3867f]' style={{height:"300px",display:"flex",justifyContent:"center",alignItems:'center'}}>
 
 <h1 
  className='text-4xl md:text-6xl uppercase font-extrabold mb-2 md:mb-4 text-white ' style={{fontFamily:'cursive'}}>gallery
  </h1>

  <h1
  className='text-xl p-3 bg-yellow-600 rounded-xl text-white  'style={{fontFamily:'cursive'}}><b>Home - Gallery</b>
  </h1>
  </div>
<div className='px-24 py-8'>
  <h1 className='font_fredoka text-[#12265a] text-center text-2xl md:text-4xl capitalize mb-8 ' >explore kindergarten's gallery</h1>
  <ImageGrid/>
  </div>
  </div>
  )
}

export default Gallery