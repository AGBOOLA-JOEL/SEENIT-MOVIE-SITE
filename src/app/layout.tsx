"use client";

import SideBar from "@/components/SideBar";
import "../styles/global.css";
import Navbar from "@/components/Navbar";

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
  return (
    <html lang="en">
      <body className={"app"}>
        <div className="app_container">
          <div className="app_sidebar">
            <SideBar />
          </div>
          <div className="app_main">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
