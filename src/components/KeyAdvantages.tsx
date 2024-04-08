import React from "react";
import KeyAdvantagesCard from "./KeyAdvantagesCard";

export default function () {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-6 gap-3">
        <h3 className="font-bold text-4xl text-green-600">Key Advantages</h3>
        <div className="h-[2px] w-20 bg-blue-400"></div>

        <div className="grid lg:grid-cols-3 max-w-[1180px] gap-5 p-7">
          <KeyAdvantagesCard
            logo="https://aarogyapathcare.in/images/logo-3.png"
            title="ICMR Approved"
            description="Path Care embodies trust. It is approved by ICMR for RT-PCR testing and reporting.

"
          />
          <KeyAdvantagesCard
            logo="https://aarogyapathcare.in/images/fast-time.png"
            title="Fast Reporting"
            description="Path Care ensures quick, sharp and accurate reporting for Covid-19. Get reports in 6-12 hours.

            "
          />
          <KeyAdvantagesCard
            logo="https://aarogyapathcare.in/images/homecollection.png"
            title="NABL Approved"
            description="Path Care is approved by NABL for RT-PCR testing and reporting.

            "
          />
        </div>
      </div>
    </>
  );
}
