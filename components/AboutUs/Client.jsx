import React from "react";
import AboutCard from "../ReUsable/AboutCard";
import Button from "../ReUsable/Button";

const Clients = () => {
  return (
    <>
      <section className="mt-[8rem]">
        <AboutCard
          imageOnRight={true}
          subtitle="For Clients"
          image="https://res.cloudinary.com/dytlpvw1o/image/upload/v1720100827/Rectangle_6_1_pbbmtv.png"
          title="Post your task.
Choose a tasker.
Get it done!"
          description="Describe what you need done and set your budget and timeline. 
          Browse through verified profiles and select the perfect fit. Sit back and relax
           while your tasker completes the job.."
          button={
            <Button className="md:w-[40%]  w-full h-[2.8rem]">Post a task</Button>
          }
        />
      </section>
    </>
  );
};

export default Clients;
