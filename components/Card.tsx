import React from 'react';
import { CustomButton } from '.';
import Image from 'next/image';
import { CardProps } from '@/types';

function Card({ imageLink, projectTitle, projectDescription, link }: CardProps) {
  return (
    <div className="project_card">
      <Image src={`${imageLink}`} alt="rinengga app" width={200} height={200} className="mx-auto my-auto" />
      <div className="my-auto">
        <h1 className="project_title">{projectTitle}</h1>
        <p className="project_description">{projectDescription}</p>
        <div className="flex justify-center">
          <CustomButton title="View Project" containerStyles="flex bg-grey text-white rounded-full mt-5 " link={link} />
        </div>
      </div>
    </div>
  );
}

export default Card;
