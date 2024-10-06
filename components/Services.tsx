'use client';

import { ClassNames } from '@emotion/react';
import { Accordion } from '@mui/material';
import React from 'react';
import CustomButton from './CustomButton';

function Services() {
  const scheduleLink = 'https://cal.com/';
  return (
    <>
      <div className="bg-bone-white text-sherpa-blue">
        <div className="container mx-auto font-montserrat py-5">
          <h1 className="service_title">My Service</h1>
          <div className="flex flex-row ">
            {/* Android Developer */}
            <div className=" service_point_container ">
              {/* Header */}
              <div className="service_point_header">
                <img src="/phone_icon.png" alt="uiux designer" width={10} height={10} className="flex-none w-8"></img>
                <h1 className="service_point_title">Android Developer</h1>
                <p className="service_point_rate ">
                  <span className="font-extrabold">$10/</span>hour
                </p>
              </div>
              {/* Description */}
              <div className="service_point_desc">Crafting visually captivating and user-friendly websites for online success.</div>
              {/* Experience */}
              <div className="flex flex-row px-10 border-2 rounded py-2 mb-3 align-middle">
                <p className="service_point_exp">Experience</p>
                <p className="service_point_exp">+2 Years</p>
              </div>
              {/* Schedule Work Button */}

              <CustomButton title="Schedule" containerStyles="bg-sherpa-blue text-bone-white my-2 rounded-full" link={scheduleLink} />
            </div>
            {/* UI/UX Designer */}
            <div className=" service_point_container ">
              {/* Header */}
              <div className="service_point_header">
                <img src="/phone_icon.png" alt="uiux designer" width={10} height={10} className="flex-none w-8"></img>
                <h1 className="service_point_title">UI/UX Designer</h1>
                <p className="service_point_rate ">
                  <span className="font-extrabold">$5/</span>hour
                </p>
              </div>
              {/* Description */}
              <div className="service_point_desc">Crafting visually captivating and user-friendly websites for online success.</div>
              {/* Experience */}
              <div className="flex flex-row px-10 border-2 rounded py-2 mb-3 align-middle">
                <p className="service_point_exp">Experience</p>
                <p className="service_point_exp">&lt; 1 Years</p>
              </div>
              {/* Schedule Work Button */}

              <CustomButton title="Schedule" containerStyles="bg-sherpa-blue text-bone-white my-2 rounded-full" link={scheduleLink} />
            </div>
          </div>
          <div className="flex flex-row ">
            {/* Website Design */}
            <div className=" service_point_container ">
              {/* Header */}
              <div className="service_point_header">
                <img src="/phone_icon.png" alt="uiux designer" width={10} height={10} className="flex-none w-8"></img>
                <h1 className="service_point_title">Website Designer</h1>
                <p className="service_point_rate ">
                  <span className="font-extrabold">$10/</span>hour
                </p>
              </div>
              {/* Description */}
              <div className="service_point_desc">Crafting visually captivating and user-friendly websites for online success.</div>
              {/* Experience */}
              <div className="flex flex-row px-10 border-2 rounded py-2 mb-3 align-middle">
                <p className="service_point_exp">Experience</p>
                <p className="service_point_exp"> &lt; 1 Years</p>
              </div>
              {/* Schedule Work Button */}

              <CustomButton title="Schedule" containerStyles="bg-sherpa-blue text-bone-white my-2 rounded-full" link={scheduleLink} />
            </div>
            {/* Resource Management */}
            <div className=" service_point_container ">
              {/* Header */}
              <div className="service_point_header">
                <img src="/phone_icon.png" alt="uiux designer" width={10} height={10} className="flex-none w-8"></img>
                <h1 className="service_point_title">Resource Management</h1>
                <p className="service_point_rate ">
                  <span className="font-extrabold">$10/</span>hour
                </p>
              </div>
              {/* Description */}
              <div className="service_point_desc">Crafting visually captivating and user-friendly websites for online success.</div>
              {/* Experience */}
              <div className="flex flex-row px-10 border-2 rounded py-2 mb-3 align-middle">
                <p className="service_point_exp">Experience</p>
                <p className="service_point_exp">&lt; 1 Years</p>
              </div>
              {/* Schedule Work Button */}

              <CustomButton title="Schedule" containerStyles="bg-sherpa-blue text-bone-white my-2 rounded-full" link={scheduleLink} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
