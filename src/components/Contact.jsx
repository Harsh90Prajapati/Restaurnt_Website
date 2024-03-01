import React from 'react'

import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';


 
const Contact = () => {

  const username =useRef();
  const useremail =useRef()
  const text_area = useRef();


  const handleSubmit = (e) => {
    e.preventDefault();
    const name = username.current.value
    const email = useremail.current.value
    const message = text_area.current.value
    
    
    console.log(name , email, message)    
    e.target.reset()
  };

  return (
    <section id="contact" className=' max-w-4xl mx-auto mt-20 py-10 '>
      <h5 className="text-sm text-slate-300">Get In Touch</h5>
      <h2 className="sm:text-5xl text-3xl font-semibold">Contact Me</h2>
      <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-3 mt-16 ">
       <div className="flex flex-col gap-2">
        <article className='border  space-y-2 p-5 rounded-2xl text-center bg-[#2c2c6c] hover:bg-transparent hover:border-blue-400 duration-500 '>
          <MdOutlineEmail className='w-full'/>
          <h4>Email</h4>
          <h5>harshprajapti904433@gmail.com</h5>
          <a href="mailto:harshprajapti904433@gmail.com" target="_blank" rel="noreferrer" className='py-2 text-blue-400'>Send a Message</a>
        </article>
        <article className='border  space-y-2 p-5 rounded-2xl text-center bg-[#2c2c6c] hover:bg-transparent hover:border-blue-400 duration-500 '>
          <RiMessengerLine className='w-full'/>
          <h4>Messenger</h4>
          <h5>Harsh Prajapati</h5>
          <a href="http://m.me/_harshprajapati_/" target="_blank" rel="noreferrer" className='py-2 text-blue-400'>Send a Message</a>
        </article>
        <article className='border  space-y-2 p-5 rounded-2xl text-center bg-[#2c2c6c] hover:bg-transparent hover:border-blue-400 duration-500 '>
          <BsWhatsapp className='w-full'/>
          <h4>WhatsApp</h4>
          <h5>+91 8840497081</h5>
          <a href="https://api.whatsapp.com/send?phone=+918840497081" target="_blank"rel="noreferrer" className='py-2 text-blue-400'>Send a Message</a>
        </article>
       </div>

       <form onSubmit={handleSubmit} className='flex flex-col gap-3 w-full'>
        <input ref={username} className='w-full p-5 bg-transparent border-2 border-blue-900 resize-none rounded-md' type="text" name='name' placeholder='Your Full Name' required/>
        <input ref={useremail} className='w-full p-5 bg-transparent border-2 border-blue-900 resize-none rounded-md' type="email" name='email' placeholder='Your Email' required/>
        <textarea ref={text_area} className='w-full p-5 bg-transparent border-2 border-blue-900 resize-none rounded-md' name="message" rows="7" placeholder=' Your Message' required></textarea>
        <button type='submit' className='w-full bg-blue-600 py-2 rounded-md hover:bg-indigo-600' >Send Message</button>
       </form>
      </div>
    </section>
  )
}

export default Contact
