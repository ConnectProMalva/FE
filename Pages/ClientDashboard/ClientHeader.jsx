import React, { useState } from "react";
import { FaHome, FaBriefcase, FaEnvelope, FaBell, FaChevronCircleDown} from 'react-icons/fa';


const ClientHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <main className="headerCon flex b0 z-40 border bg-white fixed px-4 p-4 md:px-[5rem] shadow w-full justify-between items-center">
        <div className="logo" >
          <img
            src="https://res.cloudinary.com/dytlpvw1o/image/upload/v1720101531/Logo_mqhhsx.png"
            alt="Logo"
            className="h-8"
          />
        </div>

        <nav className="nav_links hidden lg:flex space-x-8 items-center text-[14px] font-medium">
          <a href="/ArtisanDashboard" className="flex items-center gap-2">
           <FaHome/>
            <span>Dashboard</span>
          </a>
          <a href="/job-listing" className="flex items-center gap-2">
           <FaBriefcase/>
           <span>Jobs</span>
          </a>
          <a href="/howItWorks" className="flex items-center gap-2">
              <FaEnvelope/>
             <span className="">Inbox</span>
          </a>
          <a href="" className="block">
           <FaBell/>
          </a>
          <div className="profile flex items-center gap-2 cursor-pointer" >
          <img
            src="https://res.cloudinary.com/drphumgcb/image/upload/v1721151839/Ellipse_2_txqpm8.png"
            alt="userImage"
            className="w-[50px] h-[50px] object-cover "
          />
          <FaChevronCircleDown/>
        </div>
        </nav>
        

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center">
          <button
            id="mobile-menu-button"
            className="focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`lg:hidden mobile-menu-container ${isMobileMenuOpen ? "open" : ""}`}
        >
          <div className="mobile-menu-overlay" onClick={toggleMobileMenu}></div>
          <div className="mobile-menu-content">
            {/* Close icon */}
            <button className="close-button" onClick={toggleMobileMenu}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Menu items */}
            <a href="/ArtisanDashboard" className="flex items-center gap-2">
            <FaHome/>
            <span>Dashboard</span>
          </a>
          <a href="/job-listing" className="flex items-center gap-2">
           <FaBriefcase/>
           <span>Jobs</span>
          </a>
          <a href="/howItWorks" className="flex items-center gap-2">
             <FaEnvelope/>
             <span>Inbox</span>
          </a>
          <a href="" className="flex items-center gap-2">
            <FaBell/>
           <span>Notifications</span>
          </a>
          <div className="profile flex items-center gap-2 cursor-pointer" >
          <img
            src="https://res.cloudinary.com/drphumgcb/image/upload/v1721151839/Ellipse_2_txqpm8.png"
            alt="userImage"
            className="w-[50px] h-[50px] object-cover "
          />
          <FaChevronCircleDown/>
        </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ClientHeader;
