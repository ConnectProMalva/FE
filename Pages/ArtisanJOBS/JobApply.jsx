import React, { useRef } from 'react'
import ProfileCompletion from './ProfileComplete'

const JobApply = () => {
  const fileInputRef = useRef(null);

  const handleFileAreaClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <aside className='md:w-[60%] h-[60rem] w-full bred-500 p-3 mt-[2rem] md:mt-0'>
        <section className="p-2 rounded-lg border md:h-[20rem] h-[22rem] mb-[1rem]">
          <h2 className='text-2xl font-bold te-white mb-4'>Send a Proposal</h2>
          <p className='text-wte mb-6'>
            Please describe to Johnathan David why you would be a good fit for the role.
          </p>
          <form className='space-y-2 p-2'>
            <div>
              <label htmlFor='jobTitle' className='block text-wite mb-2 text-[12px] font-semibold'>First Name</label>
              <textarea
                id='jobTitle'
                className='w-full px-3 py-2 h-[8rem] rounded border'
                placeholder='Eg. Joe Doe'
                required
              />
            </div>
          </form>
        </section>
        <section className="p-2 rounded-lg border">
          <h2 className='text-2xl font-bold te-white mb-4'>Additional Requirement</h2>
          <p className='text-wte mb-2'>
            Here are some additional requirements requested by the client.
          </p>
          <form className='space-y-2 p-2'>
            <div>
              <label htmlFor='resumeUpload' className='block text-wite mb-2 text-[12px] font-semibold'>Attach your resume</label>
              <div 
                className='w-full px-3 py-2 h-[8rem] rounded border border-dotted cursor-pointer flex items-center justify-center text-gray-500'
                onClick={handleFileAreaClick}
              >
                Click to upload or drag and drop
                <input
                  type="file"
                  id='resumeUpload'
                  ref={fileInputRef}
                  className='hidden'
                  accept=".pdf,.doc,.docx,.rtf"
                  required
                />
              </div>
              <p className='text-xs text-gray-500 mt-1'>Upload a file no larger than 10MB. Supported file types: .PDF .DOC .DOCX .RTF</p>
            </div>
           
          </form>

          <div className="btn mt-4">
              <button
                type='submit'
                className='w-full bg-[#5900D9] block text-white font-semibold py-2 rounded hover:bg-gray-100 transition duration-300'
              >
                Send Application
              </button>
            </div>
        </section>
        <ProfileCompletion />
      </aside>
    </>
  )
}

export default JobApply