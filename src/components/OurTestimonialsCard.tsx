import React from "react";

export default function OurTestimonialsCard(props: any) {
  return (
    <>
      <div className="flex flex-col w-90% p-5 items-start justify-start bg-white rounded-lg shadow-md hover:shadow-lg hover:-mt-2 duration-300 group ">
        <h4 className="text-blue-500 font-semibold text-lg ">{props.title}</h4>
        <div className=" border-y-[1px] w-full border-gray-300 border-dashed p-[3px] my-5 group-hover:border-orange-600 duration-300 ease-in-out"></div>
        <p className="text-gray-400 text-md ">{props.description}</p>
      </div>
    </>
  );
}
