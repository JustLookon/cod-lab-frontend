import React from "react";
import Image from "next/image"
import { CiUser } from "react-icons/ci";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaRegAddressCard } from "react-icons/fa6";

export default function BookAnAppointment() {
    return (
        <>
            <div className="flex lg:flex-row flex-col ">
                <Image className="w-full lg:w-1/2 object-cover " src={"https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} width={300} height={300} alt=''></Image>
                <div className="flex flex-col w-full lg:w-1/2 gap-2 p-20 bg-neutral-100">
                    <h3 className="text-4xl text-green-600 font-bold ">Book An Appointment</h3>
                    <div className="w-20  h-[2px] bg-blue-400 shadow-lg my-3"></div>
                    <p className="">If you have any question or query feel free to conact with us

                    </p>
                    <form className=" flex flex-col py-7  gap-3">
                        <div className="relative">
                            <input type="text " className="p-3 pl-4 border w-full  outline-none bg-neutral-100" placeholder="Name*" />
                            <i className="absolute right-4 text-2xl bottom-3 text-gray-500"><CiUser /></i>
                        </div>
                        <div className="relative">
                            <input type="tel" className="p-3 pl-4 border w-full  outline-none bg-neutral-100" placeholder="Phone*" />
                            <i className="absolute right-4 text-2xl bottom-3 text-gray-500"><IoIosPhonePortrait /></i>
                        </div>
                        <div className="relative ">
                            <textarea className="p-3 h-24  pl-4 border w-full  outline-none bg-neutral-100 text-wrap" name="" cols={3} rows={3} placeholder="Address*" >
                            </textarea>
                            <i className="absolute right-4 text-2xl bottom-16 text-gray-500"><FaRegAddressCard /></i>
                        </div>
                        <div className="">
                            <button className="px-7 py-2 bg-blue-500 text-white rounded hover:bg-green-600 transition-all my-1 ">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}