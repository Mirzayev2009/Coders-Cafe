import React from 'react';
import mainCoffee from "../../assets/black.jpg";
import { GiHamburgerMenu } from "react-icons/gi";

const Hero = () => {
  return (
    <main className='bg-white'>
      <section className='min-h-[760px] w-full'>
        <div className='item-center p-2 pl-6'>
          {/* Navbar Section */}
          <div className='z-[10] absolute text-3xl left-16 top-8 text-gray-500'>
            Coders <span className='text-gray-300'>Cafe.</span>
          </div>
          <div>
            <GiHamburgerMenu className='absolute left-[1580px] text-3xl z-[1] top-8'/>
          </div>

          {/* Hero Section */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[776px]'>
            {/* Text Content Section */}
            <div className='text-black mt-[100px] md:mt-0 p-4 space-y-28'>
              <h1 className='text-8xl font-bold leading-tight ml-28'>Black Coffee</h1>
              <div className='relative ml-16'>
                <div className='relative z-10 space-y-7 ml-1'>
                  <h1 className='text-3xl'>Coffee lovers,</h1>
                  <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora nobis magnam cum consequatur in odit facere? Maiores omnis nesciunt non nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, vel?</h1>
                </div>
                <div className='absolute -top-6 -left-10 w-[340px] h-[190px] bg-gray-700/25'></div>
              </div>
            </div>

            {/* Hero Image Section */}
            <div className='relative -left-3'>
              <img src={mainCoffee} alt="A cup of black coffee" className='h-[700px] w-[480px] relative md:h-[750px] rounded-3xl' />
              <div className='absolute top-80 left-[113px] w-[250px] items-center text-center'>
                <h1 className='text-gray-200 font-bold text-6xl'>A cup of black coffee</h1>
              </div>
              <div className='absolute -top-20 left-[560px] mt-10'>
                <h1 className='text-[140px] scale-150 font-bold text-gray-200 leading-none z[10]'>Black coffee</h1>
              </div>
            </div>

            {/* Third Section */}
            <div>
              <div className='relative mr-20 left-3'>
                <div className='relative z-10 space-y-4 mr-1 text-black mt-64'>
                  <h1 className='text-3xl'>Black Coffee</h1>
                  <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora nobis magnam cum consequatur in odit facere? Maiores omnis Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
                </div>
                <div className='absolute -top-6 -right-8 w-[300px] h-[190px] bg-gray-900/50'></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
