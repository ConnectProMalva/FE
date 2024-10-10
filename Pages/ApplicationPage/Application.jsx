import React from 'react'
import Loader from '../../utils/Loader'
import ArtisanHeader from '../ArtisanDashboard/ArtisanHeader'
import ApplicationHero from './ApplicationHero'
import ArtisanFooter from '../ArtisanDashboard/ArtisanFooter'

const Application = () => {
  return (
    <>
    <Loader/>
    <ArtisanHeader/>
    <ApplicationHero/>
    <ArtisanFooter/>
    </>
  )
}

export default Application