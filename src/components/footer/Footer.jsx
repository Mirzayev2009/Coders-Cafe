import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='w-full h- bg-gray-700 text-white p-7 flex'>
        <div className='w-1/3 h-full'>
            <h1 className='text-4xl '>Coders cafe</h1>
            <p className='mt-7 w-5/6 mb-7'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, ipsum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, corrupti</p>
            <p>Contact: +1(123)456-789</p>
            <p>Contact: +1(987)654-321</p>
        </div>
        <div className='w-1/3 h-full'>
             <h1 className='text-3xl mb-7'>Quick links</h1>
             <div className='flex gap-32'>
               <ul>
                 <li className='mb-2 '>Home</li>
                 <li className='mb-2'>About</li>
                 <li className='mb-2'>Contact</li>
                 <li className='mb-2'>Services</li>
              </ul>
              <ul>
                 <li className='mb-2 '>Home</li>
                 <li className='mb-2'>About</li>
                 <li className='mb-2'>Contact</li>
                 <li className='mb-2'>Services</li>
              </ul>
             </div>
        </div>
        <div>
            <h1 className='text-3xl mb-7 '>Follow Us</h1>
               <div className="flex  justify-center items-center gap-6 text-white">
                             
                               <div className="inline-block p-2 cursor-pointer rounded-full border border-white">
                                 <FaFacebook className="text-4xl" />
                               </div>
                               <div className="inline-block p-2 cursor-pointer rounded-full border border-white">
                                   <FaTwitter className="text-4xl" />
                                </div>
                                <div className="inline-block p-2 cursor-pointer rounded-full border border-white">
                                  <FaInstagram className="text-4xl" />
                                 </div>
                              
                            </div>
                            
        </div>
        
    </div>
  )
}

export default Footer