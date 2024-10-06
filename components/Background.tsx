'use client';

import React from 'react';

function Background() {
  return (
    <>
      <div className="about">
        <div className="container mx-auto">
          <div className="flex flex-row">
            {/* Education & Experience & Skill*/}
            <div className="flex basis-10/12 flex-col">
              <div className="flex flex-row">
                <div className="flex-1 flex-col mb-3">
                  <h1 className="about_head">Education</h1>
                  <p className="about_year">2019 - 2023</p>
                  <p className="about_role">Bachelor Degree in Computer Science</p>
                  <p className="about_instance">Brawijaya University</p>
                  <p className="about_year">2022</p>
                  <p className="about_role">FullStack Engineer</p>
                  <p className="about_instance">SYNRGY Academy</p>
                  <p className="about_year">2022</p>
                  <p className="about_role">Android Engineer</p>
                  <p className="about_instance">Binar Academy</p>
                </div>
                <div className="flex-1 flex-col">
                  <h1 className="about_head">Experience</h1>
                  <p className="about_instance">PT Esteh Creative Indonesia</p>
                  <p className="about_role">UI/UX Designer Intern</p>
                  <p className="about_year">Feb 2024 - Apr 2024</p>
                  <p className="about_instance">Betr Beta</p>
                  <p className="about_role">Android Developer</p>
                  <p className="about_year">Dev 2023 - Feb 2024</p>
                  <p className="about_instance">PT Mojadi Aplikasi Indonesia</p>
                  <p className="about_role">Mobile Developer</p>
                  <p className="about_year">Aug 2022 - Dec 2022</p>
                </div>
              </div>
              {/* Skill */}
              <div className="flex flex-col">
                <h1 className="about_head">Skill</h1>
                <div className="flex flex-row">
                  {/* Coding */}
                  <div className="flex-1">
                    <h2 className="about_head2">Coding</h2>
                    <div className="flex flex-row">
                      <div className="flex-1 flex-col">
                        <p className="about_skill_point">Kotlin</p>
                        <p className="about_skill_point">Jetpack Compose</p>
                        <p className="about_skill_point">Dart</p>
                        <p className="about_skill_point">Flutter</p>
                      </div>
                      <div className="flex-1 flex-col">
                        <p className="about_skill_point">HTML, CSS</p>
                        <p className="about_skill_point">Javascript</p>
                        <p className="about_skill_point">React JS</p>
                        <p className="about_skill_point">Next JS</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1">
                    <h2 className="about_head2">Design</h2>
                    <div className="flex flex-row">
                      <div className="flex-1 flex-col">
                        <p className="about_skill_point">User Research</p>
                        <p className="about_skill_point">Information Architecture</p>
                        <p className="about_skill_point">Visual Design</p>
                        <p className="about_skill_point">Interaction Design</p>
                      </div>
                      <div className="flex-1 flex-col">
                        <p className="about_skill_point">Wireframing</p>
                        <p className="about_skill_point">Prototyping</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Language & Tools */}
            <div className="flex basis-2/12 flex-col">
              {/* Language */}
              <div className="flex flex-col">
                <h1 className="about_head">Language</h1>
                <p className="about_instance">Bahasa Indonesia</p>
                <p className="about_instance">
                  English <span>(TOEFL ITP 587)</span>
                </p>
              </div>

              {/* Tools */}
              <div className="flex flex-col mt-5">
                <h1 className="about_head">Tools</h1>
                <p className="about_tools_point">Visual Studio Code</p>
                <p className="about_tools_point">Android Studio</p>
                <p className="about_tools_point">Figma</p>
                <p className="about_tools_point">Jira</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Background;
