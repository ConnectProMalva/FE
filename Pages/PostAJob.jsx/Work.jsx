import React from 'react'
import { WorkData } from './WorkData'

const Work = () => {

  return (
    <main className='heroCon pt-[3rem] md:pt-[3rem]'>
        <section className='flex flex-col items-center x-4 md:px-[2rem] lg:px-[4rem] '>
            <div className=' flex flex-col items-center'>
                <h2 className='text-password font-bold'>HOW IT WORKS</h2>
                <p className='font-bold text-2xl lg:text-4xl text-center pt-3'>Post your job for free in 3<br className="hidden md:block" /> simple steps</p>
            </div>
            <div className='mt-5'>
               {WorkData.map((work, index) => (
                <div key={index}  className="flex flex-col items-center justify-center p-4 w-full cursor-pointer max-w-[348px] text-center space-y-1">
                    <figure> <img src={work.image} alt={work.title} className="h-full w-full object-contain" /></figure>
                    <h2 className="font-bold">{work.title}</h2>
                    <p>{work.description}</p>
                </div>
                

               ))}
            </div>
        </section>
    </main>
  )
}


export default Work