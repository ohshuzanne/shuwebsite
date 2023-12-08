import React from "react";
import HeroSection from "@/components/HeroSection";
//first page next.js goes into is index, so it is why it's so important

export default function Home(){ //default home
  return (
    <div className="flex min-h-screen flex-col">
        <HeroSection />
    </div>
  );
}