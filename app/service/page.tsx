import { Footer, Work } from '@/components';
import Header from '@/components/CustomHeader';
import Introduction from '@/components/Introduction';
import Services from '@/components/Services';
import React from 'react';

function Resume() {
  return (
    <>
      <Header />
      <div className=" mx-auto py-10 bg-bone-white"></div>
      <Services />
      <Footer />
    </>
  );
}

export default Resume;
