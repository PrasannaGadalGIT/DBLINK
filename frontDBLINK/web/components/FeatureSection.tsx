import React from 'react';
import Image from 'next/image';
import supportImage from "../public/support.png";
import dpeople from "../public/dpeople.png";
import donateCard from "../public/donateCard.png";

const FeatureSection: React.FC = () => {
  return (
    <div className="relative w-full h-screen bg-[#0B0C10] flex flex-col justify-center items-center">
      <div className="max-w-[1400px] mx-auto px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 lg:w-1/2 relative flex flex-col items-center">
          <div className='relative'>
            <Image
              src={supportImage}
              alt="Support"
              className="rounded-full object-cover w-[410px] h-[410px] mb-6"
            />
            <Image
              src={dpeople}
              alt="DPeople"
              className="absolute w-44 bottom-[-3rem] left-[-2rem] md:w-52 md:bottom-[-5rem] md:left-[-2rem] lg:w-48 lg:bottom-[-5rem] lg:left-[-2rem]"
            />
            <Image
              src={donateCard}
              alt="Donate Card"
              className="absolute w-44 bottom-[-3rem] left-[12rem] md:w-56 md:bottom-[-5rem] md:left-[16rem] lg:w-52 lg:bottom-[-5rem] lg:left-[16rem]"
            />
          </div>
        </div>
        <div className="md:w-1/2 lg:w-2/3 flex flex-col justify-center md:pl-14 mt-28 md:mt-0">
          <h1 className="text-4xl lg:text-7xl font-bold text-[#f7f7f7] mb-6">
            Donation platform features
          </h1>
          <p className="text-lg lg:text-2xl text-[#f7f7f7] mb-8">
            A fundraising platform designed to offer top-notch features and functionality tailored to meet your organization&apos;s needs, all while being budget-friendly. Unlock the power of enterprise-level solutions at a fraction of the cost with Donately.
          </p>
          <div className="flex space-x-6">
            <button className=" bg-purple-500 text-white py-4 px-8 rounded-lg shadow-lg font-semibold hover:bg-purple-400 transition duration-300 lg:text-xl">
              Get started
            </button>
            <button className="bg-gray-500 text-white py-4 px-8 rounded-lg shadow-lg font-semibold hover:bg-gray-600 transition duration-300 lg:text-xl">
              Request demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
