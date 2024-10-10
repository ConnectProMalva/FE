import React from 'react'
import ProfileCompletion from './ProfileComplete'

const JobAlert = () => {
  return (
    <>
    <aside className='md:w-[40%] h-[40rem] md:h-[30rem] w-full bred-500 p-3 mt-[2rem] md:mt-0 rounded-lg border '>
      <h2 className='text-2xl font-bold te-white mb-4'>Create Job Alert</h2>
      <p className='text-wte mb-6'>
      Describe your idea job and we’ll deliver them to your inbox.
      </p>
      <form  className='space-y-2  p2'>
        <div>
          <label htmlFor='jobTitle' className='block text-wite mb-2  text-[12px]   font-semibold'>Job Title</label>
          <input
            type='text'
            id='jobTitle'
           
            className='w-full px-3 py-2 rounded border'
             placeholder='Enter Job Tittle'
            required
          />
        </div>
        <div>
          <label htmlFor='experienceLevel' className='block tex-white font-semibold  text-[12px]  mb-2 mt-[1rem]'>Experience Level</label>
          <select
            id='experienceLevel'
           
            className='w-full px-3 py-2 rounded border'
            required
          >
            <option value=''>Select experience level</option>
            <option value='entry'>Entry Level</option>
            <option value='mid'>Mid Level</option>
            <option value='senior'>Senior Level</option>
          </select>
        </div>
        <div>
          <label htmlFor='salaryRange' className='block font-semibold mt-[1rem] text-[12px] mb-2'>Salary Range</label>
          <input
            type='text'
            id='salaryRange'
           
            className='w-full px-3 py-2 rounded border mb-[1rem] '
            placeholder='e.g., $50,000 - $80,000'
            required
          />
        </div>

        <div className="btn  ">

        <button
          type='submit'
          className='w-full bg-[#5900D9] block
          text-white font-semibold py-2 rounded hover:bg-gray-100 transition duration-300'
          >
          Subscribe
        </button>
          </div>
      </form>


      <ProfileCompletion />
    </aside>
    
    </>
  )
}

export default JobAlert