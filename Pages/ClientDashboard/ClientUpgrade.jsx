import React from 'react'
import { FaStarAndCrescent } from 'react-icons/fa'
import UpgradeData from './UpgradeData'

const ClientUpgrade = () => {
  return (
    <>
    <aside className='md:w-[295px] h-[24rem] md:h-[24rem] w-full p-3 mt-[2rem] md:mt-0 rounded-lg border '>
        <div className='pt-3'>
            <FaStarAndCrescent/>
            <h2 className='text-2xl font-bold mb-4'>Upgrade to Premium</h2>
            <p>Upgrade to premium and maximize your recruitment efforts with our premium job posting features</p>
            <UpgradeData/>
            <button
            type='submit'
            className='w-full bg-[#5900D9] block mt-5
             text-white font-semibold py-2 rounded hover:bg-gray-100 transition duration-300'
            >
             See all plans
            </button>
        </div>
     
    </aside>
    </>
  )
}

export default ClientUpgrade