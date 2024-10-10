import React from 'react';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    description: "Amazing service and very friendly staff!",
    name: "John Doe",
    occupation: "Software Engineer",
    rating: 5
  },
  {
    description: "I love the convenience and the quality!",
    name: "Jane Smith",
    occupation: "Graphic Designer",
    rating: 4
  },
  {
    description: "Highly recommend for busy professionals.",
    name: "David Wilson",
    occupation: "Product Manager",
    rating: 5
  },
  {
    description: "A fantastic experience from start to finish.",
    name: "Sarah Johnson",
    occupation: "Marketing Specialist",
    rating: 5
  },
  {
    description: "Efficient and reliable service.",
    name: "Michael Brown",
    occupation: "Business Analyst",
    rating: 4
  },
  {
    description: "Great value for the quality of service provided.",
    name: "Emily Davis",
    occupation: "HR Manager",
    rating: 4
  },
  {
    description: "Professional and friendly team.",
    name: "Chris Green",
    occupation: "Consultant",
    rating: 5
  },
  {
    description: "Quick and easy to use.",
    name: "Jessica Taylor",
    occupation: "Content Writer",
    rating: 4
  },
  {
    description: "Exceptional service!",
    name: "Daniel White",
    occupation: "CEO",
    rating: 5
  }
];

const TestimonialCard = ({ description, name, occupation, rating }) => (
  <div className="bg-white shadow-md rounded-lg p-6 border m-2">
    <div className="flex items-center mb-2">
      {Array(rating).fill().map((_, i) => (
        <FaStar key={i} className="text-yellow-500" />
      ))}
    </div>
    <p className="text-gray-700 mb-2">{description}</p>
    <p className="font-bold text-lg">{name}</p>
    <p className="text-gray-600">{occupation}</p>
  </div>
);

const Testimonial = () => (
  <section className="py-10 bg-gra100 mt-16 md:mt-[6rem]">
    <div className="container mx-auto md:px-4 px-1">
      <h2 className="text-3xl font-bold text-center mb-8">Don’t take our word for it, hear what other artisans are saying</h2>
      <p className="text-center mb-8">Hear from others about their experience on Nigeria’s #1 outsourcing platform.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  </section>
);

export default Testimonial;
