import React from "react";
import "./Activity.scss";
// icon
import { BsArrowRightShort } from "react-icons/bs";
//images
import zeus from "../../../Assets/zeus.png";
import canyon from "../../../Assets/canyon.png";
import faker from "../../../Assets/faker.png";
import doran from "../../../Assets/doran.png";
import viper from "../../../Assets/viper.png";
import splashrumble from "../../../Assets/splashrumble.jpg";
import splashleesin from "../../../Assets/splashleesin.jpg";
import splashkaisa from "../../../Assets/splashkaisa.jpeg";
import splashaurelionsol from "../../../Assets/splashaurelionsol.jpg";
import splashrenekton from "../../../Assets/splashrenekton.jpg";

const Activity = () => {
  return (
    <div className="activitySection">
      <div className="heading flex">
        <h1>Recent Activity</h1>
        <button className="btn flex">
          Se All <BsArrowRightShort className="icon" />
        </button>
      </div>

      <div className="secContainer grid">
        <div className="singleCostumer flex">
          <img src={zeus} alt="zeus" />
          <div className="customerDetails">
            <span className="name">Zeus (Top)</span>
            <small>Victory</small>
          </div>
          <div className="imgChamp">
            <img src={splashrumble} alt="Rumble" />
          </div>
          <div className="duration">2 min ago</div>
        </div>

        <div className="singleCostumer flex">
          <img src={canyon} alt="canyon" />
          <div className="customerDetails">
            <span className="name">Canyon (Jungle)</span>
            <small>Defeat</small>
          </div>
          <div className="imgChamp">
            <img src={splashleesin} alt="Rumble" />
          </div>
          <div className="duration">8 min ago</div>
        </div>

        <div className="singleCostumer flex">
          <img src={viper} alt="viper" />
          <div className="customerDetails">
            <span className="name">Viper (ADC)</span>
            <small>Victory</small>
          </div>
          <div className="imgChamp">
            <img src={splashkaisa} alt="Rumble" />
          </div>
          <div className="duration">15 min ago</div>
        </div>

        <div className="singleCostumer flex">
          <img src={doran} alt="doran" />
          <div className="customerDetails">
            <span className="name">Doran (Top)</span>
            <small>Victory</small>
          </div>
          <div className="imgChamp">
            <img src={splashrenekton} alt="Rumble" />
          </div>
          <div className="duration">2 days ago</div>
        </div>

        <div className="singleCostumer flex">
          <img src={faker} alt="faker" />
          <div className="customerDetails">
            <span className="name">Faker (Mid)</span>
            <small>Defeat</small>
          </div>
          <div className="imgChamp">
            <img src={splashaurelionsol} alt="Rumble" />
          </div>
          <div className="duration">4 days ago</div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
