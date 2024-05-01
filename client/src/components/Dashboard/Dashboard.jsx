import React from "react";
import "./Components/Sidebar Section/Sidebar.scss";
import "./Components/Body Section/Body.scss";
import "./Components/Body Section/Top Section/Top.scss";
import "../../App.css";
import Sidebar from "./Components/Sidebar Section/Sidebar";
import Body from "./Components/Body Section/Body";

const Dashboard = () => {
  return (
    <div className="dashboard flex">
      <div className="dashboardContainer flex">
        <Sidebar />
        <Body />
      </div>
    </div>
  );
};

export default Dashboard;
