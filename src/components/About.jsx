import React from 'react'
import hero from "../assets/about-hero.png"
import image1 from "../assets/about1.png"


function About() {
  return (
    <div className='py-36 flex flex-col items-center lg:py-44 px-10 lg:px-20'>
        
        
        <h2 className='text-6xl text-center font-extrabold'>About <span className='bg-gradient-to-br from-green-500 to-green-800 bg-clip-text text-transparent'>Us</span></h2>
        <h3 className='text-center text-xl lg:text-2xl text-zinc-700 pt-4'>A Team dedicated to your Child's Happiness</h3>
        <img className='pt-6 lg:pt-10 '  src={hero} alt="Team_image" />

        <div className='flex pt-10 justify-around items-center  w-full '>
          <img className="h-32 lg:h-96 " src={image1} alt="" />
          <div className='h-32 border py-2 px-4 border-zinc-300 lg:h-80 rounded-lg w-80 lg:w-2/3 bg-zinc-100'>
          <h1>Vision & Mission</h1>
          <p className='text-[8px] text-justify'>Dr. Priyanka Kalra, a distinguished Consultant Psychiatrist and a member of the Indian Association of Child and Adolescent Psychiatry, founded a center with a clear vision to provide a dedicated platform for children, adolescents, and parents. The mission is to reach out to every child who needs help, offering a sanctuary for consultations on various issues or challenges faced in daily life.</p>
          
          
          </div>


        </div>


    </div>
  )
}

export default About