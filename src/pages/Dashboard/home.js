import React from 'react';
import { withRouter } from 'react-router-dom';
import DashboardNavbar from '../../components/Navbar/dashboardNavbar';

const Dashboard = () => {
  return (
    <div
    
    >
      <DashboardNavbar />
      <center>
      <h1>Dashboard</h1>
      </center>
    </div>
  );
};

export default withRouter(Dashboard);
