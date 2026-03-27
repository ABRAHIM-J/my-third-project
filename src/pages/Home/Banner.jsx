import React from 'react';
import hero from '../../assets/hero.png'

const Banner = () => {
    return (
        <div className="flex flex-col justify-center items-center  ">
              <h1 className='text-6xl text-center pt-5' >We Build <br /> <span className="text-purple-500">Productive</span> Apps</h1>
            <p className="text-center mt-4 max-w-xl">
                 At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
             
                <div className="flex gap-4 mt-2">
    
   
    <a 
      href="https://play.google.com/store" 
      target="_blank"
      className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded-lg hover:bg-gray-800 transition"
    >
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
        alt="Google Play" 
        className="w-6"
      />
      <span>Google Play</span>
    </a>

    {/* App Store */}
    <a 
      href="https://www.apple.com/app-store/" 
      target="_blank"
      className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded-lg hover:bg-gray-800 transition"
    >
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" 
        alt="App Store" 
        className="w-5 bg-white rounded"
      />
      <span>App Store</span>
    </a>

  </div>
         <div className="mt-6">
    <img 
      src={hero}
      alt="Hero App" 
      className="w-64 md:w-80 lg:w-96 mx-auto"
    />
  </div>
       <div className="bg-purple-700 text-white py-12 w-full">
  <div className="max-w-6xl mx-auto px-4">

  
    <h1 className="text-4xl text-center mb-10 font-semibold">
      Trusted by Millions, Built for You
    </h1>

    
    <div className="flex flex-col md:flex-row justify-between items-center gap-8">

      <div className="text-center">
        <p className="">Total Downloads</p>
        <h1 className="text-3xl font-bold mt-2">29.6M</h1>
        <p className="text-sm mt-1">21% more than last month</p>
      </div>

      <div className="text-center">
        <p className="">Total Reviews</p>
        <h1 className="text-3xl font-bold mt-2">906K</h1>
        <p className="text-sm mt-1">46% more than last month</p>
      </div>

      <div className="text-center">
        <p className="">Active Apps</p>
        <h1 className="text-3xl font-bold mt-2">132+</h1>
        <p className="text-sm mt-1">31 more will Launch</p>
      </div>

    </div>

  </div>
</div>
        </div>
    );
};

export default Banner;