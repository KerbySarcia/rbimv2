import React from "react";
import Sidebar from "../components/Sidebar";
import Time from "../components/Time";
import "../style/Dashboard.css";
const Dashboard = () => {
  return (
    <div className="Dashboard">
      <Sidebar />
      <div className="">
        <Time />
      </div>
    </div>
  );
};

export default Dashboard;
