import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import Footer from '../../components/Footer/Footer'
import Artisian from '../../components/AboutUs/Artisian'
import Clients from '../../components/AboutUs/Client'
import Loader from '../../utils/Loader'
import Task from '../../components/Task/Task'
import Banner from '../../Banner/Banner'
import Testimonial from '../../components/Testimonal/Tstimonia'


const LandingPage = () => {
  return (
    <>
    {/* <Loader /> */}
   <Header />
   <Hero/>
   <Artisian />
   <Clients />
   <Task />
   <Testimonial />
   <Banner />
   <Footer/>
    </>
  )
}

export default LandingPage