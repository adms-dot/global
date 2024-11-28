import React from 'react'
import contact from "../assets/contact.png"

function Contact() {
  return (
    <div className='py-36 text-justify lg:py-40 px-10 flex flex-col  lg:px-20'>
      <div className='flex justify-center items-center'>
        <img className='h-20 lg:h-32' src={contact} alt="" />
        <h2 className='text-5xl lg:text-6xl tracking-tight font-extrabold text-center'>Contact <span className='bg-gradient-to-br from-green-500 to bg-green-800 bg-clip-text text-transparent'>Us</span></h2>
      </div>

      <h3 className='text-zinc-700 text-sm pt-4 lg:text-xl'>Thank you for your interest in our psychiatric services in Ludhiana. We are dedicated to providing compassionate and professional mental health care to individuals in need. If you have any questions, concerns, or would like to schedule an appointment, please feel free to get in touch with us using the contact information provided below.</h3> 
      <h2 className='pt-4 font-bold text-xl lg:text-2xl'>Care Hours</h2>
      
      
      <div className='flex w-full justify-between lg:justify-start'>

      <div  className='w-36 rounded-lg bg-gradient-to-br from-[#608DFF] to-[#042066] h-12'></div>
      <div className='w-36 bg-zinc-100 rounded-lg h-12 border'></div>
      </div>



    </div>
  )
}

export default Contact