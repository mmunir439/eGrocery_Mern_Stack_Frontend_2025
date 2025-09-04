"use client";
import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { FaCanadianMapleLeaf, FaCoins } from "react-icons/fa";
import { GiOppositeHearts } from "react-icons/gi";

export default function Carousel() {
  return (
    <div className="md:mt-8 flex flex-col md:flex-row justify-between mx-auto bg-green-100 w-[90%] md:w-[80%] h-auto md:h-[390px] container mb-[32px] items-center rounded-lg shadow-lg">
      {/* Left Side: Image */}
      <div className="w-full md:w-[50%] rounded-t-full h-[200px] md:h-full bg-green-600 flex items-center justify-center">
        <img
          className="h-[90%] w-[90%] object-cover rounded-t-full"
          src="/images/carrot.jpg"
          alt="Fresh Produce"
        />
      </div>

      {/* Right Side: Features List */}
      <div className="w-full md:w-[50%] h-auto md:h-full flex flex-col justify-center px-4 md:px-8 mt-6 md:mt-0">
        <h1 className="text-green-500 text-xl md:text-2xl font-bold mb-6 text-center md:text-left">
          Why We Are the Best?
        </h1>
        <div className="flex items-center gap-4 mb-4">
          <span className="bg-green-500 text-white p-3 rounded-full">
            <TbTruckDelivery size={24} />
          </span>
          <div>
            <h2 className="text-lg font-bold">Fastest Delivery</h2>
            <p className="text-gray-600">Groceries delivered in under 30 minutes.</p>
          </div>
        </div>
        <div className="flex items-center gap-4 mb-4">
          <span className="bg-green-500 text-white p-3 rounded-full">
            <FaCanadianMapleLeaf size={24} />
          </span>
          <div>
            <h2 className="text-lg font-bold">Freshness Guaranteed</h2>
            <p className="text-gray-600">Fresh produce straight from the source.</p>
          </div>
        </div>
        <div className="flex items-center gap-4 mb-4">
          <span className="bg-green-500 text-white p-3 rounded-full">
            <FaCoins size={24} />
          </span>
          <div>
            <h2 className="text-lg font-bold">Affordable Prices</h2>
            <p className="text-gray-600">Quality groceries at unbeatable prices.</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="bg-green-500 text-white p-3 rounded-full">
            <GiOppositeHearts size={24} />
          </span>
          <div>
            <h2 className="text-lg font-bold">Trusted by Thousands</h2>
            <p className="text-gray-600">Loved by 10,000+ happy customers.</p>
          </div>
        </div>
      </div>
    </div>
  );
}