import React from 'react'

const ClientHeroBottomCard = ({ title, paragraph, semiTitle, description, buttonText, buttonLink  }) => {
  return (
    <section className='md:w-[450px] w-full p-5 mt-[2rem] md:mt-0 rounded-lg border border-gray-200 shadow-sm flex flex-col justify-between h-[auto]'>
      <div>
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{paragraph}</p>
      </div>
      <hr className="border-t border-gray-300 my-4" />
      <div className='flex flex-col items-center justify-center text-center'>
        <h3 className="text-lg font-semibold mb-2">{semiTitle}</h3>
        <p className="text-gray-500 mb-4">{description}</p>
      </div>
      {buttonText && buttonLink && (
        <div className='mt-4 mx-auto'>
          <a href={buttonLink} className='inline-block px-4 py-2 bg-password text-white rounded hover:bg-borderColor hover:text-password'>
            {buttonText}
          </a>
        </div>
      )}
    </section>
  )
}

export default ClientHeroBottomCard;
