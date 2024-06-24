import React, { useEffect, useState } from 'react';
import AxiosInstance from '../Api/AxiosInstance';

const itemsPerPage = 12;


function ImageGrid() {

    const [expanded, setExpanded] = useState({});

const [data, setData] = useState([]);

  useEffect(() => {
      const fetchEvents = async () => {
          try {
              const response = await AxiosInstance.get('/gallery');
              console.log(response.data.photos); 
              setData(response.data.photos);
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
                    <div className='w-[300px] h-[345px] md:w-[300px] md:h-[300px] hover:border-dashed hover:border-slate-300 border-8 border-white-900 rounded-xl' key={index}>

    <img className='w-full h-full rounded' src={`https://admin.tagorekindergarten.com/uploads/gallary/${event.name}`} alt={event.id} />

                    </div>
                ))}
            </div>


            <div className='mt-4 flex'>
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

export default ImageGrid;
