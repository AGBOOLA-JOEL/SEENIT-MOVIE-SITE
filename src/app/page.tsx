"use client";

import { useAppSelector } from "@/redux/store";
import Image from "next/image";

import React from "react";
// import { HomeImage } from "./assets/images/homepageimage.png";

// import "../styles/global.css";

import HeroSection from "@/components/homepage/HeroSection";
import TrendingShows from "@/components/homepage/TrendingShows";
import LatestReviews from "@/components/homepage/LatestReviews";
import PopularGenres from "@/components/homepage/PopularGenres";
import RecentlyWatched from "@/components/homepage/RecentlyWatched";
import Footer from "@/components/homepage/Footer";

export default function Home() {
  const username = useAppSelector((state) => state.authReducer.value.userName);
  return (
    <main>
      <HeroSection />
      <TrendingShows />
      <LatestReviews />
      <PopularGenres />
      <RecentlyWatched />
      <Footer />
    </main>
  );
}
