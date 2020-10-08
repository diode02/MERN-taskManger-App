import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Panel } from "primereact/panel";

import { updateUserStart } from "../../redux/users/user.actions";

const UpdateSecurity = ({}) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);

  const [panelCollapsed, setPanelCollapsed] = useState(true);
  const [data, setData] = useState({
    current_password: "",
    password: "",
    confirm_password: "",
  });

  const { current_password, password, confirm_password } = data;

  const handleChange = (event) => {
    const { value, name } = event.target;

    setData({ ...data, [name]: value });
  };

  const handleClick = () => {
    if (password != confirm_password) {
      return alert("Passwords mismatch");
    }
    dispatch(
      updateUserStart({
        data: { current_password, password },
        token: currentUser.token,
      })
    );
    setData({ current_password: "", password: "", confirm_password: "" });
  };

  return (
    <Panel
      expandIcon="pi pi-pencil"
      header="Change Password"
      toggleable
      collapsed={panelCollapsed}
      onToggle={(e) => setPanelCollapsed(e.value)}
    >
      <div className="p-fluid">
        <div className="p-field p-grid">
          <label className="p-col-12 p-md-2">Current Password</label>
          <div className="p-col-12 p-md-10">
            <InputText
              id="current_password"
              type="password"
              name="current_password"
              value={current_password}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="p-field p-grid">
          <label className="p-col-12 p-md-2">New Password</label>
          <div className="p-col-12 p-md-10">
            <InputText
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="p-field p-grid">
          <label className="p-col-12 p-md-2">Confirm Password</label>
          <div className="p-col-12 p-md-10">
            <InputText
              id="confirm_password"
              type="password"
              name="confirm_password"
              value={confirm_password}
              onChange={handleChange}
            />
          </div>
        </div>
        <Button label="submit" onClick={handleClick} />
      </div>
    </Panel>
  );
};

export default UpdateSecurity;
