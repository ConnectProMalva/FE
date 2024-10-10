import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Banner from '../../Banner/Banner'
import FaqQst from './FaqQst'

const FaqPage = () => {
  return (
    <>
    <Header/>

    <section className="bg-[#EFE6FD] py-10 pt-[12rem] px-[5rem] h-[60vh]  items-center justify-center ">
      <h1 className="text-5xl font-bold mb-">Frequently Asked Questions  </h1>
      <p className='py-5 w-[60%] text-[18px]'>ConnectPro offers a wide range of services to help you with everyday tasks and specialized jobs. Whether you need assistance with 
        household chores, repairs, or errands, our trusted professionals are here to help.</p>
     
    </section>

<FaqQst />
    <Banner />
    <Footer/>
    
    </>
  )
}

export default FaqPage