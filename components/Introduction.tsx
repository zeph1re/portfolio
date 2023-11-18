'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CustomButton } from '.';
import { link } from 'fs';
import { useNavigate } from 'react-router-dom';

function Introduction() {
  const linkedinUrl = 'https://www.linkedin.com/in/gandasaputra/';
  return (
    <div className="home">
      <div className="flex flex-row ">
        <div className="flex-1 flex-column 2xl:ps-36 ps-8 my-auto">
          <h1 className="home_title">HELLO,</h1>
          <p className="home_subtitle">
            I'm a Fresh Graduate majoring in Informatics Engineering at Brawijaya University who has a great passion for Android Development and User Interface. I always seek to improve my skill, I'm a very motivated person to keep learning
            and enjoy overcoming challenges. And like designing and video editing
          </p>
          <div className="flex justify-start">
            <CustomButton title="Linkedin Profile" containerStyles="bg-white text-black rounded-full mt-10" link={linkedinUrl} />
          </div>
        </div>
        <div className="flex-1">
          <div className="home_image justify-center self-center">
            <Image src="/profile_photo.png" alt="profile photo" width={400} height={600}></Image>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
