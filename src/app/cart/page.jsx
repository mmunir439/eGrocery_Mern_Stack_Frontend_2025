"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function CartPage() {
  const [cartItems, setCartItems] = useState(0);
  const [price, setCartItemsPrice] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("Cash On Delivery");

  return (
    <>
      <Header />
      <div className="grid container mx-auto mt-[48px] md:grid-cols-3 grid-cols-1 gap-6 p-4">
        {/* Left Section: Shopping Cart */}
        <div className=" p-6 rounded-lg">
          <h1 className="text-2xl font-bold mb-4">
            Shopping Cart <span className="text-green-500">{cartItems} Items</span>
          </h1>
          <p className="text-gray-600 mb-4">Product Details</p>
          <Link href="/" className="text-green-500 flex items-center gap-2">
            <FaArrowLeft /> Continue Shopping
          </Link>
        </div>

        {/* Middle Section: Subtotal */}
        <div className=" p-6 rounded-lg ">
          <h1 className="text-gray-600 flex justify-between text-2xl  mb-4">Subtotal <p>Action</p></h1>
          <p className="text-gray-600">No items in the cart.</p>
        </div>

        {/* Right Section: Order Summary */}
        <div className="bg-gray-100 border p-6 rounded-lg">
          <h1 className="text-2xl font-bold mb-6">Order Summary</h1>
          <div className="border-b pb-4 mb-4">
            <p className="text-lg font-bold mb-2">Delivery Address</p>
            <p className="text-gray-600 mb-4">
              No address found{" "}
              <Button className="bg-green-500 text-white hover:bg-green-600 ml-4">
                Add Address
              </Button>
            </p>
          </div>
          <div className="border-b pb-4 mb-4">
            <p className="text-lg font-bold mb-2">Payment Method</p>
            <div className="flex flex-col gap-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="payment"
                  value="Online Payment"
                  className="mr-2"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                Online Payment
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="payment"
                  value="Cash On Delivery"
                  className="mr-2"
                  defaultChecked
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                Cash On Delivery
              </label>
            </div>
          </div>
          <div className="border-b pb-4 mb-4">
            <div className="flex justify-between">
              <p>Price:</p>
              <p>${price}</p>
            </div>
            <div className="flex justify-between">
              <p>Shipping Fee:</p>
              <p className="text-green-500">Free</p>
            </div>
            <div className="flex justify-between">
              <p>Tax (2%):</p>
              <p>${(price * 0.02).toFixed(2)}</p>
            </div>
            <div className="flex justify-between font-bold">
              <p>Total Amount:</p>
              <p>${(price + price * 0.02).toFixed(2)}</p>
            </div>
          </div>
          <Link href="/checkout">
            <Button className="bg-green-500 text-white hover:bg-green-600 w-full">
              Place Order
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}