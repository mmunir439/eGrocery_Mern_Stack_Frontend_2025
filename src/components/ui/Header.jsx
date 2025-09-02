 "use client";
import React,{useState,useEffect} from "react";
import Link from "next/link";
import { Button } from "./button";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { Input } from "./input";
export default function Header() {
  return (
     <div className="flex justify-around border-b  items-center py-5">
        <div className="mr-9">
         <Link  href="/"><Button className={"hover:text-white text-green-500 hover:bg-green-500 bg-white text-2xl font-semibold"}>riseGrocery</Button></Link>
        </div>
        <div className="flex gap-4 items-center">
            <Link href="/seller-dashboard"><Button className={"hover:text-white text-green-500 hover:bg-green-500 bg-white font-semibold"}>seller dashboard</Button></Link>
            <Link href="/"><Button className={"hover:text-white text-green-500 hover:bg-green-500 bg-white font-semibold"}>Home</Button></Link>
            <Link href="/all-products"><Button className={"hover:text-white text-green-500 hover:bg-green-500 bg-white font-semibold"}>All Products</Button></Link>
            <span className="relative"><input className="focus:outline-none px-3 border border-green-400 p-1 rounded focus:ring-2 focus:ring-green-500" /><CiSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-500" /></span>
            <Link href="/login"><Button className={"hover:text-white text-green-500 hover:bg-green-500 bg-white font-semibold"}>Login</Button></Link>
            <Link href="/cart"><Button className={"hover:text-white text-green-500 hover:bg-green-500 bg-white font-semibold"}><MdOutlineShoppingCartCheckout size={20}/></Button></Link>
        </div>
     </div>
  );
}
