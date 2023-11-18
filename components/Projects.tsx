import React from 'react';
import { project, websiteProject } from './project';
import Card from './Card';
import WebsiteCard from './WebsiteCard';
import { CustomButton } from '.';



function Projects() {
  return (
    <>
      <div className="bg-teal-950">
        <div className="work">
          <h1 className="work_title"> APPLICATION PROJECT </h1>
          <div className="project_container">
            {project.map((project) => {
              return <Card imageLink={project.imageLink} projectTitle={project.title} projectDescription={project.desc} link={project.url} />;
            })}
          </div>
        </div>
        <div>
          <div className="work ">
            <h1 className="work_title"> WEBSITE PROJECT </h1>
            <div className="project_website_container">
              {websiteProject.map((project, index) => {
                return <WebsiteCard imageLink={project.imageLink} projectTitle={project.title} projectDescription={project.desc} link={project.url} />;
              })}
            </div>
          </div>
        </div>
        <div className="flex bg-teal-950 padding-y">
          <div className="flex flex-col mx-auto">
            <h1 className=" text-center text-white">Check For More Project</h1>
            <CustomButton title="More Project Here" containerStyles="flex bg-grey text-white rounded-full mt-5 " link="/projects" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
