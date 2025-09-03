"use client";
import React, { useState } from "react";
import { Button } from "./button";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { HiMenu, HiX } from "react-icons/hi"; // Hamburger and close icons
import { Input } from "@/components/ui/input";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="flex flex-wrap items-center justify-between md:justify-around border-b py-5 px-4">
      {/* Logo */}
      <div className="mr-9">
        <Link href="/">
          <Button className="hover:text-white text-green-500 hover:bg-green-500 bg-white text-2xl font-semibold">
            riseGrocery
          </Button>
        </Link>
      </div>

      {/* Hamburger Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-green-500 focus:outline-none"
        >
          {isMenuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`${isMenuOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row items-center gap-4 w-full md:w-auto mt-4 md:mt-0`}
      >
        <Link href="/login">
          <Button className="hover:text-white text-green-500 hover:bg-green-500 bg-white font-semibold">
            Seller Dashboard
          </Button>
        </Link>
        <Link href="/">
          <Button className="hover:text-white text-green-500 hover:bg-green-500 bg-white font-semibold">
            Home
          </Button>
        </Link>
        <Link href="/all-products">
          <Button className="hover:text-white text-green-500 hover:bg-green-500 bg-white font-semibold">
            All Products
          </Button>
        </Link>
      </div>

      {/* Search Bar */}
      <div className="relative w-full md:w-auto mt-4 md:mt-0">
        <input
          placeholder="Search products..."
          className="focus:outline-none rounded-full px-3 border border-green-400 p-1 rounded focus:ring-2 focus:ring-green-500 w-full md:w-64"
        />
        <CiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500" />
      </div>

      {/* Login and Cart */}
      <div
        className={`${isMenuOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-0`}
      >
        <Button className="hover:text-white text-green-500 hover:bg-green-500 bg-white font-semibold">
         <Link href="/login">Login</Link>
        </Button>
        <Link href="/cart">
          <Button className="hover:text-white text-green-500 hover:bg-green-500 bg-white font-semibold">
            <MdOutlineShoppingCartCheckout size={20} />
          </Button>
        </Link>
      </div>
      
    </div>);
}