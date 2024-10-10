import React from 'react'
import HowItWorkCard from '../../components/ReUsable/HowItWorkCard'

const Post = () => {
  return (
    <HowItWorkCard
    imageOnRight={true}
    image="https://res.cloudinary.com/drphumgcb/image/upload/v1720987673/Rectangle_12_4_tfwbvv.png"
    title="Post a task"
    description="Describe the task, set your budget and timeline, and post it on the platform."
    button="Post a task for free"/>
  )
}

export default Post