import React, { useState } from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import ArtisanHeader from '../../Pages/ArtisanDashboard/ArtisanHeader';

const ArtisanCard = ({ userImage, userName, userLocation, userAddress, profileLinks, navLinks, children }) => {
  const [activeTab, setActiveTab] = useState(profileLinks[0]?.label);

  return (
    <>
    <ArtisanHeader />

    <section className=' lg:py-10  lg:pt-[10rem]  lg:px-[9rem] bg-purpleGradient h-[35vh] lg:h-[40vh]'>
      
    </section>

    <section className=' px-4 lg:px-[4rem]'>
        <div className=''>
          <figure className='mt-[-1.5rem]'>
            <img
              src={userImage}
              alt="userImage"
              className="rounded-full w-[50px] h-[50px] object-cover"
            />
          </figure>
          <figcaption className=' mt-2'>
            <h3 className='text-2xl font-semibold'>{userName}</h3>
            <h4 className='text-[14px] font-semibold'>{userLocation}</h4>
            <p className='text-[12px] text-haveAnAccount'>{userAddress}</p>
          </figcaption>
          <div className='mt-5'>
            <a href="#" className='border bg-white rounded px-5 py-2'>Edit Profile</a>
          </div>
        </div>
        <div className='mt-5 flex flex-row mb-4  space-x-5'>
          {profileLinks.map((link, index) => (
            <button
              key={index}
              className={`      ${activeTab === link.label ? 'border-b-4 border-purple-900  text-purple-900' : ''}`}
              onClick={() => setActiveTab(link.label)}
            >
              {link.label}
            </button>
          ))}
        </div>
        <div className="">
        
          <aside className=''>
            {profileLinks.map((link, index) => (
              <div key={index} className={`${activeTab === link.label ? 'block' : 'hidden'}`}>
                {link.content}
              </div>
            ))}
            {children}
          </aside>
        </div>
      </section>
    </>
  );
};

export default ArtisanCard;
