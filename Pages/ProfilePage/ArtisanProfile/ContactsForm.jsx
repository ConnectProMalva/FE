import React from 'react'

const ContactsForm = () => {
  return (
    <main>
       <form className=' mb-3'>
        <div className='mb-2'>
          <label htmlFor='email' className='font-bold block mb-2'>Email</label>
          <input
            type='email'
            id='email'
            placeholder='johnessex23@gmail.com'
            className='font-normal w-full border border-borderColor rounded-md shadow-sm bg-white text-neutral py-[11px] px-[11px]'
            autoComplete='off'
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='skype' className='font-bold block mb-2'>Skype</label>
          <input
            type='text'
            id='skype'
            placeholder='Enter Skype'
            className='font-normal w-full border border-borderColor outline-password rounded-md shadow-sm text-neutral py-[11px] px-[11px]'
            autoComplete=''
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='phone' className='font-bold block mb-2'>Phone Number</label>
          <input
            type='tel'
            id='phone'
            placeholder='+2348103457628'
            className='font-normal w-full border border-borderColor outline-password rounded-md shadow-sm text-neutral py-[11px] px-[11px]'
            autoComplete=''
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='telegram' className='font-bold block mb-2'>Telegram</label>
          <input
            type='text'
            id='telegram'
            placeholder='Enter telegram'
            className='font-normal w-full border border-borderColor outline-password rounded-md shadow-sm text-neutral py-[11px] px-[11px]'
            autoComplete=''
          />
        </div>
        <div className='mb-4'>
        <label htmlFor='file-upload' className='font-bold block mb-2 cursor-pointer'> Curriculum Vitae (CV)</label>
        <label htmlFor="file-upload" className="cursor-pointer block border border-dashed border-password p-4 py-5 text-center">
            <p className="font-bold mb-2">Click to add a file</p>
            <span className=''>Upload a file no larger than 10MB. Supported file types: <br className='hidden md:block'/>PDF, DOC, DOCX, RTF</span>
        </label>
        <input id="file-upload" name="cv" type="file" className="hidden"/>
        </div>
        <div className="mt-5">
        <button
          type='submit'
          className='bg-buttonBackground border border-borderColor hover:bg-white w-full text-password shadow-sm font-bold py-2 px-4 rounded'
        >
         Save
        </button>
      
        </div>
        
      </form>
    </main>
  )
}

export default ContactsForm