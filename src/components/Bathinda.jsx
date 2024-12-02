import React from 'react'
import doc from "../assets/bathindadoc.png"

const Bathinda = () => {
  return (
    <div className='px-6 py-24 text-justify md:px-20 md:py-44'>
        <h1>Bathinda</h1>

        <h1>Global Wellness Bathinda</h1>

        <iframe width="1189" height="707" src="https://www.youtube.com/embed/ctCki1bTP74" title="Speech Therapy For Kids  - Autism Therapy - Behaviour Therapy - Global Wellness Bathinda" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        <div className=' flex flex-col-reverse md:flex-row justify-center h-screen'>

            <div className='h-3/4 w-3/4 md:w-2/5 border'>
            <h1>Global Wellness Bathinda</h1>
            <p>Welcome to Global Wellness Bathinda, your comprehensive destination for mental health and well-being. We offer a range of specialized services, including adult therapies for anxiety, depression, bipolar disorder, and stress management, as well as child-focused services such as autism therapies, speech therapy, occupational therapy, and behavioral therapy. Our dedicated team of professionals is committed to providing compassionate, personalized care to support you on your journey to mental wellness. Whether you’re seeking therapy for yourself or a loved one, Global Wellness Bathinda is here to help you thrive.</p>
            <a href="">Dr. Samta</a>
            <b>CENTRE HEAD</b>
            <b>Best Psychologist in Bathinda – Dr. Samta </b>
            <p>Dr. Samta is the head of Global Wellness, Bathinda Branch, with over 10 years of experience in supporting individuals across the lifespan. She leads a multidisciplinary team of clinical psychologists, speech therapists, special educators, occupational therapists, and child psychologists.</p>
            <p>Under Dr. Samta’s guidance, the team at Global Wellness provides comprehensive support for individuals of all ages, empowering them to overcome challenges and achieve overall well-being.</p>
            </div>
            <div className='h-3/4 w-3/4 md:w-2/5 border'>
            <img src={doc} alt="" />
            </div>
        </div>

        <b>Child Services</b>

        




    </div>
  )
}

export default Bathinda