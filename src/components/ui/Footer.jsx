"use client";
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-green-100 py-10">
      {/* Top Section */}
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 px-6 border-b pb-6">
        {/* Logo and Description */}
        <div className="max-w-sm flex flex-col">
          <Link className="font-bold text-2xl pb-4" href="/">
            riseGrocery
          </Link>
          <p className="text-gray-700 mt-4">
            We deliver fresh groceries and snacks straight to your door.
            Trusted by thousands, we aim to make your shopping experience
            simple and affordable.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col">
          <h1 className="font-bold mb-4">Quick Links</h1>
          <Link href="/" className="text-gray-700 hover:text-green-500">
            Home
          </Link>
          <Link href="/" className="text-gray-700 hover:text-green-500">
            Best Sellers
          </Link>
          <Link href="/" className="text-gray-700 hover:text-green-500">
            Offers & Deals
          </Link>
          <Link href="/" className="text-gray-700 hover:text-green-500">
            Contact Us
          </Link>
          <Link href="/" className="text-gray-700 hover:text-green-500">
            FAQs
          </Link>
        </div>

        {/* Need Help */}
        <div className="flex flex-col">
          <h1 className="font-bold mb-4">Need Help?</h1>
          <Link href="/" className="text-gray-700 hover:text-green-500">
            Delivery Information
          </Link>
          <Link href="/" className="text-gray-700 hover:text-green-500">
            Return & Refund Policy
          </Link>
          <Link href="/" className="text-gray-700 hover:text-green-500">
            Payment Methods
          </Link>
          <Link href="/" className="text-gray-700 hover:text-green-500">
            Track Your Order
          </Link>
          <Link href="/" className="text-gray-700 hover:text-green-500">
            Contact Us
          </Link>
        </div>

        {/* Follow Us */}
        <div className="flex flex-col">
          <h1 className="font-bold mb-4">Follow Us</h1>
          <Link href="/" className="text-gray-700 hover:text-green-500">
            Instagram
          </Link>
          <Link href="/" className="text-gray-700 hover:text-green-500">
            Twitter
          </Link>
          <Link href="/" className="text-gray-700 hover:text-green-500">
            Facebook
          </Link>
          <Link href="/" className="text-gray-700 hover:text-green-500">
            YouTube
          </Link>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center mt-6">
        <p className="text-gray-700">
          Copyright 2025 © eGrocery.dev All Rights Reserved.
        </p>
      </div>
    </div>
  );
}