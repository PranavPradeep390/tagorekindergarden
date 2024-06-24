import React from 'react'
import Card2 from '../Components/Card2';



function ExpertTeachers() {
  return (
    <div>
         <div className='md:px-36 px-10'>
  <div className='flex flex-col justify-center items-center'>
    <h1 className=' text-center sm:text-left text-2xl md:text-4xl mb-5 mt-9 text-[#12265a] font-semibold font_fredoka'>Expert Teachers</h1>
    <p className="text-[#777a83] font_fredoka  text-center mb-10 hidden lg:block">Kindergarten expert teachers are skilled professionals dedicated to early childhood education. They create nurturing and stimulating environments, using their expertise to foster children's cognitive, social, and emotional development. Their specialized training enables them to design engaging activities that promote learning through play and exploration.</p>
    </div>
  <Card2/>
  </div>
    </div>
  )
}

export default ExpertTeachers