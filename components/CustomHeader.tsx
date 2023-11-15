import React from 'react';
import Link from 'next/link';

function Header() {
  const handleClick = () => {};

  return (
    <div className="bg-lime-900 pt-2">
      <div className="container mx-auto px-4 self-end text-white ">
        <div className="flex justify-center p-6">
          <div className="rounded-full py-2  backdrop-blur-md bg-white/10 hover:z-50 ">
            <div className="flex flex-row gap-2 mx-4 my-1 h-9 ">
              <Link href="/">
                <button className="header_button">Work /</button>
              </Link>

              <Link href="/about">
                <button className="header_button">About</button>
              </Link>

              <Link href="/resume">
                <button className="header_button">Resume</button>
              </Link>

              <Link href="/projects">
                <button className="header_button">Projects</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
