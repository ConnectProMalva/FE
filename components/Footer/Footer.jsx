import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { ImLocation2 } from "react-icons/im";
import { FaPhoneVolume } from "react-icons/fa6";
import { BsGlobe2 } from "react-icons/bs";

const Footer = () => {
  return (
    <section className="footer mt-[4rem] relative border pb-[5rem] flex md:justify-center">
      <section className=" borde md:px-8 md:flex md:justify-between md:space-x-[4rem] px-4 md:pt-[2.5rem] top-[1rem] text-gray-900">
        {/*=========== First Row ===========*/}
        <section className="firstrow md:w-[70%]">
        <div className="logo">
          <img
            src="https://res.cloudinary.com/dytlpvw1o/image/upload/v1720101531/Logo_mqhhsx.png"
            alt=""
          />
        </div>
          <p className="mt-2 text-[14px]">
          ConnectPro is an online platform that connects users with trusted professionals for various tasks and errands.
          </p>

          <ul className="mt-2  flex space-x-2">
                <li className="flex items-center space-x-2">
                  <FaTwitter /> <span></span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaLinkedin /> <span></span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaInstagram /> <span></span>
                </li>
              </ul>
        </section>

        {/*=========== Second Row ===========*/}
        <section className="secRow my-8 md:my-0 md:w-[30%]">
        
              <p className="uppercase ] mt-2  text-[14px] font-bold ">Company</p>
              <ul className="mt-2 space-y-1 text-[14px]">
                <li>About</li>
                <li>Partners</li>      
                <li>Mission</li>
                
                <li>Donations</li>
              </ul>
            
        </section>

        <section className="secRow my-8 md:my-0 md:w-[30%]">
       
              <p className="uppercase  mt-2  text-[14px] font-bold">Product</p>
              <ul className="mt-2 space-y-1 text-[14px]">
                <li>Job Seekers</li>
                <li>How it Works</li>
                <li>Client</li>
                <li>Pricing</li>
              </ul>
            
        </section>

        {/*=========== Third Row ===========*/}
        <section className="thirdRow my-8 md:my-0 md:w-[30%]">
         
           

           

          
              <p className="uppercase  mt-2  text-[14px] font-bold">Contact Us</p>
              <ul className="mt-2 space-y-2">
                <li className="flex items-center space-x-2">
                  <span>Twitter</span>
                </li>
                <li className="flex items-center space-x-2">
                   <span>LinkedIn</span>
                </li>
                <li className="flex items-center space-x-2">
                   <span>Instagram</span>
                </li>
              </ul>
            
        
        </section>
      </section>
    </section>
  );
}

export default Footer;
