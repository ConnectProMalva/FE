import React from 'react'
import classNames from 'classnames';

const HowItWorkCard = ({image, title, description, imageOnRight = false, button}) => {
  return (
    <section className={
        classNames(
          "flex flex-col md:flex-row items-center justify-between px-4 md:px-[4rem] mt-16 md:mt-[8rem] overflow-hidden",
          {
            "md:flex-row-reverse": imageOnRight,
            'md:flex-row': !imageOnRight
          }
        )
      }>
        <figure className='w-full md:w-[48%] overflow-hidden rounded-lg mb-8 md:mb-0'>
          <img 
            src={image}
            alt={title}
            className="w-full h-auto md:h-[400px] rounded-lg object-cover border-gray-300 transform transition duration-500 hover:scale-105"
          />
        </figure>
        <figcaption className="p-4 md:p-6 w-full md:w-[40%] flex flex-col justify-between text-center md:text-left">
          <div>
            <h2 className="text-3xl md:text-[48px] font-bold leading-tight md:leading-[50px] text-gray-900 mb-3">{title}</h2>
            <p className="text-textColor my-6 text-base md:text-[20px]">{description}</p>
            <a href="" className='text-textColor px-6 py-2 rounded-lg shadow-md bg-white font-bold hover:bg-password hover:text-white mt-12 border'>{button}</a>
          </div>
        </figcaption>
      </section>
  )
}

export default HowItWorkCard