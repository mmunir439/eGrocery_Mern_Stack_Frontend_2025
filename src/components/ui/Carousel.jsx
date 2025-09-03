// "use client";
// import React,{useState,useEffect} from "react";
// export default function Carousel() {
//   return (
//     <div className="mt-8 flex justify-center items-center flex-col">
//        <div className="bg-green-100 h-[400px] w-[80%] flex md:flex-row flex-col items-center mt-[20px]">
//         <img src="/images/banner.png" alt="Carousel Image" className="object-cover w-full h-full" />
//         <h1 className="text-2xl font-semibold">Welcome to eGrocery</h1>
//        </div>
//     </div>
//   );
// }

"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./button";
export default function Carousel() {
  return (
    <div className="mt-8 flex justify-center items-center flex-col">
      {/* Carousel Container */}
      <div className="bg-green-100 h-[400px] w-[80%] flex md:flex-row flex-col items-center justify-between px-8 py-4 rounded-lg shadow-lg">
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
            <Button className={"text-white bg-green-600"}>
                <Link className="" href="/deals">Explore deals</Link>
            </Button>
          </div>
        </div>

        {/* Image */}
        <div className="w-[400px] h-[300px] flex items-center justify-center">
          <img
            src="/images/banner.png"
            alt="Fresh Vegetables"
            className="md:object-cover md:w-full md:h-full w-[400px]"
          />
        </div>
      </div>
    </div>
  );
}