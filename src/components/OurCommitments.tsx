import React from "react";
import OurCommitmentsCard from "./OurCommitmentsCard";

export default function OurCommitments() {
  return (
    <>
      <div className="bg-green-600 p-7 my-12 mb-24">
        <div className="flex flex-col justify-center items-center">
          <h3 className="font-bold text-white text-4xl">Our Commitments</h3>
          <div className="w-20  h-[2px] bg-blue-400 shadow-lg my-6"></div>
          <p className="text-white text-md">we wouldn't let you down</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-4 relative top-16 max-w-[1100px] m-auto">
            <OurCommitmentsCard title="We wouldn't let you alone"
            description="7 Days Open"/>
            <OurCommitmentsCard title="We wouldn't get you late"
            description="On Time Sample Collection"/>
            <OurCommitmentsCard title="We wouldn't let you pain"
            description="Expert DMLT/BMLT certify phlebotomist"/>

        </div>
      </div>
    </>
  );
}
