"use client";
import { IoSettingsOutline } from "react-icons/io5";
import { TbHome } from "react-icons/tb";
import { MdOutlineLiveTv } from "react-icons/md";
import { TiMessages } from "react-icons/ti";
import { FaRankingStar } from "react-icons/fa6";
import { IoBookmarksOutline } from "react-icons/io5";
import { TbFilterPlus } from "react-icons/tb";
import { IoIosLogOut } from "react-icons/io";
// import Mainlogo from "../logo/vector/Mainlogo";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_logo">
        SI
        {/* <Mainlogo /> */}
      </div>
      <div className="sidebar_nav">
        <div className="sidebar_navicon">
          <TbHome size={25} />
        </div>
        <div className="sidebar_navicon">
          <MdOutlineLiveTv size={25} />
        </div>
        <div className="sidebar_navicon">
          <TiMessages size={25} />
        </div>
        <div className="sidebar_navicon">
          <FaRankingStar size={25} />
        </div>
        <div className="sidebar_navicon">
          <IoBookmarksOutline size={25} />
        </div>
        <div className="sidebar_navicon">
          <TbFilterPlus />
        </div>
      </div>

      <div className="sidebar_setting">
        <div className="sidebar_settingicon">
          <IoSettingsOutline size={25} />
        </div>
        <div className="sidebar_settingicon">
          <IoIosLogOut />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
