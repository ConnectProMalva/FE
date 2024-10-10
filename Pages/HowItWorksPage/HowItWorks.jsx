import React from 'react'
import Header from '../../components/Header/Header'
import Hero from './HeroHowItWorks'
import ChooseProfile from './ChooseProfile'
import Post from './Post'
import ChooseArtisan from './ChooseArtisan'
import TrackCompletion from './TrackCompletion'
import Benefits from './Benefits'
import Banner from '../../Banner/Banner'
import Footer from '../../components/Footer/Footer'
import Loader from '../../utils/Loader'

const HowItWorks = () => {
  return (
    <>

    <Loader />
    <Header/>
    <Hero/>
    <ChooseProfile/>
    <Post/>
    <ChooseArtisan/>
    <TrackCompletion/>
    <Benefits/>
    <Banner/>
    <Footer/>
    </>
   
  )
}

export default HowItWorks