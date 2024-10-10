import React from 'react'
import ArtisanCard from '../../../components/ReUsable/ArtisanCard'
import ProfileTab from './ProfileTab'
import Loader from '../../../utils/Loader'


const ArtisanAboutProfile = () => {
  const profileLinks = [
    { label: 'About me', content: <><ProfileTab/></> },
    { label: 'Earnings', content: <div>Earnings content</div>  },
    { label: 'Setttings',  content: <div>setting content</div> },
    
  ]
  
 
  return (
    <>
    <Loader/>

<ArtisanCard
            userImage="https://res.cloudinary.com/drphumgcb/image/upload/v1721151839/Ellipse_2_txqpm8.png"
            userName="Johnathan Essex"
            userLocation="Abuja, Nigeria"
            userAddress="Galadimawa, Abuja, Nigeria"
            profileLinks={profileLinks}
            // navLinks={navLinks}
            >
                
        </ArtisanCard>

      {/* <div className=''>
            <h3>About me</h3>
            <textarea 
              placeholder="Describe yourself, your experiences and interests" 
              className='w-full h-32 p-2 border rounded outline-password'
            />
            <button className='mt-2 px-4 py-2 border rounded font-bold bg-neutral max-w-[100px]'>Save</button>
      </div>
      */}

    </>
 
  )
}

export default ArtisanAboutProfile