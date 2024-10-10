import React from 'react'
import SearchCard from '../../components/ReUsable/SearchCard'

const DashboardBanner = () => {
  return (
    <section className='flex flex-col md:flex-row  px-4 p-4 md:px-[5rem] md:space-x-4'>
        <SearchCard
            Image = 'https://res.cloudinary.com/drphumgcb/image/upload/v1721308423/Frame_407_dsfgyl.png'
            title ='coin icon'
            heading='Total earnings'
            value='$0'
            className='w-full md-w-[400px] mb-5'
        />
        <SearchCard
            Image = 'https://res.cloudinary.com/drphumgcb/image/upload/v1721308812/Frame_407_1_z0wh6c.png'
            title ='file icon'
            heading='Applications'
            value='0'
            className='w-full md-w-[400px] mb-5'
        />
         <SearchCard
            Image = 'https://res.cloudinary.com/drphumgcb/image/upload/v1721308863/Frame_407_2_jjv62l.png'
            title ='mail icon'
            heading='Job offers'
            value='0'
            className='w-full md-w-[400px] mb-5'
        />
    </section>
  )
}

export default DashboardBanner