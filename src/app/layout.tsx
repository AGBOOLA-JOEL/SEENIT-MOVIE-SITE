"use client";
import { Inter } from "next/font/google";
import "../styles/global.css";
import "../styles/layout.css";
import App from "./App";
import Providers from "@/components/providers/Providers";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="app">
        <Providers>
          <Navbar />
          <App>{children}</App>
        </Providers>
      </body>
    </html>
  );
}
