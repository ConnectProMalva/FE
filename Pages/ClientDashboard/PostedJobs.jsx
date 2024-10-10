import React from 'react'
import ClientHeroBottomCard from '../../components/ReUsable/ClientHeroBottomCard'

const PostedJobs = () => {
  return (
    <>
        <ClientHeroBottomCard
        title="Posted jobs"
        paragraph="Manage both live and draft job listings"
        semiTitle='No posted Jobs'
        description="You haven't posted any jobs"
        buttonText='Post a Job'
        buttonLink='/'/>
    </>
  )
}

export default PostedJobs