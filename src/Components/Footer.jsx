import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import NavigationOutlinedIcon from '@mui/icons-material/NavigationOutlined';
import footer1 from '../Assets/footer1.png'


function Footer() {

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' 
      });
    };
  return (
    <>
   <div className='bg-slate-100 w-full'>
     
        <hr style={{color:"black"}}/>
        <div className='flex flex-wrap ps-10 md:ps-40 pe-10 pt-10 w-full'>
          
              <div className=' w-full sm:w-1/2 lg:w-1/4 mb-4 p-3 mx-auto ' style={{lineHeight:"1.7rem"}}>
                <div>
                  <p className='capitalize text-2xl font-semibold text-[#12265a] font_fredoka'>Tagore kindergarten <br />and daycare </p>
                  <p className='text-justify mt-2 text-base font-medium text-[#12265a] font_fredoka'>Where every day is an adventure in learning.</p>
                </div>
                </div>
                
              

              <div className=' w-full sm:w-1/2 lg:w-1/4 mb-4 p-3 mx-auto' style={{lineHeight:"2rem"}}>
                <ul className='lg:ps-9 text-[#444547] font_fredoka'>
                  <li className='text-[#12265a] '><b>All Programs</b></li>
                  <li>Kindergarten</li>
                  <li>Preschool</li>
                  <li>Kids Activity Club</li>
                  <li>Summer Camp</li>
                </ul>
              </div>
              <div className=' w-full sm:w-1/2 lg:w-1/4 mb-4 p-3 mx-auto font_fredoka' style={{lineHeight:"2rem"}}>
                <ul className='text-[#444547]'>
                  <li className='text-[#12265a]  '><b>Why Choose Tagore KG?</b></li>
                  <li>Innovative Learning</li>
                  <li>Safe & Nurturing Environment</li>
                  <li>Experienced Educators</li>
                  <li>Interactive Learning</li>
                  <li>Cultural Diversity</li>
                </ul>
              </div>
              <div className='w-full sm:w-1/2 lg:w-1/4 p-3 mx-auto font_fredoka' style={{lineHeight:"2rem"}}>
                <ul className='text-[#444547]'>
                  <li className='text-[#12265a] '><b>Contact Info</b></li>
                  <li>8086029291</li>
                  <li>7736965145</li> 
                  <li>Kumarapuram, Medical College P.O., Thiruvananthapuram-695011</li>
                </ul>
              </div>
        </div>
        <div className='mt-[-40px] md:mt-[-160px]'>
          <img src={footer1} alt="" srcset="" />
        </div>
        
      <div className='w-full bg-sky-600 h-24 flex flex-wrap items-center justify-around text-white font-semibold relative'>

          <div>
            <p className='font_fredoka text-center font-light'> © 2024 A2Zalphabetsolutionz - All Rights Reserved.</p>
          </div>

          <div className='w-full sm:w-[150px] text-center text-white'>
                      <a href="https://www.facebook.com/profile.php?id=100091437105116&mibextid=ZbWKwL" target="_blank">
                      <FacebookIcon style={{fontSize:"26px"}} className='ms-2 hover:text-slate-500'/>
                      </a>
                      <WhatsAppIcon style={{fontSize:"26px"}} className='ms-2 me-2 hover:text-slate-500'/>
                     <a href="https://www.instagram.com/tagorekinder?igsh=Znc1Nm85NDZ1Y3d4" target="_blank"> <InstagramIcon style={{fontSize:"26px"}} className='me-2 hover:text-slate-500'/></a>
                      <YouTubeIcon style={{fontSize:"26px"}} className='hover:text-slate-500'/>
          </div>
      
          <div className='flex gap-6 items-center'>
            <div>
              <p className='font_fredoka font-light'>Terms & Conditions Privacy Policy</p>
            </div>
            <div>
              <button className='w-12 h-10 rounded-lg bg-blue-500 absolute right-4 bottom-7 font_fredoka' onClick={scrollToTop}>
              <NavigationOutlinedIcon/>
              </button>
            </div>
          </div> 

      </div>
       
   </div>
    </>
  )
}
export default Footer