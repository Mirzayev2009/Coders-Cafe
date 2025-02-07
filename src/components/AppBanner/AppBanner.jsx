import React from 'react';
import banner from "../../assets/appBanner2.JPG";

const AppBanner = () => {
  return (
    <div 
      className="h-[600px] w-full p-7 "
    >
      <div className="h-full w-full p-4 rounded-md "  style={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      </div>
    </div>
  );
}

export default AppBanner;
