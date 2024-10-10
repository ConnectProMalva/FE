import React, { useState } from 'react';
import { FaBriefcase, FaCode, FaPaintBrush, FaChalkboardTeacher, FaCamera, FaBroom, FaUtensils, FaBaby, FaDog, FaTools, FaTimes } from 'react-icons/fa';
import JobAlert from './JobAlert';
import { Link } from 'react-router-dom';

const opportunities = [
  {
    id: 1,
    title: "Senior Software Developer",
    description: {
      description: "Join our innovative tech team to build cutting-edge web applications that solve real-world problems. You'll be working with a talented group of engineers, designers, and product managers who are passionate about technology and user experience. Our projects range from fintech solutions to AI-driven platforms, providing ample opportunities for professional growth.",
      requirements: "5+ years experience with React, Node.js, and SQL. Familiarity with cloud platforms (AWS/Azure). Strong problem-solving skills and the ability to work in a fast-paced environment. Excellent communication and teamwork abilities are essential.",
      responsibilities: "Lead development of key features, collaborate with product managers, perform code reviews. You'll also mentor junior developers, contribute to architectural decisions, and ensure the scalability and reliability of our systems.",
      duration: "Full-time",
      location: "New York, NY (Hybrid)",
      payment: "$120,000 ",
      details: "Flexible work hours, comprehensive health benefits, 401(k) matching. Additional perks include gym membership discounts, professional development programs, and regular team-building events."
    },
    time: "Posted 2 days ago",
    category: "Technology",
    amount: 2,
    isOnline: true,
    icon: <FaCode />
  },
  {
    id: 2,
    title: "House Cleaning",
    description: {
      description: "Thorough house cleaning needed for a 3-bedroom apartment. The ideal candidate will have a keen eye for detail and a commitment to leaving every room spotless. This includes deep cleaning bathrooms and kitchens, ensuring all surfaces are sanitized, and managing any specific cleaning requests from the client.",
      requirements: "Experience in house cleaning, attention to detail, own cleaning supplies preferred. Must be reliable, punctual, and have a professional demeanor.",
      responsibilities: "Dusting, vacuuming, mopping, bathroom and kitchen cleaning. Additional tasks may include organizing closets, cleaning windows, and handling light laundry duties.",
      duration: "One-time (Recurring possible)",
      location: "Brooklyn, NY",
      payment: "$100 ",
      details: "Flexible scheduling, must be comfortable with pets. The client has a friendly dog and two cats, so a love for animals is a plus."
    },
    time: "Posted 1 day ago",
    category: "Household",
    amount: 1,
    isOnline: false,
    icon: <FaBroom />
  },
  {
    id: 3,
    title: "Creative Graphic Designer",
    description: {
      description: "Be part of a dynamic creative team working on exciting branding projects for Fortune 500 companies. You'll be responsible for developing visually stunning graphics that convey our clients' brand messages effectively. This role offers a chance to push creative boundaries and see your work have a real-world impact.",
      requirements: "Expert proficiency in Adobe Creative Suite. Strong portfolio showcasing branding work. Experience with UI/UX design is a plus. Excellent communication skills and the ability to work collaboratively in a team environment.",
      responsibilities: "Create logos, brand guidelines, marketing materials, and digital assets. You'll also be involved in brainstorming sessions, client presentations, and revisions based on feedback.",
      duration: "Contract (6 months, possibility of extension)",
      location: "Remote",
      payment: "$65 ",
      details: "Flexible schedule, opportunity to work with high-profile clients. You will have access to the latest design tools and resources to support your creative process."
    },
    time: "Posted 1 week ago",
    category: "Design",
    amount: 3,
    isOnline: true,
    icon: <FaPaintBrush />
  },
  {
    id: 4,
    title: "Personal Chef for Dinner Party",
    description: {
      description: "Seeking a skilled chef to prepare a gourmet dinner for a special occasion. This event is for a close-knit group of friends and family who appreciate fine dining. You'll have the creative freedom to design a menu that showcases your culinary talents.",
      requirements: "Culinary degree or equivalent experience, knowledge of dietary restrictions and allergies. Must be adaptable and able to handle last-minute changes or special requests.",
      responsibilities: "Menu planning, grocery shopping, meal preparation, and kitchen cleanup. You'll also need to interact with guests, explain the dishes, and ensure everyone has an unforgettable dining experience.",
      duration: "One-time event",
      location: "Los Angeles, CA",
      payment: "$300 ",
      details: "Event for 8 people, focus on Mediterranean cuisine. The host prefers a mix of traditional and contemporary dishes, with an emphasis on fresh, local ingredients."
    },
    time: "Posted 3 days ago",
    category: "Culinary",
    amount: 1,
    isOnline: false,
    icon: <FaUtensils />
  },
  {
    id: 5,
    title: "Babysitter for Weekend",
    description: {
      description: "Responsible babysitter needed for two children (ages 3 and 5) over a weekend. The ideal candidate will have a warm, engaging personality and a genuine love for children. Activities will include outdoor play, arts and crafts, and reading.",
      requirements: "Childcare experience, First Aid certification, engaging personality. Must be able to handle bedtime routines and have the ability to create a fun, safe environment.",
      responsibilities: "Supervising children, meal preparation, bedtime routines, light housekeeping. You'll also need to manage any unexpected situations calmly and efficiently.",
      duration: "Weekend (Friday evening to Sunday afternoon)",
      location: "Chicago, IL",
      payment: "$20 ",
      details: "Must be comfortable with overnight stay, references required. The parents will provide detailed instructions and be available for emergencies."
    },
    time: "Posted 4 days ago",
    category: "Childcare",
    amount: 1,
    isOnline: false,
    icon: <FaBaby />
  },
  {
    id: 6,
    title: "Dog Walker",
    description: {
      description: "Reliable dog walker needed for daily walks of two medium-sized dogs. These dogs are energetic and require a handler who can keep up with their pace and ensure they get plenty of exercise and stimulation.",
      requirements: "Experience with dogs, physically fit, available weekdays. Must be patient, kind, and knowledgeable about basic dog behavior and commands.",
      responsibilities: "Walking dogs, providing water and treats, basic obedience reinforcement. You'll also be responsible for ensuring the dogs' safety during walks and reporting any concerns to the owner.",
      duration: "Part-time (ongoing)",
      location: "San Francisco, CA",
      payment: "$15 ",
      details: "Walks are 30 minutes each, between 11 AM and 2 PM. The owner prefers a walker who can commit to a consistent schedule and build a rapport with the dogs."
    },
    time: "Posted 2 days ago",
    category: "Pet Care",
    amount: 1,
    isOnline: false,
    icon: <FaDog />
  },
  {
    id: 7,
    title: "Handyman for Home Repairs",
    description: {
      description: "Skilled handyman needed for various home repair tasks. This includes both minor repairs and more complex projects that require a professional touch. The homeowner values quality work and reliability.",
      requirements: "Experience in general home repairs, own tools, licensed and insured. Must be able to provide references and have a track record of satisfied clients.",
      responsibilities: "Minor plumbing fixes, drywall repair, painting, furniture assembly. Additional tasks may include installing fixtures, repairing appliances, and performing preventive maintenance.",
      duration: "One-time (possibility for recurring work)",
      location: "Austin, TX",
      payment: "$50 ",
      details: "Estimate of 6-8 hours of work, flexible scheduling. The homeowner is looking for someone who can assess the situation accurately and provide cost-effective solutions."
    },
    time: "Posted 5 days ago",
    category: "Home Improvement",
    amount: 1,
    isOnline: false,
    icon: <FaTools />
  },
];


const JobList = () => {


  return (

    <>
    
<section className="md:flex md:px-[4rem]  px-[1rem] md:space-x-[4rem] pt-[6rem] md:pt-[8rem]">


    <div className="   ">
      <h1 className="text-3xl font-bold  mb-2">All Jobs</h1>
      <p className='md:w-[70%] mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum debitis libero 
        voluptatum consequuntur odio sunt quidem, numquam repudiandae rerum maiores.</p>
      <h2 className="text-2xl font-bold  mb-2">Recently posted</h2>
      <div className="grid grid-cols-1  gap-6">
        {opportunities.map((opp) => (
          <div key={opp.id} className="bg-white border rounded-lg md:h-[13rem]  pb-[1rem] s overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <section className="p-6">
              <div className="flex items-center mb-3 justify-between">
                {/* <span className="text-2xl text-blue-500 mr-3">{opp.icon}</span> */}
                <h2 className="text-xl font-semibold">{opp.title}</h2>
              <p className="text-[15px] text-[#5900D9] font-bold mb-2"> {opp.description.payment}</p>
              </div>

              <section className="desc flex space-x-4">
              <p className={`text-sm mb-2 ${opp.isOnline ? 'text-green-600' : 'text-red-600'}`}>
                {opp.isOnline ? 'Online' : 'In-person'}
              </p>
              <p className="text-sm text-gray-600"><span className="font-medium"></span> {opp.category}</p>
              <p className="text-sm text-gray-500 ">{opp.time}</p>
              </section>
              <p className="text-sm text-gray-600 mb-[2rem] md:mb-4"><span className="font-medium"></span> {opp.description.description.substring(0,200)}...</p>
             
            
              <Link to={`/job-details/${opp.id}`}
                className="bg-[#5900D9] text-white px-4 py-2 ] rounded hover:bg-blue-600 transition-colors duration-300"
             
              >
                View Details
              </Link>
            </section>
          </div>
        ))}
      </div>


    </div>
{/* aside======= */}

<JobAlert />

</section>
    </>
  );
};

export default JobList;