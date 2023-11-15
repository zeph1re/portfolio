'use client';

import { useState } from 'react';
import Card from './Card';

function Work() {
  const [projects, setProjects] = useState([]);

  const project = [
    {
      title: 'Rinengga App',
      desc: 'This is an Education Application that uses Kotlin and Firebase for the core. I developed this app from scratch like User Research, Designing with Figma, Development, and Testing.',
      imageLink: '/rinengga_app.png',
      url: 'https://github.com/zeph1re/RinenggaApp',
    },
    {
      title: 'SecondHand',
      desc: 'This is an E-Commerce Application using an Android Platform named SecondHand that is held by Binar Academy for graduation requirements. In this application, we can buy and sell second products that we used before. This platform provides various types of user needs. This platform will bring together sellers and buyers to be able to negotiate goods and conduct transactions directly outside the platform',
      imageLink: '/second_hand_splash.png',
      url: 'https://github.com/zeph1re/SecondHand5',
    },
    {
      title: 'Hotel App',
      desc: 'Dicoding Final Project Belajar Membuat Aplikasi Flutter untuk Pemula, Hotel App for Hotel Reservation',
      imageLink: '/hotel_app.png',
      url: 'https://github.com/zeph1re/HotelApp',
    },
  ];

  return (
    <div className="work">
      <h1 className="work_title"> MY PROJECT </h1>
      <div className="project_container">
        {project.map((project, index) => {
          return <Card imageLink={project.imageLink} projectTitle={project.title} projectDescription={project.desc} link={project.url} />;
        })}
      </div>
    </div>
  );
}

export default Work;
