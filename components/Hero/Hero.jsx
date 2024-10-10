import React from "react";
import Button from "../ReUsable/Button";

const Hero = () => {
  return (
    <main className="heroCon pt-[6rem] md:pt-[10rem]">
      <section className="flex flex-col md:flex-row justify-between px-4 md:px-[4rem] items-center">
        <figcaption className="heroText mb-8 text-center md:text-left w-full md:w-[40%]">
          <h1 className="text-3xl md:text-[4rem] leading-[2.5rem] md:leading-[4.3rem] font-semibold mb-4">
            Your Ultimate
            <br className="hidden md:block" /> Solution for
            <br className="hidden md:block" /> Outsourcing
            <br className="hidden md:block" /> Everyday Tasks
          </h1>
          <p className="text-base md:text-xl">
            Join a community where efficiency meets convenience. Hire trusted
            professionals for your chores, errands, and more!
          </p>

          <div className="btn flex flex-col md:flex-row mt-6 space-y-4 md:space-y-0 md:space-x-4">
            <Button className="w-full md:w-[40%]">
              Signup as an artisan
            </Button>
            <a href="" className="border bg-white text-gray-950 p-3 rounded-[5px] text-center font-bold w-full md:w-[40%] shadow">
              Post a task
            </a>
          </div>
        </figcaption>
        <figure className="heroimg hidden md:block overflow-hidden">
          <img
            className="w-full h-[450px] rounded-lg  border-gray-300  transform transition duration-500
     hover:scale-105 "
            src="https://res.cloudinary.com/dytlpvw1o/image/upload/v1720100898/Rectangle_11_ewdcmh.png"
            alt="Hero"
          />
        </figure>
        <figure className="heroimg overflow-hidden md:hidden block w-full md:w-[50%] mt-8 md:mt-0">
          <img
            className="w-full h-auto md:h-[450px] rounded-lg border-gray-300 transform transition duration-500 hover:scale-105"
            src="https://res.cloudinary.com/dytlpvw1o/image/upload/v1720100898/Rectangle_11_ewdcmh.png"
            alt="Hero"
          />
        </figure>
      </section>
    </main>
  );
};

export default Hero;
