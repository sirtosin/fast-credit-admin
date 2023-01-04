import React from "react";
import Layout from "../../HOC/layout/layout";
import "./dashboard.css";
import Graph from "../../assets/graph.png";
import FirstSection from "../../components/firstSection/firstsection";
import DashboardHelp from "../../components/dashboardHelp/dashboardHelp";
import DashboardCategory from "../../components/dashboardCategory/dashboardCategory";

const Dashboard = () => {
  return (
    <Layout>
      <div className="dashboard-container">
        <FirstSection />
        <div className="second-section">
          <img src={Graph} alt="graph" />
        </div>
      </div>
      <div className="dashboard-container">
        <DashboardCategory />
        <DashboardHelp />
      </div>
    </Layout>
  );
};

export default Dashboard;
