import React from 'react'
import { motion, stagger } from "framer-motion"
import coffee2 from "../../assets/coffee3.jpg";
import coffee1 from "../../assets/coffee1.jpg";
import coffee3 from "../../assets/coffee6.jpg";

const Services = () => {
  const serviceData = [
    {
      id: 1,
      image: coffee1,
      title: "Black Coffee",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum cupiditate sint minima eligendi unde quo sunt consectetur "
    },
    {
      id: 2,
      image: coffee2,
      title: "Hot Coffee",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum cupiditate sint minima eligendi unde quo sunt consectetur "
    },
    {
      id: 3,
      image: coffee3,
      title: "Cold Coffee",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum cupiditate sint minima eligendi unde quo sunt consectetur "
    }
  ];

  const cardVariants ={
    hidden: {opacity:0, y:20},
    visible: {
        opacity:1,
        y:0,
        transition: {
            type:"spring",
            stiffness: 150,
            damping:10,
            ease: "easeInOut"
        }
    }
  }
  const containerVariants = {
    hidden: {opacity:1},
    visible: {
        opacity:1,
        transition:{
            delay: 0.2, 
            staggerChildren:0.4
        }
    }
  }

  return (
    <div className='my-16 space-y-4'>
      {/* header section */}
      <div className='text-center max-w-lg mx-auto space-y-4'>
        <motion.h1
          initial={{ opacity: 1, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 10, delay: 1.2 }}
          className='text-gray-700 text-3xl'>
          Fresh and <span className='text-gray-400'>Tasty coffee</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 1, scale: 0.5 }}
          animate={{ opacity: 1, scale:1 }}
          transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.7 }}
          className='text-sm opacity-50'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ducimusos recusa molestias voluptatibus eligendi in minima eaque, illo, debitis vitae distinctio dignissimos iusto dolorum
        </motion.p>
      </div>

      {/* card section */}
      <motion.div variants={containerVariants} initial="hidden" whileInView={"visible"} viewport={{amount: 0.8}} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
        {serviceData.map((item) => (
          <motion.div variants={cardVariants} key={item.id} className="text-center p-4 space-y-6 ">
            <img src={item.image} alt={item.title} className="h-2/3 ml-12 img-shadow2  mx-auto hover:h-3/4 hover:ml-8 duration-300 cursor-pointer " />
            <div className='space-y-2'>
              <h3 className="text-2xl font-semibold text-gray-700">{item.title}</h3>
              <p className="text-sm text-gray-500  ">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Services;
