import React, { useRef } from 'react';
import map from "../../assets/earth-map.jpg";
import { motion } from 'framer-motion';

const WhereToBuy = () => {
    const formRef = useRef();

    const handleClick = (e) => {
        e.preventDefault();  // Prevent form submission
        formRef.current.reset();  // Reset the form fields
    };

    return (
        <div className='my-16 space-y-4 h-[500px]'>
            <div className='w-full h-full flex'>
                <div className='w-1/2 mt-8 pl-10'>
                    <motion.h1
                  initial={{opacity:1 ,y:70}} whileInView={{opacity:1, y:0}} transition={{type: "spring", stiffness: 100, damping: 10, delay:0.1}}
                     className='text-[60px] font-bold'>Buy our products from anywhere
                     </motion.h1>
                    <form ref={formRef} className='w-full h-full'>
                        <motion.div initial={{opacity:1 ,y:70}} whileInView={{opacity:1, y:0}} transition={{ type: "spring", stiffness: 100, damping: 10, delay:0.2}}  className='w-full h-1/4 flex items-center gap-8'>
                            <input
                                type="text"
                                placeholder='Name'
                                className='p-3 border border-gray-600 w-[300px] h-12 hover:border-gray-900 rounded-sm'
                            />
                            <input
                                type="email"
                                placeholder='Email'
                                className='p-3 border border-gray-600 w-[290px] h-12  hover:border-gray-900 rounded-sm'
                            />
                        </motion.div>
                        <motion.div initial={{opacity:1 ,y:70}} whileInView={{opacity:1, y:0}} transition={{type: "spring", stiffness: 100, damping: 10, delay:0.3}}  className='w-full h-1/4 flex items-center gap-10'>
                            <input
                                type="text"
                                placeholder='Country'
                                className='p-3 border border-gray-600 w-[320px] h-12  hover:border-gray-900 rounded-sm'
                            />
                            <input
                                type="text"
                                placeholder='Zipcode'
                                className='p-3 border border-gray-600 w-[260px] h-12  hover:border-gray-900 rounded-sm'
                            />
                        </motion.div>
                        <motion.button
                      initial={{opacity:1 ,y:70}} whileInView={{opacity:1, y:0}} transition={{type: "spring", stiffness: 100, damping: 10, delay:0.4}}
                            type='submit'
                            onClick={handleClick}
                            className='w-[620px] bg-gray-700 text-white h-11 mt-4  hover:border-gray-900 rounded-sm'
                        >
                            Order Now
                        </motion.button>
                    </form>
                </div>
                <div>
                    <img src={map} alt="Earth Map" className='h-full ' />
                </div>
            </div>
        </div>
    );
}

export default WhereToBuy;
