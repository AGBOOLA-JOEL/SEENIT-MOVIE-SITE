"use client";

import Navbar from "@/components/Navbar";
import SideBar from "@/components/SideBar";
import { useAppSelector } from "@/redux/store";

const App = ({ children }: { children: React.ReactNode }) => {
  const isAuth = useAppSelector((state) => state.authReducer.value.isAuth);
  return (
    <html lang="en">
      <body className={"app"}>
        <div className="app_container">
          {isAuth && (
            <div className="app_sidebar">
              <SideBar />
            </div>
          )}
          <div className="app_main">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
};

export default App;
