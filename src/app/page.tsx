"use client";

import { useAppSelector } from "@/redux/store";

import React from "react";
// import { HomeImage } from "./assets/images/homepageimage.png";

// import "../styles/global.css";

export default function Home() {
  const username = useAppSelector((state) => state.authReducer.value.userName);
  return (
    <div className="homepage">
      {/* <p className="homepage">pagesss - username:{username}</p> */}
      <div className="homepage_info">
        <div className="homepage_infoimage">ssssss</div>
        <div></div>
      </div>
      <div className="homepage_login"></div>
    </div>
  );
}
