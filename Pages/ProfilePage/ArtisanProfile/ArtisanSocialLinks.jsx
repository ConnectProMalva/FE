import React from 'react'
import ArtisanCard from '../../../components/ReUsable/ArtisanCard';
import SocialsForm from './SocialsForm';
import ArtisanHeader from '../../ArtisanDashboard/ArtisanHeader';
import Loader from '../../../utils/Loader';

const ArtisanSocialLinks = () => {
    const profileLinks = [
        { label: 'Public Profile', href: '#' },
        { label: 'Earnings', href: '#' },
        { label: 'Settings', href: '#' }
      ];
      
      const navLinks = [
        { label: 'About me', href: '/artisanAbout' },
        { label: 'Work experience', href: '/ArtisanWorkExperience', icon: true },
        { label: 'Portfolio', href: '/artisanPortfolio', icon: true },
        { label: 'Social links', href: '/artisanSocials', icon: true },
        { label: 'CV and Contacts', href: '/contacts', icon: true }
      ];
  return (
    <>
    <Loader/>
    <ArtisanHeader/>
       <ArtisanCard
            userImage="https://res.cloudinary.com/drphumgcb/image/upload/v1721151839/Ellipse_2_txqpm8.png"
            userName="Johnathan Essex"
            userLocation="Abuja, Nigeria"
            userAddress="Galadimawa, Abuja, Nigeria"
            profileLinks={profileLinks}
            navLinks={navLinks}>
                <div className=''>
                    <SocialsForm/>
                </div>

        </ArtisanCard>
    </>
 
  )
}

export default ArtisanSocialLinks