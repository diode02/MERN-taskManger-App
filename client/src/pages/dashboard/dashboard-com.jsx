import React from "react";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";

import { Redirect } from "react-router";
import CustomButton from "../../components/custom-button/custom-button.com";
const Dashboard = () => {
  const currentUser = useSelector((state) => state.user.currentUser);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }
  return (
    <div className="Settings">
      <LinkContainer to="/dashboard/email">
        <CustomButton block bsSize="large">
          Change Email
        </CustomButton>
      </LinkContainer>
      <LinkContainer to="/dashboard/password">
        <CustomButton block bsSize="large">
          Change Password
        </CustomButton>
      </LinkContainer>
      <hr />
    </div>
  );
};

export default Dashboard;
