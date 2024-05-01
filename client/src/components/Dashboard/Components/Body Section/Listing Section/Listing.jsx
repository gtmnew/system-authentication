import React from "react";
import "./Listing.scss";
// icons
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
//images
import lol from "../../../Assets/lol.png";
import splashrumble from "../../../Assets/splashrumble.jpg";
import splashkennen from "../../../Assets/splashkennen.jpg";
import splashirelia from "../../../Assets/splashirelia.jpg";
import splashlucian from "../../../Assets/splashlucian.jpg";
import splashjinx from "../../../Assets/splashjinx.jpg";
import splashkaisa from "../../../Assets/splashkaisa.jpeg";
import splashjhin from "../../../Assets/splashjhin.jpg";
import splashleesin from "../../../Assets/splashleesin.jpg";
import knight from "../../../Assets/knight.png";
import faker from "../../../Assets/faker.png";
import chovy from "../../../Assets/chovy.png";
import canyon from "../../../Assets/canyon.png";

const Listing = () => {
  return (
    <div className="listingSection">
      <div className="heading flex">
        <h1>Favorites champions (Season 14)</h1>
        <button className="btn flex">
          Se All <BsArrowRightShort className="icon" />
        </button>
      </div>

      <div className="secContainer flex">
        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={splashrumble} alt="image name" />
          <h3>Rumble | 15W/2L</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={splashkennen} alt="image name" />
          <h3>Kennen | 10W/3L</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={splashirelia} alt="image name" />
          <h3>Irelia | 8W/7L</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={splashlucian} alt="image name" />
          <h3>Lucian | 4W/4L</h3>
        </div>
      </div>

      <div className="sellers flex">
        <div className="topSellers">
          <div className="heading flex">
            <h3>Best Win Rates</h3>
            <button className="btn flex">
              See All <BsArrowRightShort className="icon" />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={knight} alt="knight" />
              <img src={chovy} alt="chovy" />
              <img src={faker} alt="faker" />
              <img src={canyon} alt="canyon" />
            </div>

            <div className="cardText">
              <span>
                Most win rates <br />
                <small>
                  <span className="date">last week</span>
                </small>
              </span>
            </div>
          </div>
        </div>

        <div className="featuredSellers">
          <div className="heading flex">
            <h3>Most Played Champions</h3>
            <button className="btn flex">
              See All <BsArrowRightShort className="icon" />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={splashjinx} alt="Jinx" />
              <img src={splashkaisa} alt="Kaisa" />
              <img src={splashjhin} alt="Jhin" />
              <img src={splashleesin} alt="LeeSin" />
            </div>

            <div className="cardText">
              <span>
                Most played <br />
                <small>
                  <span className="date">last 2 weeks</span>
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
