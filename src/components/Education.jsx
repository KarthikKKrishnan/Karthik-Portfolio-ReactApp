import React from 'react';
import Ktu from '../assets/ktu.png';
import Hse from '../assets/hse.png';
import Cbse from '../assets/cbse.png';

const Education = () => {
  return (
    <div name='education' className='w-full h-screen bg-[#000000] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1200px] w-full  gap-8'>
          <div className='sm:text-center pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              EDUCATION AND EXPERIENCE
            </p>
            <div className="education-content">
                <div className="grid-cols-1 gap-4 border border-pink-400 mt-10 mx-auto max-w-[800px] p-8 flex justify-between items-start">
                    <div className="text-left">
                        <div><i className='bx bx-calendar'></i>2019-2023</div>
                        <h3>BTECH - Information Technology</h3>
                        <p>College of Engineering Thalassery, Kerala</p>
                        <p>Apj Abdul Kalam Technological University,Trivandrum,Kerala</p>
                    </div>
                    <div className="text-right">
                        <img className='w-18' src={Ktu} alt="HTML icon" />
                    </div>
                </div>

                <div className="grid-cols-1 gap-4 border border-pink-400 mt-10 mx-auto max-w-[800px] p-8 flex justify-between items-start">
                    <div className="text-left">
                        <div><i className='bx bx-calendar'></i>2017-2019</div>
                        <h3>Higher-Secondary</h3>
                        <p>Completed Plus two in Physics, Chemistry, Maths, Biology</p>
                        <p>GHSS Periya, Kasaragod, Kerala</p>
                    </div>
                    <div className="text-right">
                        <img className='w-18' src={Hse} alt="HTML icon" />
                    </div>
                </div>

                <div className="grid-cols-1 gap-4 border border-pink-400 mt-10 mx-auto max-w-[800px] p-8 flex justify-between items-start">
                    <div className="text-left">
                      <div><i className='bx bx-calendar'></i>2017</div>
                        <h3>High-School</h3>
                        <p>Completed 10th</p>
                        <p>CBSE</p>
                        <p>Ursuline Public School Kanhiradukkam, Kasaragod</p>
                    </div>
                    <div className="text-right">
                        <img className='w-18' src={Cbse} alt="HTML icon" />
                    </div>
                </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
);
};

export default Education;
