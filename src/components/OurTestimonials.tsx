import React from "react";
import OurCommitmentsCard from "./OurCommitmentsCard";
import OurTestimonialsCard from "./OurTestimonialsCard";

export default function OurTestimonials() {
  return (
    <>
      <div className="bg-green-600 p-7 my-12 mb-24">
        <div className="flex flex-col justify-center items-center">
          <h3 className="font-bold text-white text-4xl">Our Testimonials</h3>
          <div className="w-20  h-[2px] bg-blue-400 shadow-lg my-6"></div>
          <p className="text-white text-md">we wouldn't let you down</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-4 relative top-16 max-w-[1100px] m-auto">
          <OurTestimonialsCard
            title="Divya Panday"
            description="Excellent Laboratory with economical rates for tests. Accurate results and reporting on time."
          />
          <OurTestimonialsCard
            title="Priya Verma"
            description="Very quick response and coordination."
          />
          <OurTestimonialsCard
            title="Pummy Rajpoot"
            description="Well educated and polite staff and employees."
          />
        </div>
      </div>
    </>
  );
}
