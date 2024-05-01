import React from "react";
import "./Sidebar.scss";
import logostats from "../../Assets/logostats.png";
// icons
import { IoMdSpeedometer } from "react-icons/io";
import { SiRiotgames } from "react-icons/si";
import { MdOutlineExplore } from "react-icons/md";
import { BsTrophy } from "react-icons/bs";
import { GiStoneCrafting } from "react-icons/gi";
import { IoBuildOutline } from "react-icons/io5";
import { BiTrendingUp } from "react-icons/bi";
import { IoStatsChartOutline } from "react-icons/io5";
import { BsQuestionCircle } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="sideBar grid">
      <div className="logoDiv flex">
        <img src={logostats} alt="Image name" />
        <h2>LeagueStats</h2>
      </div>
      <div className="menuDiv">
        <h3 className="divTitle">QUICK MENU</h3>
        <ul className="menuLists grid">
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <IoMdSpeedometer className="icon" />
              <span className="smallText">Dashboard</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <SiRiotgames className="icon" />
              <span className="smallText">Matches</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <BsTrophy className="icon" />
              <span className="smallText">Ratings</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <MdOutlineExplore className="icon" />
              <span className="smallText">Explore</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="settingsDiv">
        <h3 className="divTitle">PRO SETTINGS</h3>
        <ul className="menuLists grid">
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <BiTrendingUp className="icon" />
              <span className="smallText">Champions Trends</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <IoBuildOutline className="icon" />
              <span className="smallText">Builds</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <GiStoneCrafting className="icon" />
              <span className="smallText">Runes</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <IoStatsChartOutline className="icon" />
              <span className="smallText">Statistics</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="sideBarCard">
        <BsQuestionCircle className="icon" />
        <div className="cardContent">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <h3>Help Center</h3>
          <p>
            Having trouble in LeagueStats, please contact us from for more
            questions.
          </p>
          <button className="btn">Go to help center</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
