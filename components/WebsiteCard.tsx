import React from 'react';
import { CustomButton } from '.';
import Image from 'next/image';
import { CardProps } from '@/types';

function WebsiteCard({ imageLink, projectTitle, projectDescription, link }: CardProps) {
  return (
    <div className="project_website_card ">
      <Image src={`${imageLink}`} alt="website_image" width={1080} height={600} className="mx-auto py-2" />
      <div className="">
        <h1 className="project_title">{projectTitle}</h1>
        <p className="project_description">{projectDescription}</p>
        <div className="flex justify-center">
          <CustomButton title="View Project" containerStyles="flex bg-grey text-white rounded-full mt-5 " link={link} />
        </div>
      </div>
    </div>
  );
}

export default WebsiteCard;
