import React from 'react'
import ClientCard from '../../components/ReUsable/ClientCard'

const ClientCardDetails = () => {
  return (
    <div className='flex justify-between'>
      <ClientCard
        heading='Post Views'
        value='0'
        className='flex-grow mb-5 mx-2'
      />
      <ClientCard
        heading='Posted Jobs'
        value='0'
        className='flex-grow mb-5 mx-2' 
      />
      <ClientCard
        heading='Total applications'
        value='0'
        className='flex-grow mb-5 mx-2' 
      />
    </div>
  )
}

export default ClientCardDetails;
