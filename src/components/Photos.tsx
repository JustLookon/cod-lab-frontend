import React from "react";
import Image from "next/image";

export default function Photos() {
  return (
    <>
      <div className="mt-36 grid lg:grid-cols-2 justify-center items-center [&>*]:my-6 [&>*]:border-4 [&>*]:border-green-500 [&>*]:shadow-md">
        <Image
          width={800}
          height={800}
          alt=""
          className=" object-cover  w-[90vw] lg:w-full lg:max-w-2xl m-auto "
          src={
            "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
        ></Image>
        <Image
          width={800}
          height={800}
          alt=""
          className=" object-cover w-[90vw] lg:w-full lg:max-w-2xl m-auto "
          src={
            "https://images.pexels.com/photos/4033151/pexels-photo-4033151.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
        ></Image>
        <Image
          width={800}
          height={800}
          alt=""
          className=" object-cover w-[90vw] lg:w-full lg:max-w-2xl m-auto"
          src={
            "https://images.pexels.com/photos/954585/pexels-photo-954585.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
        ></Image>

        <Image
          width={800}
          height={800}
          alt=""
          className=" object-cover w-[90vw] lg:w-full lg:max-w-2xl m-auto"
          src={
            "https://images.pexels.com/photos/3825412/pexels-photo-3825412.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
        ></Image>

        <Image
          width={800}
          height={800}
          alt=""
          className=" object-cover w-[90vw] lg:w-full lg:max-w-2xl m-auto"
          src={
            "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
        ></Image>
        <Image
          width={800}
          height={800}
          alt=""
          className=" object-cover w-[90vw] lg:w-full lg:max-w-2xl m-auto"
          src={
            "https://images.pexels.com/photos/954583/pexels-photo-954583.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
        ></Image>
      </div>
    </>
  );
}
