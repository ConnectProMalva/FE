import React from 'react'
import PostedJobs from './PostedJobs'
import ClientHeroApplications from './ClientHeroApplication'

const ClientHeroBottom = () => {
  return (
    <>
        <section className='flex flex-col lg:flex-row justify-between'>
            <PostedJobs/>
            <ClientHeroApplications/>
            
            {/* <div>
                <h2>Posted Jobs</h2>
                <p>Manage both live and draft job listings</p>
            </div>
            <hr/>
            <div className='items-center'>
                <h3>No posted Jobs</h3>
                <p>You haven't posted any jobs</p>
                <a
                href=''
                className='w-full bg-[#5900D9] block mt-5
             text-white font-semibold py-2 rounded hover:bg-gray-100 transition duration-300'
            >
             Post a Job
            </a>
            </div> */}
        </section>
    </>
  )
}

export default ClientHeroBottom