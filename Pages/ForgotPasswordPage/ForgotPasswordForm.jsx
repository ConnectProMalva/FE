import React from 'react'

const ForgotPasswordForm = () => {
  return (
    <form className='max-w-sm mx-auto'>
        <div className='mb-2'>
          <label htmlFor='email' className='font-bold block mb-2'>Email address</label>
          <input
            type='email'
            id='email'
            placeholder='johndoe@gmail.com'
            className='font-normal w-full border border-borderColor outline-password rounded-md shadow-sm bg-white text-neutral py-[11px] px-[11px]'
            autoComplete='off'
          />
        </div>
        <div className="mt-5">
            <button
                type='submit'
                className='bg-buttonBackground border border-borderColor outline-password hover:bg-white w-full text-buttonColor shadow-sm font-bold py-2 px-4 rounded'>Send reset link
            </button>
    
    </div>
    
  </form>
  )
}

export default ForgotPasswordForm