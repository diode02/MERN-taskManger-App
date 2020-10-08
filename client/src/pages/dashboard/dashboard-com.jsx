import React from "react";
import { useSelector } from "react-redux";

import "./test.css";
import { Redirect } from "react-router";
import { TabView, TabPanel } from "primereact/tabview";
import UpdateGeneral from "../../components/updateGeneral/updateGeneral";
import UpdateSecurity from "../../components/updateSecurity/updateSecurity";

const Dashboard = () => {
  const currentUser = useSelector((state) => state.user.currentUser);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }
  return (
    <TabView>
      <TabPanel header="General">
        <div
          style={{
            display: "flow-root",
          }}
        >
          <UpdateGeneral field_title="name" />
          <UpdateGeneral field_title="age" />
          <UpdateGeneral field_title="email" />
        </div>
      </TabPanel>
      <TabPanel header="Security">
        <UpdateSecurity />
      </TabPanel>
    </TabView>
  );
};

export default Dashboard;
