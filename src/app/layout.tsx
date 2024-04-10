"use client";
import { ReduxProvider } from "@/redux/provider";
import "../styles/global.css";
import App from "./App";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ReduxProvider>
        <App>{children}</App>
      </ReduxProvider>
    </html>
  );
}
