import React from 'react';
import styles from './HeroSection.module.css';
import Image from 'next/image';
import d4 from '../public/d4.png'; 

const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col">
      <video
        src="/senkudai.mp4" // Reference directly from public
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className={`absolute inset-0 flex flex-col items-center justify-start text-white bg-black bg-opacity-50 ${styles.heroSectionContent} pt-20`}>
        <div className="text-center px-4">
          <h1 className={`text-5xl md:text-7xl sm:text-3xl font-bold mb-4 leading-tight ${styles.heroTitle}`}>
            Welcome to <span className="text-purple-500">DBLINK 🙏</span>
          </h1>
          <p className={`mt-4 text-2xl md:text-2xl sm:text-2xl ${styles.heroDescription}`}>
            Your support makes a difference! Join us in making an impact today 🤝.
          </p>
          <div className="flex justify-center items-center mt-6">
            <button className={`py-4 px-6 text-xl md:text-2xl sm:text-base ${styles.heroButton}`}>
              Donate Now
            </button>
            <Image
              src={d4}
              alt="Donate Icon"
              width={96} // Adjust width as necessary
              height={96} // Adjust height as necessary
              className="ml-4 rounded-lg object-contain"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full flex justify-center items-center space-x-4 p-4">
        <div className={styles.videoContainer}>
          <video
            src="/donationvid.mp4" // Reference directly from public
            autoPlay
            loop
            muted
            className="w-1/3 h-auto object-cover rounded-lg"
          />
        </div>
        <div className={styles.videoContainer}>
          <video
            src="/donationvid2.mp4" // Reference directly from public
            autoPlay
            loop
            muted
            className="w-1/3 h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
