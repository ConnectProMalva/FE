import React from 'react'

const ArtisanHero = () => {
    return (
        <main className="heroCon pt-[6rem] md:pt-[8rem]">
         <section className="flex flex-col  px-4 p-4 md:px-[5rem]">
            <div>
                <h2 className='font-bold text-xl leading-[20px] md:leading-[46.8px] md:text-[39px]'>Welcome back, Johnathan</h2>
                <p className='text-haveAnAccount'>Search through jobs to see what you can get today</p>
            </div>
            <section className="btn flex flex-col justify-between md:flex-row mt-6 space-y-4 md:space-y-0 md:space-x-4 bg-lightPurple py-3 md:py-5 px-4 md:px-8">
                <div className='flex flex-col w-full md:w-[64%]'>
                <h3 className='font-bold text-xl md:text-2xl'>Your profile isn’t visible!</h3>
                <p>Ut id sed massa vulputate pharetra leo commodo eget. Sodales aliquet tortor tellus ornare feugiat a eget. Venenatis blandit felis egestas tellus pretium.</p>
                
                <div className="btn flex flex-col md:flex-row mt-6 space-y-4 md:space-y-0 md:space-x-4">
            <a href="/artisanProfile" className="bg-password text-white px-6 py-2 rounded font-semibold hover:bg-white hover:text-password">
              Complete profile
            </a></div>
                </div>
                <figure>
                    <img src='https://res.cloudinary.com/drphumgcb/image/upload/v1721153909/Vector_7_grlndq.png'/>
                </figure>
                
              </section>
            
          </section>
        </main>
  )
}

export default ArtisanHero