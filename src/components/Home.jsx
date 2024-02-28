import React from 'react';
import PROFILE from '../assets/profile.png';
// import { Document, Page } from 'react-pdf';

const Home = () => {
  const pdfURL = 'https://drive.google.com/file/d/1q_B9Vx6P7m-NfH3KVkplEqbh17XECxXJ/view?usp=drive_link';

  return (
    <div name='home' className='w-full h-screen bg-[#000000]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>

      <div className='hover:scale-110 duration-500 '>
                  <img className=' w-52 h-48 mx-auto mt-16 mb-7 border border-pink-800 " rounded-full' src={PROFILE} alt="PROFILE PHOTO" />
              </div>

        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          KARTHIK KRISHNAN K K
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I'm a full-stack developer specializing in Mern by Building exceptional digital experiences. Currently, I'm focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600' onClick={() => window.open(pdfURL)}>
            Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
