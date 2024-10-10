import React from 'react'

const SearchCard = ({className, Image, title, heading, value}) => {
  return (
    <div className={`flex flex-col border shadow-md ${className}`}>
        <div className='flex px-5 py-5'>
            <figure>
              <img src={Image} alt={title}/>
            </figure>
            <div className='ml-5'>
                <p className='font-medium'>{heading}</p>
                <span className='font-bold text-3xl'>{value}</span>
            </div>
        </div>
        <div className='btn flex mt-4 md:space-x-4 w-full md-w-[400px]'>
            <a href="/" className='bg-serviceHero text-password px-6 py-2 rounded font-semibold block w-full hover:bg-password hover:text-white'>View Plans</a>
        </div>
    </div>
  )
}

export default SearchCard