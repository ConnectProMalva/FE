import React from 'react'
import ArtisanHeader from '../ArtisanDashboard/ArtisanHeader'
import ArtisanFooter from '../ArtisanDashboard/ArtisanFooter'
import JobList from './JobListing'
import Loader from '../../utils/Loader'

const Jobs = () => {
  return (
    <>
    <section>
      <Loader />
        <ArtisanHeader />

        <JobList />
        <ArtisanFooter/>
    </section>
    
    </>
  )
}

export default Jobs