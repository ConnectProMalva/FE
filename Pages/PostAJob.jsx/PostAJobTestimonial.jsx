
import React from 'react'
import { FaStar } from 'react-icons/fa'; 
import { PostJobTestimonials } from './WorkData';

const PostAJobTestimonial = ({description, name, occupation, rating}) => {
  return (
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
}

const TestimonialCard = ({description, name, occupation, rating}) => {
  return (
    <PostAJobTestimonial description={description} name={name} occupation={occupation} rating={rating} />
  );
};

const PostTestimonial = () => (
    <section className="py-10 bg-lightPurple mt-16 md:mt-[6rem]">
      <div className="container mx-auto md:px-4 px-1">
        <h2 className="text-3xl font-bold text-center mb-3">Trusted by 30+ clients worldwide</h2>
        <p className="text-center mb-8 ">Clients have used our platform and tools to hire the best, hear<br className="hidden md:block" /> from them to know what makes us different</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PostJobTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );

export default PostTestimonial;
