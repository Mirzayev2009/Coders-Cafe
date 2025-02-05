import React, { useState } from 'react';
import mainCoffee from "../../assets/black.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from 'framer-motion';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Hero = () => {
  const[sideBar, setSideBar] = useState(false)
  return (
    <main className='bg-white'>
      <section className=' relative min-h-[760px] w-full'>
        <div className='item-center p-2 pl-6'>
          {/* Navbar Section */}
          <motion.div initial={{opacity:1 ,y:-100}} animate={{opacity:1, y:0}} transition={{type:"spring", stiffness:100, damping:10, dealy:1.2}}  className='z-[10] absolute text-3xl left-16 top-8 text-gray-500'>
            Coders <span className='text-gray-300'>Cafe.</span>
          </motion.div>
          <motion.div initial={{opacity:1 ,y:-100}} animate={{opacity:1, y:0}} transition={{type:"spring", stiffness:100, damping:10, dealy:1.2}} >
          <GiHamburgerMenu
            onClick={() => setSideBar(!sideBar)} className={`absolute left-[1580px] text-3xl z-[1] top-8 cursor-pointer ${sideBar ? 'text-white' : 'text-gray-900'}`}/>
         </motion.div>
         

          {/* Hero Section */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[776px]'>
            {/* Text Content Section */}
            <div className='text-black mt-[100px] md:mt-0 p-4 space-y-28'>
              <motion.h1 initial={{opacity:1 ,y:-100}} animate={{opacity:1, y:0}} transition={{type:"spring", stiffness:100, damping:10, dealy:1}} className='text-8xl font-bold leading-tight ml-28'>Black Coffee</motion.h1>
              < motion.div  initial={{opacity:1 ,y:100}} animate={{opacity:1, y:0}} transition={{type:"spring", stiffness:100, damping:10, dealy:1.2}} className='relative ml-16'>
                <div className='relative z-10 space-y-7 ml-1'>
                  <h1 className='text-3xl'>Coffee lovers,</h1>
                  <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora nobis magnam cum consequatur in odit facere? Maiores omnis nesciunt non nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, vel?</h1>
                </div>
                <div className='absolute -top-6 -left-10 w-[340px] h-[190px] bg-gray-700/25'></div>
              </motion.div>
            </div>

            {/* Hero Image Section */}
            <div className='relative -left-3'>
              <motion.img initial={{opacity:1 ,scale:0}} animate={{opacity:1, scale:1}} transition={{type:"spring", stiffness:55, damping:10, dealy:0.4}} src={mainCoffee} alt="A cup of black coffee" className='h-[700px] w-[480px] relative md:h-[750px] rounded-3xl' />
              <div className='absolute top-80 left-[113px] w-[250px] items-center text-center'>
                <h1 className='text-gray-200 font-bold text-6xl'>A cup of black coffee</h1>
              </div>
              <div className='absolute -top-20 left-[480px] mt-10'>
                <motion.h1 initial={{opacity:1 ,x:-100}} animate={{opacity:1, x:0}} transition={{type:"spring", stiffness:100, damping:10, dealy:1.2}} className='text-[180px] scale-150 font-bold text-gray-200 leading-none z[10]'>Black coffee</motion.h1>
              </div>
            </div>

            {/* Third Section */}
            <div>
              <motion.div  initial={{opacity:1 ,y:100}} animate={{opacity:1, y:0}} transition={{type:"spring", stiffness:100, damping:10, dealy:1.2}} className='relative mr-20 left-3'>
                <div className='relative z-10 space-y-4 mr-1 text-black mt-64'>
                  <h1 className='text-3xl'>Black Coffee</h1>
                  <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora nobis magnam cum consequatur in odit facere? Maiores omnis Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
                </div>
                <div className='absolute -top-6 -right-8 w-[300px] h-[190px] bg-gray-900/50'></div>
              </motion.div>
            </div>
            {/* sidebar Menu section */}
            {sideBar && (
            <motion.div  initial={{opacity:1 ,x:-80}} animate={{opacity:1, x:0}} 
             className="absolute top-0 right-0 w-[180px] h-full bg-gradient-to-b from-primary/100 to-primaryDark 100 backdrop-blur-sm z-[10]" onClick={() => setSideBar(false)} >
           <div  className="w-full h-full flex justify-center items-center">
              <div className="flex flex-col justify-center items-center gap-6 text-white">
                 <div className="w-[1px] h-[70px] bg-white"></div>
                   <div className="inline-block p-2 cursor-pointer rounded-full border border-white">
                     <FaFacebook className="text-2xl" />
                   </div>
                   <div className="inline-block p-2 cursor-pointer rounded-full border border-white">
                       <FaTwitter className="text-2xl" />
                    </div>
                    <div className="inline-block p-2 cursor-pointer rounded-full border border-white">
                      <FaInstagram className="text-2xl" />
                     </div>
                   <div className="w-[1px] h-[70px] bg-white"></div>
                </div>
              </div>
            </motion.div>
           )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
