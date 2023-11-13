'use-client';

import React from 'react';
import Image from 'next/image';
import { SpotifyButtonProps } from '@/types';
import Link from 'next/link';

function SpotifyButton({ songTitle }: SpotifyButtonProps) {
  return (
    <div className="flex justify-center">
      <Link href="https://open.spotify.com/album/2FD6g8bXEn2uQMYbeqqoCg">
        <div className="flex flex-row justify-center gap-3 rounded-full h-20 my-1 py- px-8 bg-white  ">
          <Image src="/spotify.png" width={40} height={40} alt="Spotify" className="self-center rounded-full" />
          <div className="flex flex-col self-center font-navbar">
            <h1>On Repeat</h1>
            <h1 className="font-bold">{songTitle}</h1>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default SpotifyButton;
