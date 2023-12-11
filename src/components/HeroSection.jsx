"use client";
import React from 'react'
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section id='about'>
    <title>CityCrest</title>
     <div className='grid grid-cols-1 sm:grid-cols-12'>
      <div className='col-span-7 place-self-center text-center sm:text-left'>
       <h1 className="text-black mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
       <span className=" text-black bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hi, Welcome To City Crest &apos;{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Quality Education",
                1000,
                "Nurturing",
                1000,
                "Top Perfomance",
                1000,
                "Affordable",
                1000,
                "Best Teachers",
                1000,
                "Quality Facilities",
                1000,
                
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
       </h1>
        <p className="text-black text-base sm:text-lg mb-6 lg:text-xl">
          Welcome to city crest school, where we train the next leaders and nurture them to become the best in the 
          </p>
          <h1 className="text-black mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
       <span className=" text-black bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              About Us
            </span>
            <br></br>
            <p className="text-black font-normal text-base sm:text-lg mb-6 lg:text-xl">At city crest we aim at being the best iin providing education for your kids</p>
       </h1>
       <h2 className="text-black mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
       <span className=" text-black bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              School Motto
            </span>
            <br></br>
            <p className="text-black font-normal text-base sm:text-lg mb-6 lg:text-xl">In God We Trust</p>
       </h2>
          </div>
          
          
      </div>    
    </section>
  );
};

export default HeroSection
