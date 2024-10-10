import Header from '@/components/CustomHeader';
import Introduction from '@/components/Introduction';
import Background from '@/components/Background';
import React from 'react';
import { Footer } from '@/components';

function About() {
  return (
    <>
      <div className=" mx-auto py-8  bg-sherpa-blue"></div>
      <Header />
      <Introduction />
      <Background />
      <Footer />
    </>
  );
}

export default About;
