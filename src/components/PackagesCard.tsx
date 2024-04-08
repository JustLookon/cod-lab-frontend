import React, { use } from 'react'
import { useState } from 'react'
import { LuIndianRupee } from "react-icons/lu";

export default function Card(props: any) {

    // const [price, setPrice] = useState(Number);

    return (
        <>

            <div className="border-blue-500 border-x-[.5px] rounded border-x-gray-200 border-b-gray-300 hover:shadow-xl border-t-2 border-b-[.5px] p-7 flex flex-col [&>*]:mb-2 w-90%  transition-all">
                <h4 className={"font-semibold text-xl text-green-600 mt-1"}>{props.title}</h4>
                <div className=''>
                    <span className='font-semibold'>Test - </span>
                    <span className='font-medium'>{props.test}</span>
                </div>
                <div className={"break-words"}>{props.description}</div>

                <button className=' border-gray-700 border-[1px] px-3 py-1 text-xs rounded-full self-baseline text-green-600 hover:text-blue-600 transition-all'>Know More</button>
                <div className='w-66 h-[1px] bg-gray-200 my-2'></div>

                <div className="flex justify-between mt-3 ">
                    <div className="flex items-center">
                        <LuIndianRupee className='' /> {props.price}
                    </div>
                    <button className="p-1 px-3 bg-blue-500 text-white hover:bg-green-600 transition-all rounded">Book Now</button>
                </div>

            </div>
        </>
    )
}