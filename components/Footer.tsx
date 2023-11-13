'use-client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SpotifyButton from './SpotifyButton';

export default function Footer() {
  const songClick = () => {};

  return (
    <div className="footer">
      <div className="flex-1 justify-center items-center px-5">
        <SpotifyButton songTitle="I Just Wanna Rock" handleClick={songClick} />
        <div>
          <p className=" mx-10 flex py-4 px-1  justify-center"> 2023. Arlinno Ganda Saputra</p>
        </div>
      </div>
      <div className="flex-1 ">
        <div className="flex flex-col gap-5">
          <div className="flex justify-center font-bold">
            <h1>Find me</h1>
          </div>
          <div className="flex flex-row gap-3 justify-center">
            <div>
              <Link href="https://www.linkedin.com/in/gandasaputra/">
                <Image src="/linkedin.png" width={30} height={30} alt="Linkedin" />
              </Link>
            </div>
            <div>
              <Link href="/dashboard">
                <Image src="/gmail.png" width={30} height={30} alt="Linkedin" />
              </Link>
            </div>
            <div>
              <Link href="/dashboard">
                <Image src="/github.png" width={30} height={30} alt="Linkedin" />
              </Link>
            </div>
            <div>
              <Link href="https://www.instagram.com/gandaxvi/">
                <Image src="/instagram.png" width={30} height={30} alt="Linkedin" className="p-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="flex padding-y bg-orange-100">
    //   <div className="container flex-1 mx-auto">
    //     <div className="container">
    //       <div className="flex-1 mx-44">
    //         <div className="">
    // <Link href="https://open.spotify.com/track/4FyesJzVpA39hbYvcseO2d?si=c432a0b17425420d">
    //   <div className="flex flex-row gap-3 rounded-full h-20 my-1 px-6 bg-white xl:w-96 md:w-64 ">
    //     <Image src="/spotify.png" width={40} height={40} alt="Spotify" className="self-center rounded-full" />

    //     <div className="flex flex-col self-center font-navbar">
    //       <h1>On Repeat</h1>
    //       <h1 className="font-bold">I Just Wanna Rock</h1>
    //     </div>
    //   </div>
    // </Link>
    //         </div>

    // <div>
    //   <p className=" mx-10 flex py-4 px-1"> 2023. Arlinno Ganda Saputra</p>
    // </div>
    //       </div>
    //       <div className="flex-1 ">
    // <div className="flex-col ">
    //   <div className="flex justify-end font-bold mx-3">
    //     <h1>Find me</h1>
    //   </div>
    //   <div className="flex flex-row gap-3 justify-end">
    //     <div>
    //       <Link href="https://www.linkedin.com/in/gandasaputra/">
    //         <Image src="/linkedin.png" width={30} height={30} alt="Linkedin" />
    //       </Link>
    //     </div>
    //     <div>
    //       <Link href="/dashboard">
    //         <Image src="/spotify.png" width={30} height={30} alt="Linkedin" />
    //       </Link>
    //     </div>
    //     <div>
    //       <Link href="/dashboard">
    //         <Image src="/spotify.png" width={30} height={30} alt="Linkedin" />
    //       </Link>
    //     </div>
    //     <div>
    //       <Link href="https://www.instagram.com/gandaxvi/">
    //         <Image src="/spotify.png" width={30} height={30} alt="Linkedin" className="p-1" />
    //       </Link>
    //     </div>
    //   </div>
    // </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
