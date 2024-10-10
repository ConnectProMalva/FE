import React from 'react'
import Faq  from '../../components/ReUsable/Faq';

const FaqQst = () => {

    const faqData = [
        {
          question: "What is your return policy?",
          answer: "We offer a 30-day return policy for all unused items in their original packaging."
        },
        {
          question: "How long does shipping take?",
          answer: "Shipping typically takes 3-5 business days for domestic orders and 7-14 days for international orders."
        },
        // Add more FAQ items as needed
      ];
    
  return (
    <>
    
    <section className="con flex px-[2rem] mt-[2rem]">
        <section className="des">
<h1 className='font-bold text-2xl'>General Questions</h1>
<p className='w-[60%]'>ConnectPro offers a wide range of services to help you with everyday tasks and specialized jobs.</p>
        </section>

        <section className="qst w-[60%] h-[30rem">
        <Faq faqs={faqData} />
        </section>
    </section>
    </>
  )
}

export default FaqQst