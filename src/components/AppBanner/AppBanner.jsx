import React from 'react';
import banner from "../../assets/appBanner2.JPG";
import googlePlay from "../../assets/google play.png";
import appStore from "../../assets/app store.PNG";
import { motion } from 'framer-motion';


const AppBanner = () => {
  return (
    <div 
      className="h-[600px] w-full p-7 "
    >
      <div className="h-full w-full p-4 rounded-md flex  justify-end relative "  style={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
         <div className='w-1/2 h-full absolute  text-center p-16 '>
            <motion.h1  initial={{opacity:1 ,y:70}} whileInView={{opacity:1, y:0}} transition={{type: "spring", stiffness: 100, damping: 10, delay:0.1}} className='text-5xl '>Download our App</motion.h1>
            <motion.p  initial={{opacity:1 ,y:70}} whileInView={{opacity:1, y:0}} transition={{type: "spring", stiffness: 100, damping: 10, delay:0.2}} className='text-gray-700 mt-3 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae similique eos soluta placeat voluptatum iste amet ipsa obcaecati, asperiores sed.</motion.p> 
            <motion.div  initial={{opacity:1 ,y:70}} whileInView={{opacity:1, y:0}} transition={{type: "spring", stiffness: 100, damping: 10, delay:0.3}} className='w-full h-1/2 flex justify-center items-center gap-10 '>
              <img src={appStore} alt="" className='w-[40%] h-[40%] hover:w-[45%] hover:h-[45%] duration-200' />
              <img src={googlePlay} alt="" className='w-[40%] h-[37%] rounded-lg hover:w-[43%] hover:h-[39%] duration-200'/>
            </motion.div>
         </div>
      </div>
    </div>
  );
}

export default AppBanner;
