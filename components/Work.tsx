import Image from 'next/image';
import React from 'react';
import { CustomButton } from '.';
import Card from './Card';

function Work() {
  const project = [{}, {}];

  return (
    <div className="work">
      <h1 className="work_title"> PERSONAL PROJECT </h1>
      <div className="project_container">
        <Card
          imageLink="/rinengga_app.png"
          projectTitle="Rinengga App"
          projectDescription="This is an Education Application that uses Kotlin and Firebase for the core. I developed this app from scratch like User Research, Designing with Figma, Development, and Testing."
          link="https://github.com/zeph1re/RinenggaApp"
        ></Card>
      </div>
    </div>
  );
}

export default Work;
