'use client';

import React from 'react';

import { CustomButton } from '.';
import Header from './CustomHeader';

function Hero() {
  const handleScroll = () => {};

  return (
    <>
      <Header></Header>
      <div className="hero">
        <div className="flex-2 py-36 padding-x ">
          <h1 className="hero_title">Portfolio</h1>
          <p className="hero_subtitle">Arlinno Ganda Saputra</p>
          <div className="flex mt-5 justify-center">
            <CustomButton title="Explore Website" containerStyles="bg-lime-700 text-white rounded-full mt-10" handleClick={handleScroll} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
