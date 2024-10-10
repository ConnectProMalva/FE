import React from 'react'
import Faq from '../../components/ReUsable/Faq'
import { FAQData } from './FAQData'


const FAQSection = () => {
  return (
    <main className="pt-[4rem] bg-white">
        <section className="flex flex-col justify-between mt-3 space-y-4 lg:space-y-0 lg:space-x-4  py-3 lg:py-5 px-4 lg:px-[5rem] lg:items-center p-4">
            <hi className="font-bold text-xl lg:text-4xl">Frequently Asked Question</hi>
            <div className='w-full lg:w-[70%]'>
                <Faq faqs={FAQData} />
            </div>  
        </section>
    </main>
  )
}

export default FAQSection