import React from 'react'

const ApplicationHero = () => {
  return (
    <main>
        <section className='p-4 lg:py-10 pt-[6rem] lg:pt-[8rem] px-[3rem] lg:px-[12rem] items-center justify-center '>
            <div className='flex flex-col'>
                <h2 className='font-bold text-xl lg:text-4xl'>All applications</h2>
                <p>Explore our collection of applications and find what you need.</p>
            </div>
            <div className='flex flex-col items-center'>
                <figure>
                    <img src="https://res.cloudinary.com/drphumgcb/image/upload/v1722447871/files_and_folders___files_folder_file_sort_man_1_2x_gr4lo3.png" alt="files and folders sort man"/>
                </figure>
                <h3 className='font-bold text-2xl'>No applications</h3>
                <p className='max-w-md text-center'>You haven't applied to any jobs yet. Start applying to see all your applications</p>
                <a href="/apply" className='border mt-3 py-3 px-5 font-bold'>Apply to jobs</a>
            </div>
        </section>
    </main>
  )
}

export default ApplicationHero