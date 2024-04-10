"use client";

import { useAppSelector } from "@/redux/store";
import React from "react";

// import "../styles/global.css";

export default function Home() {
  const username = useAppSelector((state) => state.authReducer.value.userName);
  return (
    <div>
      <p className="pages">pagesss -  username:{username}</p>
    </div>
  );
}
