import 'swiper/css';
import 'swiper/css/pagination';
import { CircularProgress } from '@mui/material';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
// import Rating from '../Components/Rating';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import school from '../Assets/school.jpg'
import { Link } from 'react-router-dom';
import './home.css'
import React, { useEffect, useRef, useState } from 'react';
import animals1 from '../Assets/animals1.png'
import animals2 from '../Assets/animals2.png'
import animals3 from '../Assets/animals3.png'
import home_about_pic from '../Assets/home_about_pic.jpeg'
import home_main from '../Assets/home_main.png'
import design1 from '../Assets/design1.png'
import elephant1 from '../Assets/elephant1.png'
import elephant2 from '../Assets/elephant2.png'
import elephant3 from '../Assets/elephant3.png'
import elephant4 from '../Assets/elephant4.png'
import elephant5 from '../Assets/elephant5.png'
import elephant6 from '../Assets/elephant6.png'
import why_choose_us_pic from '../Assets/why_choose_us_pic.png'
import RatingSwiper from '../Components/RatingSwiper';
import ExpertTeachers from '../Components/ExpertTeachers';
import AxiosInstance from '../Api/AxiosInstance';
import bg2 from '../Assets/bg2.jpg'


function Home() {

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: .5,
      });




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

  const limitedImages = data.slice(0, 8);


      const [isVisible, setIsVisible] = useState(false);
  const galleryRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
        }
      },
      { threshold: .6 } 
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }
    return () => {
      if (galleryRef.current) {
        observer.unobserve(galleryRef.current);
      }
    };
  }, []);



  return (
  <div className='overflow-x-hidden'> 

{/* home */}

<div className='w-full flex flex-wrap items-center justify-around pb-5' style={{backgroundImage:`url(${school})`,backgroundSize:"cover",backgroundPosition:"left"}}>

    <div className='text-center p-3 mt-20 sm:w-[600px] sm:text-left sm:ps-24'>
        <p className='text-xl'>
          <span className='text-green-500 font-semibold font_fredoka'>PLAY. </span>
          <span className='text-blue-500 font-semibold font_fredoka'>LEARN</span>
          <span className='text-green-500 font-semibold font_fredoka'>. GROW</span>
        </p>
        <h2 className='text-5xl capitalize font-bold text-blue-500 font_fredoka'>Tagore kindergarten and daycare
        </h2>
        <p className='text-center mt-2  sm:text-left font-light text-[#1d1d1d] text-xl font_fredoka'>Where every day is an adventure in learning
        </p>
       <div className='flex items-center justify-center gap-5 mt-7 sm:justify-start'>
            <div>
                <button className='p-2 w-28 bg-white rounded-3xl shadow-xl text-blue-500 font-semibold font_fredoka'><Link to={'/contact'}>Contact Us</Link></button>
            </div>
            <div>
                <button className='p-2 w-28  bg-blue-500 shadow-xl text-white rounded-3xl font-semibold font_fredoka'><Link to={'/about'}>About</Link></button >
            </div>
       </div>
    </div>
    
    <div className='mx-auto  sm:w-1/2'>
     <img src={home_main} alt="" srcset="" />
    </div>

</div>
 
{/* about portion */}

  <div className='w-full flex flex-wrap items-center justify-center bg-[#fafcff] p-10 md:gap-16'>
    <div className='border-2 border-dashed border-green-600 rounded-3xl '>
      <div>
        <img className='w-[360px] h-[230px] md:w-[500px] md:h-[380px] rounded-3xl relative top-5 left-5' src={home_about_pic} alt="" srcset="" />
      </div>


    </div>

    <div>
      <h1 className=' text-2xl md:text-4xl text-indigo-950 leading-snug mb-3 font-extrabold mt-8 md:mt-0 font_fredoka'>Explore <span className='text-blue-600'>Tagore Gardens</span> <br />
      Entertainment</h1>
      <p className='w-[300px] md:w-[450px] text-justify leading-relaxed mb-3 font-light text-[#3d3e41] font_fredoka'>Tagore Kindergarten is a pioneering educational institution dedicated to providing young learners with an exceptional learning experience through interactive, hands-on activities. The institution embraces a hybrid curriculum that combines Montessori methods with contemporary educational strategies, aiming to foster holistic development in children.</p>
      <button className='px-4 py-2 bg-yellow-400 text-white font-extrabold rounded-full hover:bg-blue-400 border-4 border-dotted border-white font_fredoka'><Link to={'/about'}>Know More</Link></button>
    </div>
  </div>
  <div className='w-full'><img src={design1} alt="" /></div>

{/* 3 cards */}

<hr className='h-2' />
  <div className='w-full flex flex-wrap items-center justify-center gap-6 py-16 bg-[#eeeeee]'>

 <div className=' w-[270px] h-[285px] md:w-[300px] md:h-[350px] bg-pink-400 rounded-3xl flex items-center justify-center'>

      <div className=' w-[230px] h-[245px] md:w-[250px] md:h-[305px] rounded-3xl p-4 border-2 border-white hover:border-4 border-dashed'>
        <img className='w-60 ms-1' src={animals1} alt="animal1" />
        <h1 className='text-center font-bold text-2xl md:text-3xl text-white mt-8  font_fredoka'>Playground</h1>
        <p className='text-center font-semibold text-white mt-3 hidden md:inline-block font_fredoka'>Helps children to develop motor skills, creativity, and social interaction.</p>
      </div>
 </div>

 <div className=' w-[270px] h-[285px] md:w-[300px] md:h-[350px] bg-blue-400 rounded-3xl flex items-center justify-center'>

      <div className=' w-[230px] h-[245px] md:w-[250px] md:h-[305px] rounded-3xl p-4 border-2 border-white hover:border-4 border-dashed'>
        <img className='w-52' src={animals2} alt="animal2" />
        <h1 className='text-center font-bold text-2xl md:text-3xl text-white mt-6  font_fredoka'>Entertainment</h1>
        <p className='text-center font-semibold text-white mt-3 hidden md:inline-block font_fredoka'>Support social and cognitive development, making learning fun and enjoyable.</p>
      </div>
 </div>

 <div className=' w-[270px] h-[285px] md:w-[300px] md:h-[350px] bg-yellow-400 rounded-3xl flex items-center justify-center'>

      <div className=' w-[230px] h-[245px] md:w-[250px] md:h-[305px] rounded-3xl p-4 border-2 border-white hover:border-4 border-dashed'>
        <img className='w-44 ms-2' src={animals3} alt="animal3" />
        <h1 className='text-center font-bold text-2xl md:text-3xl text-white mt-3  font_fredoka'>Enviroment</h1>
        <p className='text-center font-semibold text-white mt-3 hidden md:inline-block font_fredoka'>Environment is filled with bright colors and engaging activities.</p>
      </div> 
 </div>

  </div>
<hr className='h-2'/>


{/* classes part */}

  <div className='p-14'style={{backgroundColor:'#f2f6ff'}}>

      <div className='flex flex-col justify-center items-center'>

        <h1 className=' text-center sm:text-left text-2xl md:text-4xl mb-9 text-[#12265a] font-semibold font_fredoka'>Tagore Gardens Educational </h1>

        <p className='text-[#777a83] text-center mb-16 md:w-[1000px] hidden md:inline-block md:20 font_fredoka' style={{lineHeight:"1.7"}}>The institution embraces a hybrid curriculum that combines Montessori methods with contemporary educational strategies, aiming to foster holistic development in children and  guiding them to become the conscientious and capable citizens of tomorrow's world.</p>

      </div>

      <div className='flex flex-wrap gap-14 justify-between md:justify-around'>
        
        <div className='flex items-center gap-3'>
         <div>
           <img className='w-24 h-24' src={elephant3} alt="" />
        </div>
        <div>
            <h1 className='text-base  font-extrabold mb-2 text-[#12265a] font_fredoka'>Art Classes</h1>
            <p className='w-72 text-[#777a83] font-light leading-7 hidden md:inline-block font_fredoka'>Students explore various techniques to enhance creativity and artistic skills.</p>
        </div>
        </div>

        <div className='flex items-center gap-3'>
         <div>
           <img className='w-24 h-24' src={elephant2} alt="" />
        </div>
        <div>
            <h1 className='text-base  font-extrabold mb-2 text-[#12265a] font_fredoka'>Activity Rooms</h1>
            <p className='w-72 text-[#777a83] font-light leading-7 hidden md:inline-block font_fredoka'>Versatile spaces designed for engaging and interactive experiences.</p>
        </div>
        </div>

        <div className='flex items-center gap-3'>
         <div>
           <img className='w-24 h-24' src={elephant3} alt="" />
        </div>
        <div>
            <h1 className='text-base  font-extrabold mb-2 text-[#12265a] font_fredoka'>Education</h1>
            <p className='w-72 text-[#777a83] font-light leading-7 hidden md:inline-block font_fredoka'>Education empowers childs with knowledge and skills for growth.</p>
        </div>
        </div>

        <div className='flex items-center gap-3'>
         <div>
           <img className='w-24 h-24' src={elephant4} alt="" />
        </div>
        <div>
            <h1 className='text-base  font-extrabold mb-2 text-[#12265a] font_fredoka'>Languages</h1>
            <p className='w-72 text-[#777a83] font-light leading-7 hidden md:inline-block font_fredoka'>Provide a means of communication and cultural understanding.</p>
        </div>
        </div>

        <div className='flex items-center gap-3'>
         <div>
           <img className='w-24 h-24' src={elephant5} alt="" />
        </div>
        <div>
            <h1 className='text-base  font-extrabold mb-2 text-[#12265a] font_fredoka'>
            Birthday Party</h1>
            <p className='w-72 text-[#777a83] font-light leading-7 hidden md:inline-block font_fredoka'>A joyful celebration filled with fun, friends, and festivities.</p>
        </div>
        </div>

        <div className='flex items-center gap-3'>
         <div>
           <img className='w-24 h-24' src={elephant6} alt="" />
        </div>
        <div>
            <h1 className='text-base font-extrabold mb-2 text-[#12265a] font_fredoka'>Healthy Food</h1>
            <p className='w-72 text-[#777a83] font-light leading-7 hidden md:inline-block font_fredoka'>Essential for maintaining overall well-being and vitality.</p>
        </div>
        </div>
        

      </div>
  </div>

{/* progress bar */}

  <div style={{backgroundColor:'#f2f6ff'}}>
    <svg
      id="wave"
      style={{ transform: 'rotate(0deg)', transition: '0.3s' }}
      viewBox="0 0 1440 96"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
          <stop stopColor="rgba(209.931, 186.242, 218.941, 1)" offset="0%"></stop>
          <stop stopColor="rgba(121.302, 125.902, 205.281, 1)" offset="100%"></stop>
        </linearGradient>
      </defs>
      <path
        style={{ transform: 'translate(0, 0px)', opacity: 1 }}
        fill="url(#sw-gradient-0)"
        d="M0,40L12.6,40C25.3,40,51,40,76,43.3C101.1,47,126,53,152,61.7C176.8,70,202,80,227,80C252.6,80,278,70,303,65C328.4,60,354,60,379,55C404.2,50,429,40,455,40C480,40,505,50,531,60C555.8,70,581,80,606,75C631.6,70,657,50,682,43.3C707.4,37,733,43,758,43.3C783.2,43,808,37,834,40C858.9,43,884,57,909,60C934.7,63,960,57,985,46.7C1010.5,37,1036,23,1061,21.7C1086.3,20,1112,30,1137,33.3C1162.1,37,1187,33,1213,38.3C1237.9,43,1263,57,1288,65C1313.7,73,1339,77,1364,65C1389.5,53,1415,27,1440,28.3C1465.3,30,1491,60,1516,71.7C1541.1,83,1566,77,1592,76.7C1616.8,77,1642,83,1667,85C1692.6,87,1718,83,1743,68.3C1768.4,53,1794,27,1806,13.3L1818.9,0L1818.9,100L1806.3,100C1793.7,100,1768,100,1743,100C1717.9,100,1693,100,1667,100C1642.1,100,1617,100,1592,100C1566.3,100,1541,100,1516,100C1490.5,100,1465,100,1440,100C1414.7,100,1389,100,1364,100C1338.9,100,1314,100,1288,100C1263.2,100,1238,100,1213,100C1187.4,100,1162,100,1137,100C1111.6,100,1086,100,1061,100C1035.8,100,1011,100,985,100C960,100,935,100,909,100C884.2,100,859,100,834,100C808.4,100,783,100,758,100C732.6,100,707,100,682,100C656.8,100,632,100,606,100C581.1,100,556,100,531,100C505.3,100,480,100,455,100C429.5,100,404,100,379,100C353.7,100,328,100,303,100C277.9,100,253,100,227,100C202.1,100,177,100,152,100C126.3,100,101,100,76,100C50.5,100,25,100,13,100L0,100Z"
      ></path>
    </svg>
  </div>
  <div 
    
        ref={ref} 
        className='w-full p-8 md:p-4 text-white font-medium text-center flex flex-wrap items-center justify-evenly' style={{backgroundColor:'rgba(209.931, 186.242, 218.941, 1)'}}
      >
        
        <div className='w-full sm:w-1/2 md:w-1/4 p-2 m-2 md:m-0'>
          <div className='mx-auto rounded-full  relative flex items-center justify-center' style={{backgroundColor:"lightskyblue",height:"150px",width:"150px"}}>
            <CircularProgress  variant="determinate" value={inView ? 100 : 0} size={170} thickness={3} style={{ position: 'absolute', color: 'lavender'}} className='rounded-full shadow-2xl'/>
            <div className='absolute flex flex-col items-center'>
              <MilitaryTechIcon style={{color:"white"}}/>
              <p className='text-5xl'>
                {inView && <CountUp className='fontapply font-semibold ' end={4} duration={4} />}
              </p>
              <p className='font-light' style={{fontSize:"12px"}}>Years of <br />Excellence</p>
            </div>
          </div>
        </div>
  
        <div className='w-full sm:w-1/2 md:w-1/4 p-2 m-2 md:m-0'>
          <div className='mx-auto rounded-full  relative flex items-center justify-center' style={{backgroundColor:"lightskyblue",height:"150px",width:"150px"}}>
            <CircularProgress variant="determinate" value={inView ? 100 : 0} size={170} thickness={3} style={{ position: 'absolute', color: 'lavender'  }}  className='rounded-full shadow-2xl'/>
            <div className='absolute flex flex-col items-center'>
              <SchoolIcon style={{color:"white"}}/>
              <p className='text-5xl'>
              {inView && <CountUp className='fontapply font-semibold' end={3} duration={4} />}
              </p>
              <p className='font-light' style={{fontSize:"12px"}}>Qualified <br /> Teachers </p>
            </div>
          </div>
        </div>
  
        <div className='w-full sm:w-1/2 md:w-1/4 p-2 m-2 md:m-0'>
          <div className='mx-auto rounded-full  relative flex items-center justify-center' style={{backgroundColor:"lightskyblue",height:"150px",width:"150px"}}>
            <CircularProgress variant="determinate" value={inView ? 100 : 0} size={170} thickness={3} style={{ position: 'absolute', color: 'lavender'}}  className='rounded-full shadow-2xl'/>
            <div className='absolute flex flex-col items-center'>
              <PersonIcon style={{color:"white"}}/>
              <p className='text-5xl fontapply font-semibold'>
              {inView && <CountUp end={100} duration={4} />}+
              </p>
              <p className='font-light' style={{fontSize:"12px"}}>Students <br /> Enrolled</p>
            </div>
          </div>
        </div>
  
        <div className='w-full sm:w-1/2 md:w-1/4 p-2 m-2 md:m-0'>
          <div className='mx-auto rounded-full relative flex items-center justify-center' style={{backgroundColor:"lightskyblue",height:"150px",width:"150px"}}>
            <CircularProgress variant="determinate" value={inView ? 100 : 0} size={170} thickness={3} style={{ position: 'absolute', color: 'lavender'  }} className='rounded-full shadow-2xl' />
            <div className='absolute flex flex-col items-center'>
              <EmojiEventsIcon style={{color:"white"}}/>
              <p className='text-5xl'>
              {inView && <CountUp className='fontapply font-semibold' end={10} duration={4} />}
              </p>
              <p className='font-light' style={{fontSize:"12px"}}>Total <br /> Award</p>
            </div>
          </div>
        </div>
  
        
  </div>
    

{/* gallery */}

<div className='w-full' ref={galleryRef} style={{backgroundImage:`url(${bg2})`,backgroundSize:"contain"}}>
    <svg 
      id="wave" 
      style={{ transform: "rotate(180deg)", transition: "0.3s" }} 
      viewBox="0 0 1440 96" 
      version="1.1" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
          <stop stopColor="rgba(209.931, 186.242, 218.941, 1)" offset="0%"></stop>
          <stop stopColor="rgba(121.302, 125.902, 205.281, 1)" offset="100%"></stop>
        </linearGradient>
      </defs>
      <path 
        style={{ transform: "translate(0, 0px)", opacity: 1 }} 
        fill="url(#sw-gradient-0)" 
        d="M0,40L12.6,48.3C25.3,57,51,73,76,71.7C101.1,70,126,50,152,50C176.8,50,202,70,227,76.7C252.6,83,278,77,303,75C328.4,73,354,77,379,76.7C404.2,77,429,73,455,70C480,67,505,63,531,63.3C555.8,63,581,67,606,70C631.6,73,657,77,682,78.3C707.4,80,733,80,758,71.7C783.2,63,808,47,834,40C858.9,33,884,37,909,40C934.7,43,960,47,985,40C1010.5,33,1036,17,1061,20C1086.3,23,1112,47,1137,60C1162.1,73,1187,77,1213,76.7C1237.9,77,1263,73,1288,70C1313.7,67,1339,63,1364,66.7C1389.5,70,1415,80,1440,70C1465.3,60,1491,30,1516,15C1541.1,0,1566,0,1592,6.7C1616.8,13,1642,27,1667,31.7C1692.6,37,1718,33,1743,26.7C1768.4,20,1794,10,1806,5L1818.9,0L1818.9,100L1806.3,100C1793.7,100,1768,100,1743,100C1717.9,100,1693,100,1667,100C1642.1,100,1617,100,1592,100C1566.3,100,1541,100,1516,100C1490.5,100,1465,100,1440,100C1414.7,100,1389,100,1364,100C1338.9,100,1314,100,1288,100C1263.2,100,1238,100,1213,100C1187.4,100,1162,100,1137,100C1111.6,100,1086,100,1061,100C1035.8,100,1011,100,985,100C960,100,935,100,909,100C884.2,100,859,100,834,100C808.4,100,783,100,758,100C732.6,100,707,100,682,100C656.8,100,632,100,606,100C581.1,100,556,100,531,100C505.3,100,480,100,455,100C429.5,100,404,100,379,100C353.7,100,328,100,303,100C277.9,100,253,100,227,100C202.1,100,177,100,152,100C126.3,100,101,100,76,100C50.5,100,25,100,13,100L0,100Z"
      />
    </svg>
      <h1 className={`capitalize text-center text-2xl md:text-4xl font_fredoka font-semibold text-[#12265a]  py-5 ${isVisible ? 'animate-fade-in' : ''}`}>
       kindergarten gallery
        
      </h1>
      <p className='className=" text-[#777a83] font-light  px-36 text-center mb-10 hidden lg:block font_fredoka'>The kindergarten gallery is a vibrant, engaging space where young children can display their creative work. It showcases a variety of artwork, including colorful drawings, imaginative paintings, and handcrafted projects.</p>

      <div className='w-full flex flex-wrap items-center justify-center gap-3 md:gap-16 px-2 md:px-20'>

        {limitedImages.map((image, index) => (
          <div 
            key={index} 
            className={`md:border-l-8 border-green-300 rounded-2xl galleryhover ${isVisible ? 'animate-fade-in' : ''}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <img 
              src={`https://admin.tagorekindergarten.com/uploads/gallary/${image.name}`}
              alt={image.id} 
              className='h-[100px] w-[150px] md:h-[220px] md:w-[250px] rounded-lg shadow-lg' 
            />
          </div>
        ))}
      </div>

      <p className='text-center text-xl text-blue-700 m-5 font_fredoka'>
        <a href="/gallery">see more<ChevronRightIcon/></a>
      </p>
      <hr />
  </div>

{/* parents rating */}
  <RatingSwiper/>
<div className='w-full'><img src={design1} alt="" srcset="" /></div>



{/* exprt teachers */}
  <ExpertTeachers/>

{/* why choose us */}
  <div className='flex flex-wrap w-full row items-center bg-blue-200 py-10'>

    <h1 className='mx-auto text-2xl md:text-4xl mb-11 font-serif text-[#12265a] font-semibold font_fredoka'>Why Choose Us ? </h1>
    
     <div className='flex flex-wrap gap-14 justify-center'>
        
        <div className='flex items-center gap-3'>
         <div>
           <img className='w-24 h-24 hidden md:inline-block' src={elephant1} alt="" />
        </div>
        <div className='bg-white p-3 rounded-2xl'>
            <h1 className='text-xl md:text-2xl font-extrabold mb-2 text-[#12265a] font_fredoka'>Innovative Learning</h1>
            <p className='w-72 text-[#777a83] font-light leading-7 font_fredoka'>Fosters creativity and critical thinking approaches to education.</p>
        </div>
        </div>

        <div className='flex items-center gap-3'>
         <div>
           <img className='w-24 h-24 hidden md:inline-block' src={elephant2} alt="" />
        </div>
        <div className='bg-white p-3 rounded-2xl'>
            <h1 className='text-xl md:text-2xl font-extrabold mb-2 text-[#12265a] font_fredoka'>Safe Enviroment</h1>
            <p className='w-72 text-[#777a83] font-light leading-7 font_fredoka'>Ensures peace of mind and promotes well-being for everyone involved.</p>
        </div>
        </div>

        <div className='flex items-center gap-3'>
         <div>
           <img className='w-24 h-24 hidden md:inline-block' src={elephant3} alt="" />
        </div>
        <div className='bg-white p-3 rounded-2xl'>
            <h1 className='text-xl md:text-2xl font-extrabold mb-2 text-[#12265a] font_fredoka'>Experienced Educators</h1>
            <p className='w-72 text-[#777a83] font-light leading-7 font_fredoka'>Bring extensive knowledge and insight to  guide students' learning journeys.</p>
        </div>
        </div>

        <div className='flex items-center gap-3'>
         <div>
           <img className='w-24 h-24 hidden md:inline-block' src={elephant4} alt="" />
        </div>
        <div className='bg-white p-3 rounded-2xl'>
            <h1 className='text-xl md:text-2xl font-extrabold mb-2 text-[#12265a] font_fredoka'>Cultural Diversity</h1>
            <p className='w-72 text-[#777a83] font-light leading-7 font_fredoka'>Enriches communities by bringing different perspectives, and experiences.</p>
        </div>
        </div>

        <div className='flex items-center gap-3'>
         <div>
           <img className='w-24 h-24 hidden md:inline-block' src={elephant5} alt="" />
        </div>
        <div className='bg-white p-3 rounded-2xl'>
            <h1 className='text-xl md:text-2xl font-extrabold mb-2 text-[#12265a] font_fredoka'>
            Interactive Learning</h1>
            <p className='w-72 text-[#777a83] font-light leading-7 font_fredoka'>Engages childs through participation and understanding of knowledge.</p>
        </div>
        </div>

        <div className='flex items-center gap-3'>
         <div>
           <img className='w-24 h-24 hidden md:inline-block' src={elephant6} alt="" />
        </div>
        <div className='bg-white p-3 rounded-2xl'>
            <h1 className='text-xl md:text-2xl font-extrabold mb-2 text-[#12265a] font_fredoka'>Valued Education</h1>
            <p className='w-72 text-[#777a83] font-light leading-7 font_fredoka'> Empowers individuals with knowledge, skills beneficial throughout their lives.</p>
        </div>
        </div>
        

      </div>

  </div>

  <div className='bg-blue-200'><img src={why_choose_us_pic} alt="" srcset="" /></div>



  </div>
  )
}

export default Home