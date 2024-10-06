'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CustomButton } from '.';
import { link } from 'fs';
import { useNavigate } from 'react-router-dom';
import Header from './CustomHeader';

function Introduction() {
  const linkedinUrl = 'https://www.linkedin.com/in/gandasaputra/';
  const instagramUrl = 'https://www.instagram.com/gandaxvi/';
  const githubUrl = 'https://github.com/zeph1re';
  const gmailUrl = 'mailto:arlinnoganda@gmail.com?';
  return (
    <>
      <div className="home">
        <div className="flex flex-row max-w-[1920px] mx-auto">
          <div className="home_image_container ">
            <div className="home_image">
              <Image
                src="/photo_ganda.png"
                alt="profile photo"
                width={0}
                height={0}
                className="w-full h-full top-0 left-0 object-cover rounded-2xl "
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                layout="responsive"
              ></Image>
            </div>
          </div>
          <div className="home_info_container">
            <h1 className="home_hello">HELLO,</h1>
            <h2 className="home_name">I'm Ganda</h2>
            <h3 className="home_role">A Mobile Developer and UI/UX Designer.</h3>
            <p className="home_subtitle">
              I am currently fresh graduate at <span className="home_subtitle_bold">Brawijaya University majoring in Computer Science</span> highly interest in <span className="home_subtitle_bold">Android Development</span> and{' '}
              <span className="home_subtitle_bold">UI/UX Design</span>. Whenever not on my desk, you can see me running in morning or afternoon. I love trying and exploring new programming language. <br /> <br />A fast learner and committed
              to delivering high quality work that meets the needs.
            </p>
            <div className="flex flex-row">
              <div className="flex-1">
                <h1 className="home_name">Contact</h1>
                {/* List Contact */}
                {/* Instagram */}
                <Link href={instagramUrl} target="_blank">
                  <div className="flex flex-row mt-5">
                    <Image className="flex-0" src="/instagram_color.png" alt="instagram" width={30} height={10}></Image>
                    <p className="home_contact_list flex-auto ">@gandaxvi</p>
                  </div>
                </Link>

                {/* Gmail */}
                <Link href={gmailUrl} target="_blank">
                  <div className="flex flex-row mt-5">
                    <Image className="flex-0" src="/gmail_color.png" alt="gmail" width={30} height={10}></Image>
                    <p className="home_contact_list flex-auto">arlinnoganda@gmail.com</p>
                  </div>
                </Link>

                {/* Github */}
                <Link href={githubUrl} target="_blank">
                  <div className="flex flex-row mt-5">
                    <Image className="flex-0" alt="github" src={'/github_color.png'} width={30} height={10}></Image>
                    <p className="home_contact_list flex-auto">github.com/zeph1re</p>
                  </div>
                </Link>
              </div>
              <div className="flex-1">
                <h1 className="home_name">Skill</h1>
                {/* List Skill */}
                <p className="home_subtitle">Android Development</p>
                <p className="home_subtitle">UI/UX Designer</p>
                <p className="home_subtitle">Web Development</p>
              </div>
            </div>
            <div className="flex justify-start">{/* <CustomButton title="Linkedin Profile" containerStyles="bg-white text-black rounded-full mt-10" link={linkedinUrl} /> */}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Introduction;
