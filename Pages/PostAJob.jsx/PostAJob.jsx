import React from 'react'
import Header from '../../components/Header/Header'
import PostAJobHero from './PostAJobHero'
import Work from './Work'
import PostTestimonial from './PostAJobTestimonial'
import Footer from '../../components/Footer/Footer'
import FAQSection from './FAQSection'


const PostAJob = () => {
  return (
    <>
    <Header/>
    <PostAJobHero/>
    <Work/>
    <PostTestimonial/>
    <FAQSection/>
    <Footer/>
   
    </>
  )
}

export default PostAJob