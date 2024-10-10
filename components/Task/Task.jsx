import React from 'react';
import TaskList from './Skill';

const Task = () => {
  return (
    <>
      <main className="task mt-16 md:mt-[8rem]">
        <section className="desc w-full flex justify-center px-4">
          <h2 className="text-3xl md:text-[48px] font-bold leading-tight md:leading-[50px] w-full md:w-[50%] text-center text-gray-900 mb-3">
            Over 50 tasks are being completed
            <span className='text-[#5900D9]'> daily</span>
          </h2>
        </section>
        <section className="desc w-full flex justify-center px-4">
          <p className="text-lg md:text-[22px] w-full md:w-[50%] text-center text-gray-900 mb-3">
            See what others are getting done and explore a wide range of services tailored to meet your needs
          </p>
        </section>
        <TaskList />
      </main>
    </>
  );
}

export default Task;
