import React from 'react';
import Image from 'next/image';

function Home() {
  return (
    <div className="home">
      <div className="flex flex-row ">
        <div className="flex-1 flex-column padding-x">
          <h1 className="home_title">HELLO</h1>
          <p className="home_subtitle">
            Im a Fresh Graduate majoring in Informatics Engineering at Brawijaya University who has a great passion for Android Development and User Interface. I always seek to improve my skill, I’m a very motivated person to keep learning
            and enjoy overcoming challenges. And like designing and video editing
          </p>
        </div>
        <div className="flex-1">
          <div className="home_image flex justify-center">
            <Image src="/profile_photo.png" alt="profile photo" width={400} height={600}></Image>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
