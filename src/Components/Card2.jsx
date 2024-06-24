import React from 'react';
import userdummy from '../Assets/userdummy.webp'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const dummyData = [
  {
    id: 1,
    imageUrl:userdummy,
    title: 'Bushra B.A.',
    description: 'Principal',
    phone: 7736965145,
    qualification:'B.sc ,B.Ed',
    experience :"25 years experience in India & Abroad"
  },
  {
    id: 2,
    imageUrl: userdummy,
    title: 'Monisha Suresh',
    description: 'Teacher',
    phone: 7994598832,
    qualification:"B.A history, Montessori diploma course ",
    experience :"1 year oxford kids kamaleshwaram, 1year Tagore kindergarten Medical College "
  },
  {
    id: 3,
    imageUrl:userdummy,
    title: 'Saleema L',
    description: 'Teacher',
    phone: 8714834800,
    qualification:"BA public administration Montessori diploma course ",
    experience :"4yeares caterpillar kindergarten.Anayara, 1 year Little Angels Anayara"
  },
  {
    id: 4,
    imageUrl: userdummy,
    title: 'Nisa Naser',
    description: 'Teacher',
    phone: 9847554742,
    qualification:"BA English Montessori ppctcc",
    experience :"11 year Al Ameen school.kollam, 1 year Green Dom Balaramapuram, 1 year Alif school kamaleshwaram, 1year Tagore kindergarten Medical College"
  },
];

function Card() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {dummyData.map((data) => (
        <div key={data.id} className="bg-white rounded-lg overflow-hidden">
          <div className="relative h-56 p-1">
            <img
              className="w-63% h-full mx-auto rounded-3xl"
              style={{ backgroundSize: "cover", backgroundPosition: "center" }}
              src={data.imageUrl}
              alt={data.title}
            />
          </div>
          <div className="p-2">
            <h1 className="text-xl text-center font-semibold text-[#12265a] mb-1 font_fredoka">
              {data.title} 
            </h1>
            <p className="text-gray-800 mb-4 text-center font_fredoka">{data.description}</p>

          <div className='hidden md:inline-block h-[120px]'>
              <p className="font_fredoka text-[#12265a] mb-4 text-center"><LocalPhoneIcon/> {data.phone}</p>
              <p className="font_fredoka text-gray-700 mb-4 ms-5 "><span  className='text-[#12265a]'>Qualification : </span>{data.qualification}</p>
          </div>
                <p className="font_fredoka text-gray-700 mb-4 ms-5 hidden md:inline-block">
                <span className='text-[#12265a]' >Experience : </span>{data.experience}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
