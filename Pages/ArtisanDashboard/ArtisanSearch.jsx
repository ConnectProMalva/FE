import React from 'react'
import SearchForAJob from './SearchForAJob'

const ArtisanSearch = () => {
  return (
    <section className='pt-[2rem] px-4 md:px-[5rem] p-4 '>
        <h3 className='font-bold text-3xl'>Search for a job</h3>
        <div className="border rounded-md mt-10 py-5 px-5">
        <form className='flex flex-col md:flex-row md:space-x-4'>
            <div className='flex-1 mb-2 relative'>
            <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                <img 
                src='https://res.cloudinary.com/drphumgcb/image/upload/v1721155686/Vector_8_gvi7o7.png'
                alt='search icon'/>
            </span>
                <input
                type='text'
                id='Search'
                name='Search'
                placeholder='Search job title or skill'
                className='font-normal w-full border border-borderColor outline-password rounded-md shadow-sm bg-white text-neutral py-[11px] px-[11px] pl-10'
                autoComplete='off'
                />
            </div> 
            <div className='flex-1 mb-2 relative'>
            <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                <img 
                src='https://res.cloudinary.com/drphumgcb/image/upload/v1721155686/Vector_8_gvi7o7.png'
                alt='search icon'/>
            </span>
                <input
                type='text'
                id='SearchCountry'
                name='SearchCountry'
                placeholder='Search country or state'
                className='font-normal w-full border border-borderColor outline-password rounded-md shadow-sm bg-white text-neutral py-[11px] px-[11px] pl-10'
                autoComplete='off'
                />
            </div>
            <div className='mb-2 flex items-center border flex-initial'>
            <span className=' inset-y-0 left-0 flex items-center pl-2 pr-7 font-bold'>
               clear
            </span>
            <a href="" className="font-normal border bg-password border-borderColor outline-password rounded-md shadow-sm space-y-4 md:space-y-0 md:space-x-4 text-white py-[6px] px-[6px] btn ">Search all jobs</a>
               
            </div>
        </form>
        <div>
            <form className='flex flex-col md:flex-row md:space-x-4 py-3 px-5'>
            <SearchForAJob/>
            </form>
        </div>
        
        </div>
    </section>
    
  )
}

export default ArtisanSearch