"use client";

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className="navbar">
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
        {isLoggedIn ? (
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
            <button>Login</button>
            <button>SignUp</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
