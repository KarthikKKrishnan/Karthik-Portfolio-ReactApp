import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#000000] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full gap-8'>
          <div className='sm:text-center pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
        </div>
        <div className='max-w-[1000px] w-full gap-8 px-4 '>
          <div className='sm:text-center text-4xl font-bold'>
            <p>I'm Karthik Krishnan K K</p>
            <p></p>
            
          </div><br></br>
          <div>
            <p className="grid justify-items-center">A FullStack Developer specializing in MERN based in Kerala,India.I have experiences with small teams and I preety much like the process
               of creating interactive and responsive webpages also the process involved.I'm also a firm believer in continuous learning and staying up-to-date
                with latest trends and technologies and also a firm believer of teamwork . I'm excited to start my career and can't wait to see what the future 
                holds for me and I'm looking forward to making a difference in the world.. What would you do if you had
              a software expert available at your fingertips?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
