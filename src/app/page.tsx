"use client";

import { useAppSelector } from "@/redux/store";
import Image from "next/image";

import React from "react";
// import { HomeImage } from "./assets/images/homepageimage.png";

// import "../styles/global.css";

export default function Home() {
  const username = useAppSelector((state) => state.authReducer.value.userName);
  return (
    <div className="homepage">
      {/* <p className="homepage">pagesss - username:{username}</p> */}
      <div className="homepage_info">
        <div className="homepage_infowrapper">
          <div className="homepage_infoimage">
            {/* <div className="homepage_infoimagemain"> */}
            <Image
              src="/assets/images/homepagejoin.png"
              alt="image"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "90%", borderRadius: 8 }}
            />
           

            <div className="homepage_infotext">
              <div>

              </div>
              <div>

              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="homepage_login"></div>
    </div>
  );
}
