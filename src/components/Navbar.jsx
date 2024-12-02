import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaMapMarkerAlt, FaBars, FaTimes } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoCall, IoPhonePortrait } from 'react-icons/io5';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="fixed z-50 w-full text-xl font-medium bg-white shadow-lg">
      {/* Top Contact Bar */}
      <div className="hidden md:flex flex-wrap items-center justify-between px-6 py-3 bg-blue-600 text-white">
        <div className="flex gap-10">
          <a href="tel:+919501032237" className="flex items-center hover:text-zinc-300 transition-all duration-300">
            <IoCall className="mr-2" />
            +91 95010 32237
          </a>
          <a href="mailto:gcwcentre@gmail.com" className="flex items-center hover:text-zinc-300 transition-all duration-300">
            <MdEmail className="mr-2" />
            gcwcentre@gmail.com
          </a>
          <a href="tel:01814100804" className="flex items-center hover:text-zinc-300 transition-all duration-300">
            <IoPhonePortrait className="mr-2" />
            01814100804
          </a>
        </div>
        <a href="https://maps.app.goo.gl/9wrYK7u3tLfTFJeg8" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-zinc-300 transition-all duration-300">
          <FaMapMarkerAlt className="mr-2" />
          127 I-Block, Sarabha Nagar, Ludhiana
        </a>
      </div>

      {/* Navbar */}
      <div className="relative flex items-center justify-between px-6 py-4">
        <a href="/">
          <img
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8e4dce1e421474c148d18c0bb83f0ff210294e3f893e14ebcb53d6565c68eb70"
            className="w-[230px] max-sm:w-[160px]"
            alt="Logo"
          />
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex gap-10">
          <NavLink to="/" className="hover:text-blue-600">Home</NavLink>
          <NavLink to="/about" className="hover:text-blue-600">About Us</NavLink>
          <div className="group relative">
            <NavLink  className="hover:text-blue-600">Facilities</NavLink>
            <div className="absolute left-0 hidden  bg-white shadow-lg group-hover:block">
              <NavLink to="/Counselling" className="block px-4 py-2 border hover:bg-blue-100">Counselling</NavLink>
              <NavLink to="/Autism" className="block px-4 py-2 border hover:bg-blue-100">Autism</NavLink>
              <NavLink to="/Adhd" className="block px-4 py-2 border hover:bg-blue-100">ADHD</NavLink>
              <NavLink to="/Anger" className="block px-4 py-2 border hover:bg-blue-100">Anger Management</NavLink>
              <NavLink to="/learning" className="block px-4 py-2 border hover:bg-blue-100">Learning Difficulties</NavLink>
              <NavLink to="/behaviour" className="block px-4 py-2 border hover:bg-blue-100">Behaviour Problems</NavLink>
              <NavLink to="/speech" className="block px-4 py-2 border hover:bg-blue-100">Speech Therapy</NavLink>
              <NavLink to="/internet" className="block px-4 py-2 border hover:bg-blue-100">Internet & Gaming</NavLink>
              <NavLink to="/school" className="block px-4 py-2 border hover:bg-blue-100">School Refusal</NavLink>
              <NavLink to="/communication" className="block px-4 py-2 border hover:bg-blue-100">Communication Difficulty</NavLink>
              <NavLink to="/exam" className="block px-4 py-2 border hover:bg-blue-100">Exam Stress</NavLink>
              <NavLink to="/ocd" className="block px-4 py-2 border hover:bg-blue-100">OCD</NavLink>
            </div>
          </div>
          <div className="group relative">
            <NavLink  className="hover:text-blue-600">Services</NavLink>
            <div className="absolute left-0 hidden  bg-white shadow-lg group-hover:block">
              <NavLink to="/pediatric" className="block px-4 py-2 border hover:bg-blue-100">Pediatric Physiotherapy</NavLink>
              <NavLink to="/psychological" className="block px-4 py-2 border hover:bg-blue-100">Psychological Assessment</NavLink>
              <NavLink to="/early" className="block px-4 py-2 border hover:bg-blue-100">Early Intervention Program</NavLink>
              <NavLink to="/art" className="block px-4 py-2 border hover:bg-blue-100">Art Therapy</NavLink>
              <NavLink to="/special" className="block px-4 py-2 border hover:bg-blue-100">Special Education</NavLink>
              <NavLink to="/parenting" className="block px-4 py-2 border hover:bg-blue-100">Parenting</NavLink>
              <NavLink to="/nri" className="block px-4 py-2 border hover:bg-blue-100">Nri Services</NavLink>
              <NavLink to="/station" className="block px-4 py-2 border hover:bg-blue-100">Out Station Services</NavLink>
              <NavLink to="/stammering" className="block px-4 py-2 border hover:bg-blue-100">Stammering Therapy</NavLink>
              <NavLink to="/online" className="block px-4 py-2 border hover:bg-blue-100">Online Counselling</NavLink>
            </div>
          </div>
          <NavLink to="/contact" className="hover:text-blue-600">Contact</NavLink>
          <div className="group relative">
            <NavLink to="/branches" className="hover:text-blue-600">Our Branches</NavLink>
            <div className="absolute left-0 hidden bg-white shadow-lg group-hover:block">
              <NavLink to="/moga" className="block px-4 py-2 hover:bg-blue-100">Moga</NavLink>
              <NavLink to="/bathinda" className="block px-4 py-2 hover:bg-blue-100">Bathinda</NavLink>
              <NavLink to="/faridkot" className="block px-4 py-2 hover:bg-blue-100">Faridkot</NavLink>
            </div>
          </div>
        </nav>

        {/* Mobile Hamburger Icon */}
        <button onClick={toggleMobileMenu} className="text-2xl md:hidden">
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white text-sm shadow-lg">
          <NavLink to="/" className="block px-4 py-2 hover:bg-blue-100">Home</NavLink>
          <NavLink to="/about" className="block px-4 py-2 hover:bg-blue-100">About Us</NavLink>
          <div className="group">
            <NavLink to="/facilities" className="block px-4 py-2 hover:bg-blue-100">Facilities</NavLink>
            <div className="pl-6 text-sm">
            <NavLink to="/Counselling" className="block px-4 py-2 border hover:bg-blue-100">Counselling</NavLink>
              <NavLink to="/Autism" className="block px-4 py-2 border hover:bg-blue-100">Autism</NavLink>
              <NavLink to="/Adhd" className="block px-4 py-2 border hover:bg-blue-100">ADHD</NavLink>
              <NavLink to="/Anger" className="block px-4 py-2 border hover:bg-blue-100">Anger Management</NavLink>
              <NavLink to="/learning" className="block px-4 py-2 border hover:bg-blue-100">Learning Difficulties</NavLink>
              <NavLink to="/behaviour" className="block px-4 py-2 border hover:bg-blue-100">Behaviour Problems</NavLink>
              <NavLink to="/speech" className="block px-4 py-2 border hover:bg-blue-100">Speech Therapy</NavLink>
              <NavLink to="/internet" className="block px-4 py-2 border hover:bg-blue-100">Internet & Gaming</NavLink>
              <NavLink to="/school" className="block px-4 py-2 border hover:bg-blue-100">School Refusal</NavLink>
              <NavLink to="/communication" className="block px-4 py-2 border hover:bg-blue-100">Communication Difficulty</NavLink>
              <NavLink to="/exam" className="block px-4 py-2 border hover:bg-blue-100">Exam Stress</NavLink>
              <NavLink to="/ocd" className="block px-4 py-2 border hover:bg-blue-100">OCD</NavLink>
            </div>
          </div>
          <div className="group">
            <NavLink to="/services" className="block px-4 py-2 hover:bg-blue-100">Services</NavLink>
            <div className="pl-6">
              <NavLink to="/services/therapy" className="block px-4 py-2 hover:bg-blue-100">Therapy</NavLink>
              <NavLink to="/services/counseling" className="block px-4 py-2 hover:bg-blue-100">Counseling</NavLink>
            </div>
          </div>
          <NavLink to="/contact" className="block px-4 py-2 hover:bg-blue-100">Contact</NavLink>
          <div className="group">
            <NavLink to="/branches" className="block px-4 py-2 hover:bg-blue-100">Our Branches</NavLink>
            <div className="pl-6">
              <NavLink to="/moga" className="block px-4 py-2 border hover:bg-blue-100">Moga</NavLink>
              <NavLink to="/bathinda" className="block px-4 py-2 border hover:bg-blue-100">Bathinda</NavLink>
              <NavLink to="/faridkot" className="block px-4 py-2 border hover:bg-blue-100">Faridkot</NavLink>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
