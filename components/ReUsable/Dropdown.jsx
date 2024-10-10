import React from 'react'

const Dropdown = ({options, value, onChange, className, placeholder }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className={`px-3 py-2 border border-gray-300 rounded-md focus:outline-password focus:border-password ${className}`}>
        <option value='' className='font-bold'>{placeholder}</option>
        {options.map((option, index)=> (
           <option key={index} value={option.value}>
            {option.label}
           </option>
        ))}
    </select>
  )
}

export default Dropdown

  