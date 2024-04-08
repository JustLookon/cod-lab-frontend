import React from "react";
import Link from "next/link";
export default function Footer() {
  return (
    <>
      <div className="bg-green-600 text-white p-7">
        <div className=" p-7 py-10 grid md:grid-cols-4 grid-cols-2  gap-9">
          <div className="flex flex-col ">
            <h3 className="font-medium text-white footer ">About Us</h3>
            <div className="w-12 h-[2px] bg-white my-5"></div>
            <p className="text-white tracking-wide leading-normal">
              Aarogya Path Care is fully automated diagnostic laboratory with a
              better quality at affordable costs to laboratories and hospitals
              in India. <br />
              <br />
              Aarogya Path Care ISO 15189 : 2012 certified operates with – in
              major metro cities of India
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="font-medium text-white">Useful Links</h3>
            <div className="w-12 h-[2px] bg-white my-5 "></div>
            <ul className="[&>*:hover]:text-orange-400 [&>*]:w-fit [&>*]:my-3 [&>*]:cursor-pointer">
              <li className="font-medium">Home</li>
              <li className="font-medium">About</li>
              <li className="font-medium">Aarogya Packages</li>
              <li className="font-medium">Online Report</li>
              <li className="font-medium">Blog</li>
              <li className="font-medium">Gallery</li>
              <li className="font-medium">Contact Us</li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h3 className="font-medium text-white">Our Packages</h3>
            <div className="w-12 h-[2px] bg-white my-5"></div>
            <ul className="[&>*:hover]:text-orange-400 [&>*]:w-fit [&>*]:my-3 [&>*]:cursor-pointer">
              <li className="font-medium">Our Health Package</li>
              <li className="font-medium">Our Basic Package</li>
              <li className="font-medium">Our Full Body Packages</li>
              <li className="font-medium">Our Executive Package</li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h3 className="font-medium text-white">Contact Details</h3>
            <div className="w-12 h-[2px] bg-white my-5"></div>
            <ul className=" [&>*]:w-fit [&>*]:my-3 [&>*]:cursor-pointer">
              <li className="[&>*:hover]:text-orange-400 [&>*:hover]:transition-all font-medium">
                <Link href="">+91-9999857513</Link>
                <Link href=""> 9999857543</Link>
                <Link href=""> 011-46040805</Link>
              </li>
              <li className="font-medium [&>*:hover]:text-orange-400 [&>*:hover]:transition-all">
                <Link href={""}>info@aarogyapathcare.in</Link>
              </li>
              <li className="font-medium [&>*:hover]:text-orange-400 [&>*:hover]:transition-all">
                <Link href={""}>
                  {" "}
                  1/4 Single Storey, main Najafgargh road, Tilak Nagar, near
                  vishal mega mart, New Delhi-110018
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className=" copyright text-center">
          Copyright © 2024 . All Rights Reserved
        </p>
      </div>
    </>
  );
}
