"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";
import { SiWhatsapp } from "react-icons/si";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
    <div className="flex justify-between items-center px-3 p-1 gap-9 bg-blue-300 fixed top-0  w-full z-10">
      <span className="flex-1 p-2">
        <Image
          width={50}
          height={50}
          alt=""
          src={
            "https://images.pexels.com/photos/19308356/pexels-photo-19308356/free-photo-of-laptop-on-sofa.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          className="rounded-full w-16 h-12 mx-3 "
        ></Image>
      </span>
      <ul className="flex gap-6 [&>*]:cursor-pointer [&>*]:px-2  [&>*]:p-1 [&>*]:rounded-sm [&>*:hover]:bg-green-600 [&>*]:transition-all [&>*:hover]:text-white">
        <li className={pathname === "/" ? "bg-green-600 text-white" : ""}>
          <Link href="/">Home</Link>
        </li>
        <li className={pathname === "/about" ? "bg-green-600 text-white" : ""}>
          <Link href="/about">About</Link>
        </li>
        <li
          className={
            pathname === "/ourPackages" ? "bg-green-600 text-white" : ""
          }
        >
          <Link href={"/ourPackages"}>Our Packages</Link>
        </li>
        <li
          className={pathname === "/gallery" ? "bg-green-600 text-white" : ""}
        >
          <Link href={"/gallery"}>Gallery</Link>
        </li>
        <li
          className={pathname === "/contact" ? "bg-green-600 text-white" : ""}
        >
          <Link href={"/contact"}>Contact Us</Link>
        </li>
      </ul>
      <div className="w-[1px] h-8 bg-gray-400 shadow-xl"></div>
      <div className="flex [&>*]:mx-2 [&>*]:transition-all">
        <Link
          href="https://api.whatsapp.com/send?phone=8929265998"
          className="hover:bg-green-600 text-green-600 p-1 transition-all rounded self-center text-2xl hover:text-white"
        >
          <SiWhatsapp />
        </Link>

        <Link
          href="https://www.facebook.com/your.username"
          className="hover:bg-green-600 text-blue-600 font-bold p-1 transition-all rounded self-center text-2xl hover:text-white"
        >
          <FaFacebookF />
        </Link>

        <Link
          href="https://twitter.com/?lang=en"
          className="hover:bg-green-600 text-blue-600 p-1 transition-all rounded self-center text-2xl hover:text-white"
        >
          <FaTwitter />
        </Link>

        <Link
          href="https://instagram.com/"
          className="hover:bg-green-600 text-pink-600 p-1 transition-all rounded self-center text-2xl hover:text-white"
        >
          <FaInstagram />
        </Link>

        <Link
          href="https://linkedin.com"
          className="hover:bg-green-600 text-blue-600 p-1 transition-all rounded self-center text-2xl hover:text-white"
        >
          <FaLinkedinIn />
        </Link>
      </div>
    </div>

    </>
  );
}
