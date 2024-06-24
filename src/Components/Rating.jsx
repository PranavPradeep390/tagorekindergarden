import React from 'react';

function Rating({ image, name, designation, description,date }) {
  return (
    <div className='w-[250px] h-[350px] lg:w-[300px] lg:h-[400px]  rounded-2xl text-center p-6 mx-auto m-5 border-t-4 border-y-4 border-green-400 relative'style={{backgroundColor:"#ebeef2"}}>

        <div>
            <p className='text-xl mb-1 font_fredoka'>
                {name}
            </p>
        </div>
        <div className='mt-1 md:mt-7 flex flex-wrap md:gap-7 items-center justify-center'>
           <div className=''>
                <img className='rounded-full w-14 h-14 mx-auto ' src={image} alt="na" />              
                <p className='font_fredoka'>{designation}</p>
           </div>
           <div className=''>
                
                <p className='bg-white p-2  rounded-2xl font_fredoka w-60 '>"{description}"</p>
                {/* <ChatBubbleIcon className=''/> */}
           </div>
           <p className='absolute text-zinc-400 bottom-4 font-light font_fredoka'>{date}</p>

        </div>
    </div>
  );
}

export default Rating;