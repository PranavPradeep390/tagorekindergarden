import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import AxiosInstance from '../Api/AxiosInstance';

const Readmore = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
      const fetchEvents = async () => {
          try {
              const response = await AxiosInstance.get('/event');
              console.log(response.data.event); 
              setData(response.data.event);
          } catch (error) {
              console.error(error);
          }
      };
      
      fetchEvents();
  }, []);



  const { id } = useParams();
  const card = data.find(item => item.id === parseInt(id));

  if (!card) {
    return <div className='font_fredoka'>Card not found</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="bg-slate-100  rounded-lg shadow-lg overflow-hidden flex flex-wrap" >
        <div className="md:w-1/2 w-full">
          <img
            className="object-cover w-full h-full"
            src={`https://admin.tagorekindergarten.com/uploads/forms/${card.file}`}
            alt={card.title}
          />
        </div>
        <div className="p-6 md:w-1/2 w-full">
          <h1 className="text-xl font-semibold text-gray-800 mb-2 capitalize font_fredoka">{card.title}</h1>
          <p className="text-[#434445] mb-4 font_fredoka">{card.description}</p>
          <p className='text-[#434445] font_fredoka'>Posted On : "{card.date}"</p>

        </div>
      </div>

      <div className='text-center mt-5 capitalize font-semibold text-[#12265a] font_fredoka'>
       <Link to={'/events'}> go back</Link>
      </div>
    </div>
  );
};

export default Readmore;