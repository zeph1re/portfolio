import React from 'react';
import Link from 'next/link';

function Header() {
  const handleClick = () => {};

  return (
    <>
      <div className="header">
        <div className="container mx-auto px-4 self-end text-white justify-center flex py-6">
          <div className="rounded-full py-2  backdrop-blur-md bg-white/10 hover:z-50 ">
            <div className="flex flex-row gap-2 mx-4 my-1 ">
              <Link href="/">
                <button className="header_button">Work /</button>
              </Link>

              <Link href="/about">
                <button className="header_button">About</button>
              </Link>

              <Link href="/service">
                <button className="header_button">Service</button>
              </Link>

              <Link href="/projects">
                <button className="header_button">Projects</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
