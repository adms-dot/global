import React from 'react'
import hero from "../assets/about-hero.png"
import image1 from "../assets/about1.png"
import image2 from "../assets/about2.png"
import image3 from "../assets/about3.png"


function About() {
  return (
    <div className='pt-36  flex flex-col items-center lg:py-40 px-10 lg:px-20'>
        
        
        <h2 className='text-5xl lg:text-6xl text-center font-extrabold'>About <span className='bg-gradient-to-br from-green-500 to-green-800 bg-clip-text text-transparent'>Us</span></h2>
        <h3 className='text-center text-xl lg:text-2xl text-zinc-700 pt-4'>A Team dedicated to your Child's Happiness</h3>
        <img className='pt-6 lg:pt-10 '  src={hero} alt="Team_image" />

        <div className='flex pt-10 justify-evenly items-center  w-full '>
          <img className="h-32 lg:h-96 " src={image1} alt="" />
          <div className='h-32 border py-2 px-4 lg:py-4 lg:px-6 border-zinc-300 lg:h-80 rounded-lg w-80 lg:w-1/2 bg-zinc-100'>
          <h1 className='font-semibold lg:text-4xl text-center'>Vision & Mission</h1>
          <p className='text-[8px] tracking-tight lg:text-xl lg:pt-4 text-zinc-700 text-justify'>Dr. Priyanka Kalra, a distinguished Consultant Psychiatrist and a member of the Indian Association of Child and Adolescent Psychiatry, founded a center with a clear vision to provide a dedicated platform for children, adolescents, and parents. The mission is to reach out to every child who needs help, offering a sanctuary for consultations on various issues or challenges faced in daily life.</p>
          
          
          </div>


        </div>
        <div className='flex pt-10 justify-evenly items-center  w-full '>
          <img className="h-32 lg:h-96 " src={image2} alt="" />
          <div className='h-32 border py-2 px-4 lg:py-4 lg:px-6 border-zinc-300 lg:h-80 rounded-lg w-80 lg:w-1/2 bg-zinc-100'>
          <h1 className='font-semibold lg:text-4xl text-center'>Comprehensive Treatment Approach</h1>
          <p className='text-[8px] tracking-tight lg:text-xl lg:pt-4 text-zinc-700 text-justify'>Dr. Priyanka's expertise lies in Child and Adolescent Psychiatry, providing comprehensive treatment by integrating behavioral therapy, cognitive behavior therapy, family therapy, and medication and counseling. This approach ensures holistic care and addresses the unique needs of each patient.</p>
          
          
          </div>


        </div>
        <div className='flex pt-10 justify-evenly items-center  w-full '>
          <img className="h-32 lg:h-96 " src={image3} alt="" />
          <div className='h-32 border py-2 px-4 lg:py-4 lg:px-6 border-zinc-300 lg:h-80 rounded-lg w-80 lg:w-1/2 bg-zinc-100'>
          <h1 className='font-semibold lg:text-4xl text-center'>Quality Care & Holistic Development</h1>
          <p className='text-[8px] tracking-tight lg:text-xl lg:pt-4 text-zinc-700 text-justify'>Quality care is the mantra followed at the center, which is designed specifically for children, adolescents, and young persons. Here, they can freely discuss their problems in detail with a therapist and receive a clinical opinion from the best in the field.</p>
          
          
          </div>


        </div>
        <div className='flex pt-10 justify-evenly items-center  w-full '>
          <img className="h-32 lg:h-96 " src={image1} alt="" />
          <div className='h-32 border py-2 px-4 lg:py-4 lg:px-6 border-zinc-300 lg:h-80 rounded-lg w-80 lg:w-1/2 bg-zinc-100'>
          <h1 className='font-semibold lg:text-4xl text-center'>Community Education & Skill Development</h1>
          <p className='text-[8px] tracking-tight lg:text-xl lg:pt-4 text-zinc-700 text-justify'>Dr. Priyanka emphasizes community education and skill development. The center conducts workshops on parenting skills, stress management workshops for students, and skill-building workshops for teachers, equipping them with strategies to support children's mental health and well-being.</p>
          
          
          </div>


        </div>
        <div className='flex pt-10 justify-evenly items-center  w-full '>
          <img className="h-32 lg:h-96 " src={image2} alt="" />
          <div className='h-32 border py-2 px-4 lg:py-4 lg:px-6 border-zinc-300 lg:h-80 rounded-lg w-80 lg:w-1/2 bg-zinc-100'>
          <h1 className='font-semibold lg:text-4xl text-center'>A Journey & Establishment</h1>
          <p className='text-[8px] tracking-tight lg:text-xl lg:pt-4 text-zinc-700 text-justify'>The journey began with a single room and the vision of Dr. Priyanka, who is passionate about child and adolescent development. This passion was ignited during her postgraduate years at the Government Medical College, Chandigarh. Today, the center stands as a one-stop center, joined by the best educators and therapists who share her commitment to societal change</p>
          
          
          </div>


        </div>
        <div className='flex pt-10 justify-evenly items-center  w-full '>
          <img className="h-32 lg:h-96 " src={image3} alt="" />
          <div className='h-32 border py-2 px-4 lg:py-4 lg:px-6 border-zinc-300 lg:h-80 rounded-lg w-80 lg:w-1/2 bg-zinc-100'>
          <h1 className='font-semibold lg:text-4xl text-center'>Inclusive Care & Team Approach</h1>
          <p className='text-[8px] tracking-tight lg:text-xl lg:pt-4 text-zinc-700 text-justify'>The center operates on the principles of inclusive care and a team approach, ensuring that no child is left behind. The collaborative efforts of the team aim to create a positive future for every young person, supporting them in every possible way.</p>
          
          
          </div>


        </div>


        <div className='w-80 lg:w-2/3 text-justify text-white tracking-tight h-44 lg:h-64 lg:pt-6 mt-10 py-4 px-6 rounded-lg bg-gradient-to-br from-[#608DFF] to-[#042066]'>
              <h1 className='font-semibold lg:text-4xl text-center'>A NOTE TO THE READER</h1>
              <p className='text-[10px] lg:text-xl pt-2 lg:pt-4'>Dr. Priyanka Kalra's center focuses on comprehensive treatment, holistic care, and community education. By integrating medication with various therapeutic methods and conducting educational workshops, the center ensures that every child receives the support they need to thrive. Join us in our mission to create a brighter future for our young ones, and let's be the village that raises them.</p>
        </div>


    </div>
  )
}

export default About