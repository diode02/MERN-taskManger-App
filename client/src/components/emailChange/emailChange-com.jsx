import React, { useState } from "react";

import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Panel } from "primereact/panel";

const EmailChange = () => {
  const [panelCollapsed, setPanelCollapsed] = useState(1);
  const [email, setEmail] = useState("xxxx@hotmail.com");
  return (
    <Panel
      expandIcon="pi pi-pencil"
      header={email}
      toggleable
      collapsed={panelCollapsed}
      onToggle={(e) => setPanelCollapsed(e.value)}
    >
      <div className="p-fluid">
        <div className="p-field p-grid">
          <label htmlFor="firstname4" className="p-col-12 p-md-2">
            Email
          </label>
          <div className="p-col-12 p-md-10">
            <InputText id="firstname4" value={email} type="text" />
          </div>
        </div>
        <div className="p-field p-grid">
          <label htmlFor="password4" className="p-col-12 p-md-2">
            Password
          </label>
          <div className="p-col-12 p-md-10">
            <InputText
              id="password4"
              placeholder="type your password"
              type="password"
            />
          </div>
        </div>
        <Button label="submit" />
      </div>
    </Panel>
  );
};

export default EmailChange;
