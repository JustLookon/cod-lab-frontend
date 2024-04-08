import React from "react";
import Image from "next/image";

export default function PathCareCard(props: any) {
    return (
        <>
            <div className="flex flex-col  p-7 gap-2 border-[6px] border-gray-200 bg-white hover:border-green-600 duration-300 hover:-translate-y-2 transform ">
                <Image width={100} height={100} alt='' src={props.logo} className="p-1 w-16"></Image>
                <h3 className="font-semibold text-lg">{props.testName}</h3>
                <p className="">{props.description}</p>
            </div>
        </>
    )
}