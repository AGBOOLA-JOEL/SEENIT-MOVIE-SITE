"use client";

import SideBar from "@/components/SideBar";
import { useAppSelector } from "@/redux/store";

const App = ({ children }: { children: React.ReactNode }) => {
  const isAuth = useAppSelector((state) => state.authReducer.value.isAuth);
  return (
    <div className="app_container">
      {isAuth && (
        <div className="app_sidebar">
          <SideBar />
        </div>
      )}
      <div className="app_main">
        <div className="app_children">{children}</div>
      </div>
    </div>
  );
};

export default App;
