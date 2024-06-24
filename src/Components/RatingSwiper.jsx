import React, { useEffect, useState } from 'react';
import Rating from '../Components/Rating';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import shape_bg from '../Assets/shape_bg.png'
import AxiosInstance from '../Api/AxiosInstance';


function RatingSwiper() {
      
const [data, setData] = useState([]);

 useEffect(() => {
    const fetchEvents = async () => {
        try {
            const response = await AxiosInstance.get('/testmonials');
            console.log(response.data.partners); 
            setData(response.data.partners);
        } catch (error) {
            console.error(error);
        }
    };
    
    fetchEvents();
  }, []);

  return (
    <div>

<div className='mt-9 px-6 ' style={{backgroundImage:`url(${shape_bg})`}}>

  <h1 className='text-center capitalize text-2xl md:text-4xl text-[#12265a] font-semibold font_fredoka'>parents are saying</h1>
    <Swiper
      modules={[Autoplay]}
      spaceBetween={37}
      autoplay={{ delay: 2000 }}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
    >
      {data.map((data, index) => (
        <SwiperSlide key={index}>
          <Rating
            image={`https://admin.tagorekindergarten.com/uploads/testmonial/${data.image}`}
            name={data.name}
            designation={data.designation}
            description={data.description}
            date={data.date}
          />
        </SwiperSlide>
      ))}
    </Swiper>
   
</div>
    

    </div>
  )
}

export default RatingSwiper