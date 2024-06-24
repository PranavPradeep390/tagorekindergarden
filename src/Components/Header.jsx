
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import Tagorelogo from '../Assets/Tagorelogo.jpg';

function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className='min-h-[100px] grid sm:grid-cols-12 sm:w-auto w-full'>
        {/* titleSection */}
        <div className='flex sm:justify-start items-center sm:p-4 justify-between p-4 sm:col-span-5'>
          <a href="/" className="elementor-widget-cmsmasters-site-logo__link" rel="nofollow">
            <img  src={Tagorelogo}  alt=""
              title="Tagorelogo"
              className="cmsmasters-lazyload-disabled elementor-widget-cmsmasters-site-logo__img elementor-widget-cmsmasters-site-logo-main w-14 h-14"/>
          </a>
          <div className='ms-0 md:ms-5'>
            <p className='text-3xl font_fredoka font-bold text-blue-500'>Tagore</p>
            <p className='font-bold font_fredoka'>kindergarten and daycare</p>
          </div>
          <div className='sm:hidden'>
            <button onClick={toggleMenu}>
              {isOpen ? <FaTimes className='text-2xl' /> : <FaBars className='text-2xl' />}
            </button>
          </div>
        </div>

        {/* navlinkssection */}
        <div className={`mb-5 flex-col gap-5 space-y-4 sm:space-y-0 sm:flex-row sm:space-x-10 md:justify-center justify-start items-center sm:flex ${isOpen ? 'flex' : 'hidden'} sm:block sm:p-4 sm:col-span-7`}>
          <Link to="/" onClick={closeMenu}>
            <h3 className={`text-lg font-bold font_fredoka hover:text-blue-500 ${location.pathname==="/"?"text-blue-500":" "}`}>Home</h3>
          </Link>
          <Link to='/about' onClick={closeMenu}>
            <h3 className={`text-lg font-bold font_fredoka hover:text-blue-500 ${location.pathname==='/about'?"text-blue-500":" "}`}>About</h3>
          </Link>
          <Link to='/events' onClick={closeMenu}>
            <h3 className={`text-lg font-bold font_fredoka hover:text-blue-500 ${location.pathname==='/events'?"text-blue-500":" "}`}>Events</h3>
          </Link>
          <Link to='/gallery' onClick={closeMenu}>
            <h3 className={`text-lg font-bold font_fredoka hover:text-blue-500 ${location.pathname==='/gallery'?"text-blue-500":" "}`}>Gallery</h3>
          </Link>
          <Link to='/contact' onClick={closeMenu}>
            <h3 className={`text-lg font-bold font_fredoka hover:text-blue-500 ${location.pathname==='/contact'?"text-blue-500":" "}`}>Contact</h3>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
