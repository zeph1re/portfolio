import React from 'react';
import Link from 'next/link';

function Header() {
  const handleClick = () => {};

  return (
    <div className="py-10 bg-lime-900">
      <div className="container mx-auto px-4 self-end text-white ">
        <div className="flex justify-center p-6">
          <div className="rounded-full py-3 fixed backdrop-blur-md bg-white/10 hover:z-50 ">
            <div className="flex flex-row gap-2 mx-4 my-1 h-9 ">
              <Link href="/">
                <button className="rounded-full p-1 bg-emerald-700  hover:-translate-y-1 hover:scale-105 px-5 delay-200 transition ease-in-out">Work /</button>
              </Link>

              <Link href="/about">
                <button className="rounded-full  p-1 bg-emerald-700 hover:-translate-y-1 hover:scale-105 px-5 delay-200 transition ease-in-out">About</button>
              </Link>

              <Link href="/resume">
                <button className="rounded-full  p-1 bg-emerald-700 hover:-translate-y-1 hover:scale-105 px-5 delay-200 transition ease-in-out">Resume</button>
              </Link>

              <Link href="/projects">
                <button className="rounded-full  p-1 bg-emerald-700 hover:-translate-y-1 hover:scale-105 px-5 delay-200 transition ease-in-out">Projects</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
