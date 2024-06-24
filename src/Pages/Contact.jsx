import React, { useState } from 'react'
import sections_bg from '../Assets/sections_bg.png'
import AxiosInstance from '../Api/AxiosInstance';

function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      setErrorMessage('Please fill out all fields.');
      return;
    }

    try {
      setErrorMessage('');

      const response = await AxiosInstance.post('/create', formData);

      console.log('Form Data Submitted:', response.data);
    } catch (error) {
      console.error(error);
    }
  };

  
  return (
    <div className='overflow-x-hidden'>
<div className='flex-col bg-[#e3867f]' style={{height:"300px",display:"flex",justifyContent:"center",alignItems:'center'}}>
 
 <h1 
  className='text-4xl md:text-6xl uppercase font-extrabold mb-2 md:mb-4 text-white ' style={{fontFamily:'cursive'}}>contact
  </h1>

  <h1
  className='text-xl p-3 bg-yellow-600 rounded-xl text-white  'style={{fontFamily:'cursive'}}><b>Home - Contact</b>
  </h1>
  </div>


<div className='bg-slate-100'>
  <h1 className='capitalize text-2xl md:text-4xl text-[#12265a] font_fredoka font-semibold text-center pt-10 '>contact our <span className='text-pink-600'>kindergarten</span></h1>
   
  <form className=' row flex flex-wrap items-center lg:px-15 px-10'>
  
      <div className='col-lg-3 lg:px-20 p-5'>
          <div className='pb-5 pt-5'>
          <h1 className='text-2xl font-semibold text-[#12265a] font_fredoka'>Our Locations</h1>
          <p className='font_fredoka'>TGRA-38, Tagore Gardens, Kumarapuram,<br /> Medical College P.O., Thiruvananthapuram-695011</p>
          </div>
          <div className='pb-5'>
          <h1 className='text-2xl font-semibold  text-[#12265a] font_fredoka'>Phone Number</h1>
          <p className='font_fredoka'>7736965145 | 8086029291</p>
          </div>
          <div className='pb-5'>
          <h1 className='text-2xl font-semibold  text-[#12265a] font_fredoka'>Email Address</h1>
          <p className='font_fredoka'>info@tagorekindergarten.com</p></div>
      </div>

      <div className='col-lg-9 lg:p-20 p-5'>
  
         <div className='row pb-5'> 
         <input
            className='w-full m-1 p-2 rounded-xl outline-none'
            type='text'
            name='name'
            placeholder='Name'
            value={formData.name}
            onChange={handleChange}
            required

          />         
          
          </div>
  
        <div className='row pb-5'> 
        <input
            className='m-1 p-2 rounded-xl outline-none'
            type='number'
            name='phone'
            placeholder='Phone'
            value={formData.phone}
            onChange={handleChange}
            required
          />               
          <input
          className='mt-5 m-1 p-2 rounded-xl outline-none'
          type='email'
          name='email'
          placeholder='Email'
          value={formData.email}
          onChange={handleChange}
          required
        />
        </div>
  
         <div>
         <textarea
            className='w-full m-1 p-2 rounded-xl outline-none'
            name='message'
            placeholder='Message'
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
         </div>


        {errorMessage && (
          <div style={{ color: 'red', marginTop: '10px' }}>
            {errorMessage}
          </div>
        )}

         <button className='p-3 mt-5 m-1 rounded-xl font_fredoka' style={{backgroundColor:"purple",color:"white",fontSize:"15px"}}
         onClick={handleSubmit}><b>Send Message</b></button>
  
      </div>
  </form>
</div>

<div>

<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.810397644505!2d76.9295779!3d8.5177817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbfb33bcf943%3A0xb71de18d1346514e!2sTagore%20Kindergarten!5e0!3m2!1sen!2sin!4v1718863957571!5m2!1sen!2sin' style={{height:"500px", border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='w-full'/>

</div>

    </div>
  )
}

export default Contact