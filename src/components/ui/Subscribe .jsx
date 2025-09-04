"use client";
import React from "react";
import { Button } from "@/components/ui/button";
export default function Subscribe() {
  return (
    <div className="grid justify-center items-center gap-4 text-center p-10 rounded-lg">
       <h1 className="text-2xl font-bold">Never Miss a Deal!</h1>
       <p className="text-gray-600 text-xl">Subscribe to get the latest offers, new arrivals, and exclusive discounts</p>
       <div className="flex md:w-[600px] w-[150px]">
         <input type="text" placeholder="enter your email" className="border p-2 rounded-l-lg md:w-[600px] w-[170px]" />
         <Button className="rounded-l-none h-[50px] md:w-[130px] w-[70px]">Subscribe</Button>
       </div>
    </div>
  );
}