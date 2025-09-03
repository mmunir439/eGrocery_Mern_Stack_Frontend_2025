"use client";
import React,{useState,useEffect, startTransition} from "react";
import { CiStar } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import Link from "next/link";
export default function AllProducts() {
  let allproductsarray=[
    {
      img:"/images/grapes.jpg",
      name:"Grapes",
      desc:"Fresh Fruits and vegetables",
      rating:0,
      star:5,
      price:35,
      oldprice:40
    },
    {
      img:"/images/onions.jpg",
      name:"Onions",
      desc:"Fresh Onions",
      rating:0,
      star:5,
      price:35,
      oldprice:40
    },
    {
      img:"/images/apple.jpg",
      name:"Apple",
      desc:"Fresh Apples",
      rating:0,
      star:5,
      price:35,
      oldprice:40
    },
    {
      img:"/images/potato.jpg",
      name:"potato",
      desc:"Fresh potato",
      rating:0,
      star:5,
      price:35,
      oldprice:40
    },
    {
      img:"/images/ladyfinger.jpg",
      name:"ladyfinger",
      desc:"Fresh ladyfinger",
      rating:0,
      star:5,
      price:35,
      oldprice:40
    },
    {
      img:"/images/grapes.jpg",
      name:"Grapes",
      desc:"Fresh Fruits and vegetables",
      rating:0,
      star:5,
      price:35,
      oldprice:40
    },
    {
      img:"/images/onions.jpg",
      name:"Onions",
      desc:"Fresh Onions",
      rating:0,
      star:5,
      price:35,
      oldprice:40
    },
    {
      img:"/images/apple.jpg",
      name:"Apple",
      desc:"Fresh Apples",
      rating:0,
      star:5,
      price:35,
      oldprice:40
    },
    {
      img:"/images/potato.jpg",
      name:"potato",
      desc:"Fresh potato",
      rating:0,
      star:5,
      price:35,
      oldprice:40
    },
    {
      img:"/images/ladyfinger.jpg",
      name:"ladyfinger",
      desc:"Fresh ladyfinger",
      rating:0,
      star:5,
      price:35,
      oldprice:40
    },
    {
      img:"/images/grapes.jpg",
      name:"Grapes",
      desc:"Fresh Fruits and vegetables",
      rating:0,
      star:5,
      price:35,
      oldprice:40
    },
    {
      img:"/images/onions.jpg",
      name:"Onions",
      desc:"Fresh Onions",
      rating:0,
      star:5,
      price:35,
      oldprice:40
    },
    {
      img:"/images/apple.jpg",
      name:"Apple",
      desc:"Fresh Apples",
      rating:0,
      star:5,
      price:35,
      oldprice:40
    },
    {
      img:"/images/potato.jpg",
      name:"potato",
      desc:"Fresh potato",
      rating:0,
      star:5,
      price:35,
      oldprice:40
    },
    {
      img:"/images/ladyfinger.jpg",
      name:"ladyfinger",
      desc:"Fresh ladyfinger",
      rating:0,
      star:5,
      price:35,
      oldprice:40
    },
    {
      img:"/images/grapes.jpg",
      name:"Grapes",
      desc:"Fresh Fruits and vegetables",
      rating:0,
      star:5,
      price:35,
      oldprice:40
    },
    {
      img:"/images/onions.jpg",
      name:"Onions",
      desc:"Fresh Onions",
      rating:0,
      star:5,
      price:35,
      oldprice:40
    },
    {
      img:"/images/apple.jpg",
      name:"Apple",
      desc:"Fresh Apples",
      rating:0,
      star:5,
      price:35,
      oldprice:40
    },
    {
      img:"/images/potato.jpg",
      name:"potato",
      desc:"Fresh potato",
      rating:0,
      star:5,
      price:35,
      oldprice:40
    },
    {
      img:"/images/ladyfinger.jpg",
      name:"ladyfinger",
      desc:"Fresh ladyfinger",
      rating:0,
      star:5,
      price:35,
      oldprice:40
    },
  ]
  return (
    <div>
      <div className="text-3xl font-bold m-3">
               <h1>All <span className="text-green-500 underline">Products</span></h1>
      </div>
       <div className="grid md:grid-cols-5 grid-cols-1">
        {allproductsarray.map((item,index)=>(
          <div key={index} className="border gap-3 justify-center w-[250px] h-[350px] flex flex-col items-center m-2 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <img className="w-[200px] h-[150px] rounded" src={item.img} alt={item.name} />
            <h2 className="text-lg font-bold">{item.name}</h2>
            <p>{item.desc}</p>
            <p className="flex">
              {Array.from({ length: item.star }, (_, i) => (
                <CiStar key={i} />
              ))} ({item.rating})
            </p>
            <div className="flex justify-between gap-3 items-center">
              <p>${item.price} <del className="line-through text-gray-500">${item.oldprice}</del></p>
              <Button className="text-white bg-green-500 hover:bg-green-600 p-5 ml-2 text-xl">
                <Link href="/addtocart" className="flex items-center">
                  <MdOutlineShoppingCartCheckout className="text-xl font-bold" /> Add
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
