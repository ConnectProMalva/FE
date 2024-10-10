import React from 'react';

const Banner = () => {
  return (
    <section className="bg-[#EFE6FD] py-10 mt-[4rem] h-[60vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-bold mb-4">Experience the convenience of <span className='text-password'>outsourcing your tasks</span> </h1>
      <p className='py-5'>Sign up now and get started</p>
      <div className="flex space-x-4">
        <a className="bg-password text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-password" href="/signup">
          Sign Up
        </a>
        <a className="bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-password hover:text-white" href="/login">
          Login to Account
        </a>
      </div>
    </section>
  );
}

export default Banner;
