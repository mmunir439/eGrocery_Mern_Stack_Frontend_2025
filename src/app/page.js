"use client";
import React,{useState,useEffect} from "react";
import Header from "../components/ui/Header";
import Carousel from "../components/ui/Carousel";
import Catagories from "../components/ui/Catagories";
export default function Home() {
  return (
    <div>
      <Header />
      <Carousel />
      <Catagories />
    </div>
  );
}
