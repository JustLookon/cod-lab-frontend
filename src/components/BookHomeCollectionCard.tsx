import React from "react";
import Image from "next/image";

export default function BookHomeCollectionCard(props: any) {
  return (
    <>
      <div className="flex flex-col  items-center rounded bg-white px-12 pb-16 gap-3 transform hover:-translate-y-2 duration-300 group">
        <div className="relative inline-block -top-8 p-3 border-2 border-dashed border-gray-100 duration-300 group">
          <Image
            width={50}
            height={50}
            className="bg-gray-50 shadow-md group-hover:shadow-lg"
            alt=""
            src={props.logo}
          ></Image>
        </div>
        <h4 className="font-semibold text-2xl text-green-600 duration-300">
          {props.title}
        </h4>
        <p className="">{props.description}</p>
      </div>
    </>
  );
}
