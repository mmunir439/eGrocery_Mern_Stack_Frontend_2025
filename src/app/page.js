"use client";
import React,{useState,useEffect} from "react";
import Header from "../components/ui/Header";
import Carousel from "../components/ui/Carousel";
import Carousel1 from "../components/ui/Carousel1";
import Catagories from "../components/ui/Catagories";
import Subscribe from "../components/ui/Subscribe ";
import Footer from "@/components/ui/Footer";
export default function Home() {
  return (
    <div>
      <Header />
      <Carousel />
      <Catagories />
      <Carousel1 />
      <Subscribe />
      <Footer />
    </div>
  );
}
