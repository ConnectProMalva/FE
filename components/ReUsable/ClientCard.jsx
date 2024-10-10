import React from 'react'

const ClientCard = ({className, heading, value}) => {
  return (
    <div className={`flex flex-col border shadow-md ${className}`}>
        <div className='flex flex-col px-2 py-3'>
                <p className='font-medium'>{heading}</p>
                <span className='font-bold text-3xl'>{value}</span>
        </div>
      
    </div>
  )
}

export default ClientCard