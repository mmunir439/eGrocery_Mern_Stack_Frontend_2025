"use client";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import React from "react";
import { Button } from "./button";
export default function Carousel() {
  return (
    <div className="md:mt-8 flex justify-center mb-[32px] items-center flex-col">
      {/* Carousel Container */}
      <div className="bg-green-100 h-[500px] md:h-[400px] w-[80%] flex md:flex-row flex-col items-center justify-between px-8 py-4 rounded-lg shadow-lg">
        {/* Text Content */}
        <div className="max-w-md">
          <h1 className="text-4xl font-bold text-gray-800">
            <span>Freshness You Can Trust,</span>
            <br />
            <span>Savings You Will Love!</span>
          </h1>
          <div className="mt-8 ml-3 py-2 flex gap-4">
            <Button className=" text-white bg-green-600 ">
                <Link className="" href="/all-products">Shop Now</Link>
            </Button>
            <Button className={"text-white flex bg-green-600"}>
                <Link href="/all-products">Explore deals </Link><FaArrowRight />
            </Button>
          </div>
        </div>

        {/* Image */}
        <div className="w-[400px]  flex items-center justify-center">
          <img
            src="/images/logo1.jpg"
            alt="Fresh Vegetables"
            className="object-cover mb-10  md:w-full md:h-full w-[200px]"
          />
        </div>
      </div>
    </div>
  );
}