import React from "react";
import "./Top.scss";

// icons
import { BiSearchAlt } from "react-icons/bi";
import { TbMessageCircle } from "react-icons/tb";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";
import { BsQuestionCircle } from "react-icons/bs";
import icon from "../../../Assets/icon-lol.png";
import video from "../../../Assets/stillhere-video.mp4";
import rumble from "../../../Assets/rumble-stats.png";

const Top = () => {
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1>Welcome to LeagueStats</h1>
          <p>Hello gTm, welcome back!</p>
        </div>

        <div className="searchBar flex">
          <input type="text" placeholder="Enter RiotID, name#BR1" />
          <BiSearchAlt className="icon" />
        </div>

        <div className="adminDiv flex">
          <TbMessageCircle className="icon" />
          <MdOutlineNotificationsNone className="icon" />
          <div className="adminImage">
            <img src={icon} alt="Admin image" />
          </div>
        </div>
      </div>

      <div className="cardSection flex">
        <div className="rightCard flex">
          <h1>STILL HERE | SEASON 2024 ANIMATION</h1>
          <p>Fight for tomorrow</p>

          <div className="buttons flex">
            <button className="btn">Animation</button>
            <button className="btn transparent">More Infos</button>
          </div>

          <div className="videoDiv">
            <video src={video} autoPlay loop muted></video>
          </div>
        </div>

        <div className="leftCard flex">
          <div className="main flex">
            <div className="textDiv">
              <h1>My Stats</h1>

              <div className="flex">
                <span>
                  This season <br /> <small>37W / 16L</small>{" "}
                </span>
              </div>

              <div className="flex">
                <span>
                  Best Champion <br /> <small>Rumble</small>
                </span>
              </div>

              <span className="flex link">
                Go to my matches <BsArrowRightShort className="icon" />
              </span>
            </div>

            <div className="imgDiv">
              <img src={rumble} alt="Image name" />
            </div>
          </div>

          <div className="sideBarCard">
            <BsQuestionCircle className="icon" />
            <div className="cardContent">
              <div className="circle1"></div>
              <div className="circle2"></div>
              <h3>Help Center</h3>
              <p>
                Having trouble in Planti, please contact us from for more
                questions.
              </p>
              <button className="btn">Go to help center</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
