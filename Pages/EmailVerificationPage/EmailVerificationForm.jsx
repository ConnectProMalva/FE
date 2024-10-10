import React from 'react'

const EmailVerificationForm = () => {
  return (
    <form className='max-w-sm mx-auto'>
    <div className='mb-2'>
      <label htmlFor='verification-code' className='font-bold block mb-2'>Verification code</label>
      <input
        type='text'
        id='verification-code'
        placeholder='Enter verification code'
        className='font-normal w-full border border-borderColor outline-password rounded-md shadow-sm bg-white text-neutral py-[11px] px-[11px]'
        autoComplete='off'
        required
      />
    </div>
    <div className="mt-5">
    <button
      type='submit'
      className='bg-buttonBackground border border-borderColor outline-password hover:bg-white w-full text-buttonColor shadow-sm font-bold py-2 px-4 rounded'
    >
      Verify
    </button>
    <p className="text-center text-haveAnAccount font-normal mt-5">Didn't receive code? <span className='font-bold'>Resend</span></p>
    <p className="text-center text-haveAnAccount font-normal mt-5">Wrong email address? <span className='font-bold'>Change Email</span></p>
    </div>
    
  </form>
  )
}

export default EmailVerificationForm