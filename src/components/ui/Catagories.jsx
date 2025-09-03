"use client";
import React from "react";
import Link from "next/link";

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
    </div>
  );
}