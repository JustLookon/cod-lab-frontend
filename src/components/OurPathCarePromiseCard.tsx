import React from "react";
import Image from "next/image";

export default function OurPathCarePromiseCard(props:any){
    return(
        <>
        <div className="flex flex-col items-center w-90% p-7 lg:w-64 shadow-md border gap-3 hover:-mt-2 duration-300 relative">
            <p className="p-2 border-gray-300 border-2 border-dotted absolute -top-10 group ">
                <Image width={50} height={50} alt='' className="bg-gray-50 shadow-md group-hover:shadow-lg " src={props.logo}></Image>
            </p>
            <h4 className="font-semibold text-2xl text-green-600 text-center mt-8 my-3">{props.title}</h4>
            <p className="text-center">{props.description}</p>
        </div>
        </>
    )
}