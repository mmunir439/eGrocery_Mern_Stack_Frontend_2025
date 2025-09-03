"use client";
import React,{useState,useEffect} from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Loginpage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <form className="flex flex-col px-[40px] py-[40px] gap-2 bg-white p-6 rounded shadow-md">
           <h1 className="text-3xl flex justify-center p-3 gap-3">
  <span className="text-green-500">User</span>
  <span className="border-b-2 border-green-200 inline-block">Login</span>
</h1>
            <label>Email</label>
            <input className={"w-[300px] focus:outline-none rounded px-3 border border-green-400 p-1 rounded focus:ring-2 focus:ring-green-500 w-full md:w-64"} placeholder="Email" />
            <label>Password</label>
            <input className={"w-[300px] focus:outline-none rounded px-3 border border-green-400 p-1 rounded focus:ring-2 focus:ring-green-500 w-full md:w-64"} placeholder="Password" type="password" />
            <p>create new account? <Link className="text-green-500 hover:underline inline" href="/register">click here</Link></p>
            <Button className={"bg-green-500 text-white hover:bg-green-600"}><Link href="/login">Login</Link></Button>
            <Link className="text-green-500 flex justify-end hover:text-black hover:underline" href={"forgot-password"}>Forgot Password</Link>
        </form>
    </div>
  );
}