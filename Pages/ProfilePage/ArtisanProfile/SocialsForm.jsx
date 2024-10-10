import React from 'react'

const SocialsForm = () => {
  return (
    <main>
       <form className=' mb-3'>
        <div className='mb-2'>
          <label htmlFor='linkedin' className='font-bold block mb-2'>Linkedin</label>
          <input
            type='url'
            id='linkedin'
            placeholder='https://'
            className='font-normal w-full border border-borderColor rounded-md shadow-sm bg-white text-neutral py-[11px] px-[11px]'
            autoComplete='off'
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='instagram' className='font-bold block mb-2'>Instagram</label>
          <input
            type='url'
            id='instagram'
            placeholder='https://'
            className='font-normal w-full border border-borderColor rounded-md shadow-sm text-neutral py-[11px] px-[11px]'
            autoComplete=''
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='website' className='font-bold block mb-2'>Website</label>
          <input
            type='url'
            id='website'
            placeholder='https://'
            className='font-normal w-full border border-borderColor rounded-md shadow-sm text-neutral py-[11px] px-[11px]'
            autoComplete=''
          />
        </div>
        <div className='flex flex-row gap-5'>
        <div className='mb-4'>
          <label htmlFor='linkTitle' className='font-bold block mb-2'>Link title</label>
          <input
            type='url'
            id='linkTitle'
            placeholder='e.g my website'
            className='font-normal w-full border border-borderColor rounded-md shadow-sm text-neutral py-[11px] px-[11px]'
            autoComplete=''
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='customLink' className='font-bold block mb-2'>Custom link</label>
          <input
            type='url'
            id='customLink'
            placeholder='https://'
            className='font-normal w-full border border-borderColor rounded-md shadow-sm text-neutral py-[11px] px-[11px]'
            autoComplete=''
          />
        </div>

        </div>
        <div className="mt-5">
        <button
          type='submit'
          className='bg-buttonBackground border border-borderColor hover:bg-white w-full text-password shadow-sm font-bold py-2 px-4 rounded'
        >
         Add Link
        </button>
      
        </div>
        
      </form>
    </main>
  )
}

export default SocialsForm