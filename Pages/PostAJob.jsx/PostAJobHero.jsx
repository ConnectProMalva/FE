import React from 'react'
import PostAJobForm from './PostAJobForm'

const PostAJobHero = () => {
  return (
    <main className="heroCon pt-[6rem] md:pt-[8rem] bg-lightPurple">
          <section className="btn flex flex-col justify-between lg:flex-row mt-3 space-y-4 lg:space-y-0 lg:space-x-4  py-3 lg:py-5 px-4 lg:px-[5rem] items-center p-4 ">
            <div className='bg-white flex flex-col py-5 px-5 max-w-[400px]'>
                <div>
                    <h2 className='font-bold text-2xl lg:text-3xl'>Post a job for free for 7 days</h2> 
                    <p className='text-base md:text-xl font-normal text-haveAnAccount pt-3'>Your job post will rank the highest in relevant search results for 7 days.</p>
                </div>
                <div>
                  <PostAJobForm/>
                </div>
            </div>
            <figure>
                <img src="https://res.cloudinary.com/drphumgcb/image/upload/v1721914250/Image_of_high_ranking_job_post_jens8d.png" className="w-full h-auto md:h-[450px] rounded-lg border-gray-300 transform transition duration-500 hover:scale-105"/>

            </figure>
          </section>
    </main>
  )
}

export default PostAJobHero