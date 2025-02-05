import React from 'react'
import map from "../../assets/map-earth.jpg";


const WhereToBuy = () => {
  return (
    <div className='my-16 spave-y-4 h-[600px]  '>
        <div className='w-full h-full flex'>
            <div className='w-1/2 h-'>
                <h1 className='text-5xl'>Buy our products from anywhere</h1>
                <form className='w-full h-full '>
                    <div className='w-full h-1/3'>
                        <input type="text" placeholder='Name' className='border border-gray-600 w-[300px] h-12' />
                        <input type="text" placeholder='Email' />
                    </div>
                    <div>
                        <input type="text" placeholder='Country' />
                        <input type="text" placeholder='zipcode' />
                    </div>
                    <button type='submit'>Order Now</button>
                </form>
            </div>
            <div>
                <img src={map} alt="" className=' h-full' />
            </div>
        </div>
    </div>
  )
}

export default WhereToBuy