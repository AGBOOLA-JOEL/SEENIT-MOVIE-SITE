"use client";

import SideBar from "@/components/SideBar";
import "../styles/global.css";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { ReduxProvider } from "@/redux/provider";
import { useAppSelector } from "@/redux/store";

// import { usePathname } from "next/navigation";

// export const metadata: Metadata = {
//   title: "SEENIT",
//   description: "movie site",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const pathname = usePathname();
  // const rendernav = pathname === "/" ? false : true;
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  // const isAuth = useAppSelector((state) => state.authReducer.value.isAuth);
  return (
    <html lang="en">
      <ReduxProvider>
        <body className={"app"}>
          <div className="app_container">
            {isLoggedIn && (
              <div className="app_sidebar">
                {" "}
                <SideBar />
              </div>
            )}
            <div className="app_main">
              <Navbar />
              {children}
            </div>
          </div>
        </body>
      </ReduxProvider>
    </html>
  );
}
