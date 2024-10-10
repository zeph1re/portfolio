import { Footer, Projects, CustomHeader as Header } from '@/components';

import React from 'react';
import Head from 'next/head';
import { title } from 'process';

function Project() {
  return (
    <>
      <div className=" mx-auto py-10  bg-teal-950"></div>
      <Header />
      <Projects />
      <Footer />
    </>
  );
}

export default Project;
