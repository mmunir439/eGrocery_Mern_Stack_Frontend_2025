"use client";
import React from "react";
import Link from "next/link";
import { CiStar } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
export default function Categories() {
  const categories = [
    {
      name: "Fruits",
      img: "/images/grapes.jpg",
      link: "/catagories/fruits",
      bgColor: "bg-purple-100",
    },
    {
      name: "Dairy Products",
      img: "/images/milk.jpg",
      link: "/catagories/dairy",
      bgColor: "bg-orange-100",
    },
    {
      name: "Vegetables",
      img: "/images/ladyfinger.jpg",
      link: "/catagories/vegetables",
      bgColor: "bg-green-100",
    },
    {
      name: "Drinks",
      img: "/images/colddrinks.webp",
      link: "/catagories/drinks",
      bgColor: "bg-blue-100",
    },
    {
      name: "Instant Food",
      img: "/images/kurkure.webp",
      link: "/catagories/instantfood",
      bgColor: "bg-teal-100",
    },
    {
      name: "Bakery",
      img: "/images/bakkery.jpg",
      link: "/catagories/bakery",
      bgColor: "bg-yellow-100",
    },
    {
      name: "Grains",
      img: "/images/mkai.jpg",
      link: "/catagories/grains",
      bgColor: "bg-pink-100",
    },
    {
      name: "Dry Foods",
      img: "/images/dryfoods.jpg",
      link: "/catagories/dryfoods",
      bgColor: "bg-pink-100",
    },
  ];
  const bestseller=[
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
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Categories Section */}
      <div className="mt-1">
        <h1 className="text-3xl  font-bold text-center mt-[10px] md:mb-10">
          <span>Categories</span>
        </h1>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={category.link}
              className={`p-4 rounded-lg shadow-lg ${category.bgColor} hover:scale-105 hover:shadow-xl transition-transform duration-300 flex flex-col items-center`}
            >
              <img
                src={category.img}
                alt={category.name}
                className="w-[150px] h-[100px] object-cover rounded-md"
              />
              <p className="text-gray-800 font-semibold mt-4">{category.name}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Best Sellers Section */}
      <div className="mt-8">
        <h1 className="text-3xl font-bold text-center mb-10">
          <span>Best Sellers</span>
        </h1>
        <div className="grid md:grid-cols-5 grid-cols-1">
        {bestseller.map((item,index)=>(
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
    </div>
  );
}