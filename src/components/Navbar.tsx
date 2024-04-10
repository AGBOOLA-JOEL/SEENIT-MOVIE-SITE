"use client";

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import { login, logout } from "@/redux/features/auth-slice";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
const Navbar = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  // const [username, setUsername] = useState<string>("");

  const dispatch = useDispatch<AppDispatch>();
  const handleLogin = () => {
    dispatch(login("custom username"));
  };
  const handleLogout = () => {
    dispatch(logout());
  };

  const isAuth = useAppSelector((state) => state.authReducer.value.isAuth);
  return (
    <div className="navbar">
      {!isAuth && <div className="navbar_logo">SI</div>}

      <div className="navbar_search">
        <div className="navbar_searchicon">
          <FaSearch />
        </div>
        <div className="navbar_searchinput">
          <input type="text" />
        </div>
      </div>
      <div className="navbar_link">
        <div className="navbar_linkname">Movies</div>
        <div className="navbar_linkname">Tv Series</div>
        <div className="navbar_linkname">Animation</div>
        <div className="navbar_linkname">Film Critics ranking</div>
        <div className="navbar_linkname">Discover</div>
      </div>
      <div className="navbar_auth">
        {isAuth ? (
          <div className="navbar_authinfo">
            <div className="navbar_notif">
              <span>6</span>
              <IoMdNotificationsOutline size={28} />
            </div>
            <div className="navbar_user">
              <div className="navbar_avi">avi</div>
              <div className="navbar_username">
                <p>Agboola Joel</p>
                <p>@Username</p>
              </div>
              <div>
                <FaChevronDown fill="white" size={15} />
              </div>
            </div>
          </div>
        ) : (
          <div className="navbar_authlink">
            <button onClick={handleLogin}>Login</button>
            {/* <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            /> */}
            <button onClick={handleLogout}>SignUp</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
