import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
const Dashboard = () => {
  const currentUser = useSelector((state) => state.user.currentUser);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }
  return <div>User DashBoard</div>;
};

export default Dashboard;
