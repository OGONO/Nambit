"use client";
import React from 'react'
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section id='about'>
    <title>Nambit</title>
     <div className='grid grid-cols-1 sm:grid-cols-12'>
      <div className='col-span-7 place-self-center text-center sm:text-left'>
       <h1 className="text-black mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
       <span className=" text-black bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hi, Welcome To Nambit &apos;{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Crypto Currency",
                1000,
                "Current Market Analysis",
                1000,
                "Best Teachers",
                1000,
                "NFTs",
                1000,
                
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
       </h1>
        <p className="text-black text-base sm:text-lg mb-6 lg:text-xl">
          About Nambit and Our Collective Vision:

Welcome to Nambit, where curiosity meets the world of cryptocurrencies. Newton Sila is the creator behind Nambit, accompanied by a dedicated ensemble of enthusiasts and experts, all on a collective journey into the fascinating realm of digital assets. Our adventure began during the exhilarating 2021 bull run, sparking a passion for understanding how cryptocurrencies challenge conventional monetary systems.

Navigating the Crypto Safari:

At Safaribit, we are your guides through the intricate landscape of cryptocurrencies, exploring their potential to reshape traditional finance. The name Safaribit reflects not just a journey but a safari—a curated adventure into the diverse and untamed world of blockchain.

Passion for Decentralization:

Driven by our collective passion, we've dedicated ourselves to demystifying the complexities of the crypto space. Safaribit is more than a platform; it's an invitation to join our collective team on a safari of knowledge and discovery.
          </p>
          <h1 className="text-black mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
       <span className=" text-black bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              About Us
            </span>
            <br></br>
            <p className="text-black font-normal text-base sm:text-lg mb-6 lg:text-xl">
Three Pillars: Education, Community, and Collaboration:

Safaribit stands on three pillars: education, community building, and collaboration. Whether you're a curious beginner or an experienced enthusiast, Safaribit provides a space where our team collaboratively shares insights, connects, and contributes to the evolving narrative of decentralized finance.

Safaribit Services:

As your guides on this safari, we offer consultation services and host webinars—bridging the gap between theory and practical understanding. Our aim is to collectively share insights, demystify concepts, and foster a community where we can navigate the complexities of crypto together.

Tailored Collaborations for the African Market:

We are particularly interested in collaborating with brands that bring valuable narratives to the African market. Safaribit aims to address local challenges, contributing to a financial landscape that resonates with the unique experiences of Kenyans.

Safaribit's Educational Oasis:

Within this digital oasis, Safaribit offers blog posts on Substack and tutorials—an ensemble of knowledge for those thirsty for crypto insights. Dive into our educational content, explore the basics of investing, and join our Discord community for vibrant discussions.

Building the Future:

Our vision for Safaribit extends beyond personal interests. We aspire to build a platform that onboards a million university students eager to explore the future of money. Safaribit is not just a website; it's a collective endeavor to shape the narrative of decentralized finance.

Embark on the Safaribit journey with Newton Sila and our dedicated team, and let's make this crypto safari an expedition to remember</p>
       </h1>
      
          </div>
          
          
      </div>    
    </section>
  );
};

export default HeroSection
