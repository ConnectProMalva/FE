import React from 'react'
import ClientUpgrade from './ClientUpgrade'
import ClientCardDetails from './ClientCardDetails'
import ClientHeroBottom from './ClientHeroBottom'

const ClientHero = () => {
  return (
    <main className="heroCon pt-[6rem] md:pt-[8rem]">
      <h3 className="text-lg font-semibold mb-4 px-4 md:px-[5rem]">Welcome, Johnathan</h3>
      <section className="flex flex-col md:flex-row justify-between px-4 p-4 md:px-[5rem]">
        <div className='flex flex-col w-full md:w-2/3'>
          <ClientCardDetails/>
          <ClientHeroBottom/>
        </div>
        <ClientUpgrade className="w-full md:w-1/3 mt-6 md:mt-0 md:ml-6" />
      </section>
    </main>
  )
}

export default ClientHero;
