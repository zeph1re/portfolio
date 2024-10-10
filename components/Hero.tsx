'use client';

import React from 'react';

import { CustomButton } from '.';
import Header from './CustomHeader';

function Hero() {
  return (
    <>
      <div className="hero pt-20">
        <div className="align_middle">
          <h1 className="hero_title ">Arlinno Ganda Saputra</h1>
          <p className="hero_subtitle">A fast learner Mobile Developer and UI/UX Designer and committed to delivering high quality work that meets the needs.</p>
        </div>
        <div className="flex mb-10 justify-center">
          <CustomButton title="Explore Website" containerStyles="bg-emerald-700 text-white rounded-full mt-5" link="/about" />
        </div>
      </div>
    </>
  );
}

export default Hero;
