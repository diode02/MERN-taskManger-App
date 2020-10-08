import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Panel } from "primereact/panel";

import { updateUserStart } from "../../redux/users/user.actions";

const UpdateGeneral = ({ field_title }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);

  const [panelCollapsed, setPanelCollapsed] = useState(true);
  const [data, setData] = useState({
    [field_title]: "",
    current_password: "",
  });
  const handleChange = (event) => {
    const { value, name } = event.target;

    setData({ ...data, [name]: value });
  };

  const handleClick = () => {
    dispatch(updateUserStart({ data, token: currentUser.token }));
    setData({ [field_title]: "", current_password: "" });
  };

  const { current_password } = data;
  const field_value = data[field_title];
  return (
    <Panel
      expandIcon="pi pi-pencil"
      header={`${field_title}: ${currentUser[field_title]}`}
      toggleable
      collapsed={panelCollapsed}
      onToggle={(e) => setPanelCollapsed(e.value)}
    >
      <div className="p-fluid">
        <div className="p-field p-grid">
          <label htmlFor="firstname4" className="p-col-12 p-md-2">
            {field_title}
          </label>
          <div className="p-col-12 p-md-10">
            <InputText
              placeholder={`Enter new ${field_title}`}
              id="firstname4"
              name={field_title}
              type={field_title}
              value={field_value}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="p-field p-grid">
          <label htmlFor="password4" className="p-col-12 p-md-2">
            password
          </label>
          <div className="p-col-12 p-md-10">
            <InputText
              id="current_password"
              placeholder="Enter password"
              type="password"
              name="current_password"
              value={current_password}
              onChange={handleChange}
            />
          </div>
        </div>
        <Button label="submit" onClick={handleClick} />
      </div>
    </Panel>
  );
};

export default UpdateGeneral;
