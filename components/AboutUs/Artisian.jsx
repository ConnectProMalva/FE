import React from 'react'
import AboutCard from '../ReUsable/AboutCard'
import Button from "../ReUsable/Button"

const Artisian = () => {
  return (
    <>
      <section className="c pt-[4rem]">
        <AboutCard
          // imageOnRight={true}
          subtitle="For Artisian"
          image="https://res.cloudinary.com/dytlpvw1o/image/upload/v1720100847/Rectangle_6_z5bhff.png"
          title="Vet for jobs you can be sure to get!"
          description="Rather than waiting on an offer letter from an impossibly large pool of 
          competitors, apply for jobs you can be sure to get instantly."
          button={<Button className='md:w-[40%] w-full h-[2.8rem]'>Search for job</Button>}
        />
      </section>
    </>
  )
}

export default Artisian