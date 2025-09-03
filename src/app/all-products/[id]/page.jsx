"use client";
import React,{useState,useEffect, startTransition} from "react";
import { CiStar } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import Link from "next/link";
export default function ProductDetails() { 
    let ProductsDetails= {
      img:"/images/banner.png",
      name:"Fruits",
      desc:"Fresh Fruits and vegetables",
      rating:0,
      star:5,
      price:35,
      oldprice:40
    }
    return(
        <div className="flex items-center ">
            <div>
            </div>
            <div className="border p-3 m-3 w-[250px] flex flex-col items-center justify-center">
            <img src={ProductsDetails.img} className="w-[100px] h-[100px]" alt={ProductsDetails.name} />
            <h2>{ProductsDetails.name}</h2>
            <p>{ProductsDetails.desc}</p>
            <p className="flex">
              {Array.from({ length: ProductsDetails.star }, (_, i) => (
                <CiStar key={i} />
              ))} ({ProductsDetails.rating})
            </p>
            <p>${ProductsDetails.price} <del className="line-through text-gray-500">${ProductsDetails.oldprice}</del></p>
            <Button className="text-white bg-green-500 hover:bg-green-600 p-5 ml-2 text-xl">
                <Link href="/addtocart" className="flex items-center">
                    <MdOutlineShoppingCartCheckout className="text-xl font-bold" /> Add
                </Link>
            </Button>
        </div>

        </div>
    )
}
