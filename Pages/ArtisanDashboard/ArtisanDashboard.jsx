import React from 'react'
import ArtisanHeader from './ArtisanHeader'
import ArtisanHero from './ArtisanHero'
import ArtisanSearch from './ArtisanSearch'
import DashboardBanner from './DashboardBanner'
import Loader from '../../utils/Loader'
import Footer from '../../components/Footer/Footer'



const ArtisanDashboard = () => {
  return (
    <>
    <Loader />
    <ArtisanHeader/>
    <ArtisanHero/>
    <ArtisanSearch/>
    <DashboardBanner/>
    <Footer/>
   
    </>
  )
}

export default ArtisanDashboard