import React, { useEffect, useState } from 'react';
import AxiosInstance from '../Api/AxiosInstance';
import { Link } from 'react-router-dom';

const itemsPerPage = 6;

function NewsEventsCard() {

    const [expanded, setExpanded] = useState({});

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

const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = data.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className='flex flex-col items-center'>
            <div className='flex flex-wrap gap-6 items-center justify-center'>
                {currentItems.map((event, index) => (
                    <div className='w-[330px] h-[385px] md:w-[400px] md:h-[400px] border-8 border-white-900 rounded-xl' key={index}>

                        <img className='w-full h-1/2 rounded-t-xl' src={`https://admin.tagorekindergarten.com/uploads/forms/${event.file}`} alt={event.title} />

                        <div className='p-4'>
                            <p className='font-bold text-lg capitalize mb-4 font_fredoka'>{event.title}</p>

                            <p className="text-[#434445] mb-4 font_fredoka">
                            {expanded[index] ? event.description : `${event.description.slice(0, 100)}`}
                            {event.description.length > 100 && (
                            <Link to={`/readmore/${event.id}`} className="text-blue-500 cursor-pointer font_fredoka">
                                &nbsp; Read more
                            </Link>
                            )}
                            </p>

                            <p className='text-[#434445] font_fredoka'>Posted On : "{event.date}"</p>
                        </div>

                    </div>
                ))}
            </div>


            <div className='mt-4'>
                <button onClick={handlePrevPage} disabled={currentPage === 1} className='px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50 mr-2 font_fredoka'>
                    Previous
                </button>
                <button onClick={handleNextPage} disabled={currentPage === totalPages} className='px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50 font_fredoka'>
                    Next
                </button>
            </div>

        </div>
    );
};

export default NewsEventsCard;
