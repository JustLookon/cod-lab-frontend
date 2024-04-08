import React from "react";
import Card from "./PackagesCard";

export default function Packages() {
  return (
    <div className="mt-16">
      <div className="flex flex-col gap-3">
        <h2 className="text-center text-4xl  text-green-600 m-auto font-bold">
          Our Most Popular Packages
        </h2>
        <div className="w-20 mx-auto h-[2px] bg-blue-400 shadow-lg"></div>

        <div className="max-w-[1180px] grid justify-center mx-auto  lg:grid-cols-4 p-7 gap-7  ">
          <Card
            title="Basic Health Package"
            test=" Includes 68 Parameters
            Liver(11), Blood Pressure, Urine, Kidney, Blood Sugar"
            price="2000"
          />
          <Card
            title="Moderate Health Package"
            test="Includes 51 Parameters"
            description="
            Liver(11), Kidney, Blood Sugar"
            price="3000"
          />
          <Card
            title="Low Budget Health Package"
            test="Includes 43 Parameters"
            description="
            Liver(11), Blood Pressure, Urine"
            price="1000"
          />
          <Card
            title="Advance Tech Health Package"
            test="Includes 66 Parameters"
            description="
            Liver(11), Blood Pressure, Urine, Blood Sugar"
            price="5000"
          />
        </div>
      </div>
    </div>
  );
}
