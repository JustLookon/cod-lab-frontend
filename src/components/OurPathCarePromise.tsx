import React from "react";
import OurPathCarePromiseCard from "./OurPathCarePromiseCard";

export default function OurPathCarePromise() {
  return (
    <>
      <div className="p-11 flex flex-col justify-center gap-3 items-center ">
        <h3 className="font-bold text-4xl text-green-600 text-center">
          Our Path Care Promise
        </h3>
        <div className="h-[2px] w-20 bg-blue-400"></div>
        <div className="grid lg:grid-cols-4 max-w-[1180px] justify-center gap-16 lg:gap-7 p-9 ">
          <OurPathCarePromiseCard
            logo="https://aarogyapathcare.in/images/bg-image/icons8-quality-80.png"
            title="International Quality Compliance
                    "
            description="Our labs follow more than 150 international quality standard operating procedures for sampling

                    "
          />
          <OurPathCarePromiseCard
            logo="https://aarogyapathcare.in/images/bg-image/icons8-medical-64.png"
            title="Latest Technology & Equipments
                    "
            description="We are at par with the medical tech-driven advances. Innovation in laboratory technology.

                    "
          />
          <OurPathCarePromiseCard
            logo="https://aarogyapathcare.in/images/bg-image/icons8-automatic-50.png"
            title="Fully Automated"
            description="All of our labs are fully automated labs equipped with internationally renowned machines.

                    "
          />
          <OurPathCarePromiseCard
            logo="https://aarogyapathcare.in/images/bg-image/icons8-controls-64.png"
            title="100% Calibration & Controls
"
            description="We have deep analytical control on all our labs and insist them to follow NABL guidelines.

"
          />
        </div>
      </div>
    </>
  );
}
