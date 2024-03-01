import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {AiOutlineGithub} from 'react-icons/ai'
import {BsInstagram}  from 'react-icons/bs'


function Footer() {
  return (
   <footer className='bg-blue-500 text-center text-sm mt-28 pt-8'>
    <a href="#"className="text-4xl font-semibold inline-block ">MouMo</a>
    <p className='text-sm pt-2'>The Taste of Mountains</p>

    <ul className="flex flex-col sm:flex-row sm:gap-8 flex-wrap justify-center gap-2 mt-8">
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#menu">Menu</a></li>
      <li><a href="#gallery">Gallery</a></li>
      <li><a href="#reservation">Reservation</a></li>
      <li><a href="#testimonial">Testimonial</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>

    <div className="mb-10 mt-8 flex justify-center gap-4">
      <a href="https://www.instagram.com/_harshprajapati_/"className='bg-indigo-900 text-white p-3 rounded-md border hover:bg-transparent duration-300 ' ><BsFacebook/></a>
      <a href="https://www.instagram.com/_harshprajapati_/"className='bg-indigo-900 text-white p-3 rounded-md border hover:bg-transparent duration-300 ' ><BsInstagram/></a>
      <a href="https://www.instagram.com/_harshprajapati_/"className='bg-indigo-900 text-white p-3 rounded-md border hover:bg-transparent duration-300 ' ><AiOutlineGithub/></a>
    </div>

    <div className="footer_copyright">
      <small>&copy; Harsh Prajapati. All rights reserved</small>
    </div>
   </footer>
  )
}

export default Footer