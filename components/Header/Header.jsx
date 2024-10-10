import React, { useState } from "react";


const Header = () => {
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
          <a href="#" className="block">
            Search job
          </a>
          <a href="/services" className="block">
            Service
          </a>
          <a href="/howItWorks" className="block">
            How it works
          </a>
          <a href="/faq" className="block">
            FAQ
          </a>
          <a href="/login" className="block">
            Login
          </a>
          <a
            href="/signup"
            className=" bg-[#5900D9] px-4 py-2 flex text-white justify-center items-center rounded-[8px]"
          >
            Signup as an artisan
          </a>
          <a href="/postAJob" className="block">
            Post a Job
          </a>
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
            <a href="#" className="block">
              Search job
            </a>
            <a href="/services" className="block">
              Service
            </a>
            <a href="/howItWorks" className="block">
              How it works
            </a>
            <a href="/faq" className="block">
              FAQ
            </a>
            <a href="/login" className="block">
              Login
            </a>
            <a
              href="/signup"
              className=" bg-[#5900D9] px-4 py-2 flex text-white justify-center items-center rounded-[8px]"
            >
              Signup as an artisan
            </a>
            <a href="/postAJob" className="block">
              Post a Job
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default Header;
