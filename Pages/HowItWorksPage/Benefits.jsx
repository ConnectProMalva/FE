import React from 'react'

const Benefits = () => {
  return (
    <section className='flex flex-col md:flex-row items-center justify-between px-4 md:px-[4rem] mt-16 md:mt-[8rem] overflow-hidden'>
    <figure className='w-full md:w-[48%] overflow-hidden rounded-lg mb-8 md:mb-0'>
        <img 
          src='https://res.cloudinary.com/drphumgcb/image/upload/v1721145299/Frame_411_cstkjg.png'
          alt='benefit image'
          className="w-full h-auto md:h-[400px] rounded-lg object-cover border-gray-300 transform transition duration-500 hover:scale-105"
        />
      </figure>
      <div className='md:w-[48%]'>
        <h2 className='text-password text-[18px] font-bold'>BENEFITS</h2>
        <h3 className='font-bold text-xl md:text-[39px] leading-[46.8px]'>Why Choose ConnectPro?</h3>
        <div className='flex flex-col mt-5'>
            <div className='flex pb-3 max-w-[348px]'>
                <figure className='mr-4'>
                    <img 
                        src='https://res.cloudinary.com/drphumgcb/image/upload/v1721146196/Vector_1_yxxt3n.png'
                        alt='user icon' />
                </figure>
                <div>
                    <h4 className='font-bold text-xl '>Trusted Professionals</h4>
                    <p className=''>All taskers are vetted and background-checked.</p>
                </div>
            </div>
            <div className='flex pb-3 max-w-[348px]'>
                <figure className='mr-4'>
                    <img 
                        src='https://res.cloudinary.com/drphumgcb/image/upload/v1721147828/Vector_2_gfzljf.png'
                        alt='user icon' />
                </figure>
                <div>
                    <h4 className='font-bold text-xl '>Secure payments</h4>
                    <p>Your payments are processed securely through our platform.</p>
                </div>
            </div>
            <div className='flex pb-3 max-w-[348px]'>
                <figure className='mr-4'>
                    <img 
                        src='https://res.cloudinary.com/drphumgcb/image/upload/v1721147869/Vector_3_g8xv56.png'
                        alt='user icon' />
                </figure>
                <div>
                    <h4 className='font-bold text-xl '>Flexible options</h4>
                    <p>Find the right tasker for any job, big or small.</p>
                </div>
            </div>
            <div className="btn flex flex-col md:flex-row mt-6 space-y-4 md:space-y-0 md:space-x-4">
            <a href="" className="bg-password text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-password">
              Post a task 
            </a>
          
          </div>
              
        </div>
        </div>
        
      </section>

  )
}

export default Benefits