import React from "react";
import PathCareCard from "./PathCareCard";

export default function PathCare() {
  return (
    <>
      <div className="bg-gray-100 flex flex-col justify-center items-center p-7 gap-2">
        <h3 className="font-bold text-4xl text-green-600">Path Care</h3>
        <div className="h-[2px] w-20 bg-blue-400"></div>

        <div className="p-7 grid lg:grid-cols-3 gap-3 max-w-[1180px]">
          <PathCareCard
            logo="https://aarogyapathcare.in/images/automated.png"
            testName="Automated Test
"
            description="Pathcare the best and the most advanced laboratory testing facilities, Aarogya Pathcare deliver fully automated testing facilities to their customer which enables us to handle large volumes of tests with best quality and genuinity.

"
          />
          <PathCareCard
            logo="https://aarogyapathcare.in/images/technology.png"
            testName="Advance Technology
"
            description="We use advance technologies for testing sample which provide quick and accurate report to our customer.

"
          />
          <PathCareCard
            logo="https://aarogyapathcare.in/images/home.png"
            testName="Door Step Services
            "
            description="We serve our customer with Highly Trained Technician to your Door step for sample collection with their Identity.

            "
          />
        </div>
      </div>
    </>
  );
}
