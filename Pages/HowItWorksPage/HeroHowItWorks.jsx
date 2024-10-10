import React from "react";
import Button from "../../components/ReUsable/Button";


const Hero = () => {
  return (
    <main className="heroCon pt-[6rem] md:pt-[10rem]">
      <section className="flex flex-col md:flex-row justify-between px-4 md:px-[4rem] items-center">
        <figcaption className="heroText mb-8 text-center md:text-left w-full md:w-[40%]">
          <h1 className="text-3xl md:text-[4rem] leading-[2.5rem] md:leading-[4.3rem] font-semibold mb-4">
          Post a job. Choose
            <br className="hidden md:block" />an artisan. Get it
            <br className="hidden md:block" />  done!
           
          </h1>
           
          <p className="text-base md:text-xl">
          ConnectPro makes it easy to get tasks done by connecting you with trusted professionals.
          </p>

          <div className="btn flex flex-col md:flex-row mt-6 space-y-4 md:space-y-0 md:space-x-4">
            <a href="" className="bg-password text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-password">
              Post a task today
            </a>
          
          </div>
        </figcaption>
        <figure className="heroimg hidden md:block overflow-hidden">
          <img
            className="w-full h-[450px] rounded-lg  border-gray-300  transform transition duration-500
     hover:scale-105 "
            src="https://res.cloudinary.com/drphumgcb/image/upload/v1720986364/Connect%20pro/yorvslewv5zfqkvmsrwi.png"
            alt="Hero"
          />
        </figure>
        <figure className="heroimg overflow-hidden md:hidden block w-full md:w-[50%] mt-8 md:mt-0">
          <img
            className="w-full h-auto md:h-[450px] rounded-lg border-gray-300 transform transition duration-500 hover:scale-105"
            src="https://res.cloudinary.com/drphumgcb/image/upload/v1720986364/Connect%20pro/yorvslewv5zfqkvmsrwi.png"
            alt="Hero"
          />
        </figure>
      </section>
    </main>
  );
};

export default Hero;
