"use client";
import React, { useState } from "react";
import {Button} from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
export default function Registerpage() {
    return (
        <div className={`flex flex-col  items-center justify-center min-h-screen`}>
            <form className="flex flex-col px-[40px] py-[40px] gap-2 bg-white p-6  shadow-md">
                <h1 className="text-3xl flex justify-center p-3 gap-3">
                    <span className="text-green-500">User</span>
                    <span className="border-b-2 border-green-600 inline-block">Register</span>
                </h1>
                <label>Name</label>
                <input className={"w-[300px] focus:outline-none rounded px-3 border border-green-400 p-1 rounded focus:ring-2 focus:ring-green-500 w-full md:w-64"} placeholder="type here" />
                <label>Email</label>
                <input className={"w-[300px] focus:outline-none rounded px-3 border border-green-400 p-1 rounded focus:ring-2 focus:ring-green-500 w-full md:w-64"} placeholder="type here" />
                <label>Password</label>
                <input className={"w-[300px] focus:outline-none rounded px-3 border border-green-400 p-1 rounded focus:ring-2 focus:ring-green-500 w-full md:w-64"} placeholder="type here" type="password" />
                <p>If you have  already account? <Link className="text-green-500 hover:underline inline" href="/login">login</Link></p>
                <Button className={"bg-green-500 py-1 rounded text-white hover:bg-green-600"}><Link href="/register">Create Account</Link></Button>
            </form>
        </div>
    )
}