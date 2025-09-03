"use client";
import React, { useState } from "react";
import AllProducts from "@/components/ui/Products";
export default function Allproducts() {
  return(
    <div className="flex flex-wrap justify-center items-center min-h-screen">
      <AllProducts />
    </div>
  )
}