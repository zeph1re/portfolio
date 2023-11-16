import React from 'react';
import { CustomButton } from '.';

function Connect() {
  let email: String;

  return (
    <>
      <div className="flex flex-col bg-orange-900 max-h-xl ">
        <div className="mb-4 container  max-w-xs mx-auto">
          <label className="block text-gray-700 text-sm font-bold mb-2" form="username">
            Email
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Your Email" />
          <CustomButton title="Submit" containerStyles="flex bg-grey text-white rounded-full mt-5 " link="https://github.com/zeph1re" />
        </div>
      </div>
    </>
  );
}

export default Connect;
