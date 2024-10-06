'use client';

import React from 'react';

import { CustomButton } from '.';
import Header from './CustomHeader';

function Hero() {
  return (
    <>
      <Header></Header>
      <div className="hero">
        <div className="flex-2 padding-x">
          <h1 className="hero_title ">
            PORTFOLIO <span className="hero_title_year">'24</span>
          </h1>
          <p className="hero_subtitle">Arlinno Ganda</p>
          <div className="flex mb-10 justify-center">
            <CustomButton title="Explore Website" containerStyles="bg-emerald-700 text-white rounded-full mt-5" link="/about" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
