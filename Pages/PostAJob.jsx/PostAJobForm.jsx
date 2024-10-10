import React from 'react'

const PostAJobForm = () => {
  return (
    <form className='max-w-sm mx-auto mt-6'>
    <div className='mb-2'>
      <input
        type='text'
        id='hiring'
        placeholder='What Job are you hiring for?'
        className='font-normal w-full border border-borderColor rounded-md shadow-sm bg-white text-neutral py-[11px] px-[11px]'
        autoComplete='off'
      />
    </div>
    <div className='mb-4'>
      <input
        type='text'
        id='jobDone'
        placeholder='Where will the job be done?'
        className='font-normal w-full border border-borderColor rounded-md shadow-sm text-neutral py-[11px] px-[11px]'
      />
    </div>
    <div className="mt-5">
    <button
      type='submit'
      className='bg-buttonBackground border border-borderColor hover:bg-white w-full text-buttonColor shadow-sm font-bold py-2 px-4 rounded'
    >
      Post a Job For Free
    </button>
    </div>
    
  </form>
  )
}

export default PostAJobForm