import React, {useState} from 'react'
import Dropdown from '../../components/ReUsable/Dropdown'

const SearchForAJob = () => {
    const [experienceLevel, setExperienceLevel] = useState('')
    const [salaryRange, setSalaryRange] = useState('')
    const [location, setLocation] = useState('')
    const [deadline, setDeadline] = useState('')


    const handleExperienceChange = (e) => {
        setExperienceLevel(e.target.value)
    }

    const handleSalaryRangeChange = (e) => {
        setSalaryRange(e.target.value)
    }

    const handleLocationChange = (e) => {
        setLocation(e.target.value)

    }

    const handleDeadlineChange = (e) =>{
        setDeadline(e.target.value)
    }


    const experienceOptions =[
        { value: 'entry', label: 'Entry Level' },
        { value: 'mid', label: 'Mid Level' },
        { value: 'Senior', label: 'Senior Level' },
    ]

    const salaryOptions =[
        { value: '$20000', label: '$20000-$50000' },
        { value: '$50000', label: '$50000-$100000' },
        { value: '$100000', label: '$100000-$200000' },
    ]

    const locationOptions = [
        {value: 'online', label: 'Online'},
        {value: 'onsite', label: 'Onsite'},
        {value: 'hybrid', label: 'Hybrid'},
    ]

    const deadlineOptions = [
        {value: 'online', label: 'Online'},
        {value: 'onsite', label: 'Onsite'},
        {value: 'hybrid', label: 'Hybrid'},
    ]
  return (
    <div>
        <Dropdown
          options={experienceOptions}
          value={experienceLevel}
          onChange={handleExperienceChange}
          placeholder='Experience Level'
          className='mr-5 font-bold mb-3'
        /> 


        <Dropdown
          options={salaryOptions}
          value={salaryRange}
          onChange={handleSalaryRangeChange}
          placeholder='Salary Range'
          className='mr-5 font-bold mb-3'
        />

            
        <Dropdown
          options={locationOptions}
          value={location}
          onChange={handleLocationChange}
          placeholder='Location'
          className='mr-5 font-bold mb-3'
        />  

        <Dropdown
          options={deadlineOptions}
          value={deadline}
          onChange={handleDeadlineChange}
          placeholder='Deadline'
          className='font-bold'
        /> 
    </div>
  )
}

export default SearchForAJob