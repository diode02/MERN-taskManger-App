import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { Toast } from "primereact/toast";

import { postTaskStart } from "./../../redux/tasks/tasks.actions";
const NewTask = () => {
  let toast;
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const [task, settask] = useState({
    description: "",
    completed: false,
  });
  const { description, completed } = task;

  const handleChange = (event) => {
    const { name, value } = event.target;
    settask({ ...task, [name]: value });
  };

  const handleComplted = () => {
    settask({
      ...task,
      completed: !completed,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postTaskStart({ task, token: currentUser.token }));
    settask({
      description: "",
      completed: false,
    });
    toast.show({
      severity: "success",
      summary: "Success Message",
      detail: "New Task Added",
    });
  };

  const _handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <div className="p-fluid p-formgrid p-grid">
      <Toast ref={(el) => (toast = el)} position="bottom-right" />

      <div className="p-field p-col-12 p-lg-8 p-md-8 p-sm-12">
        <InputText
          id="in"
          type="text"
          value={description}
          onChange={handleChange}
          placeholder="New task..."
          name="description"
          required={true}
          onKeyDown={_handleKeyDown}
        />
      </div>
      <div className="p-field-checkbox p-field p-col-12 p-lg-2 p-md-2 p-sm-4">
        <Checkbox
          inputId="binary"
          checked={completed}
          onChange={handleComplted}
        />
        <label
          htmlFor="binary"
          style={{
            marginTop: "5px",
            textAlign: "center",
          }}
        >
          {completed ? "Completed" : "Not Completed"}
        </label>
      </div>
      <div className="p-field  p-col-12 p-lg-2 p-md-2 p-sm-4">
        <Button type="button" label="Submit" onClick={handleSubmit} />
      </div>
    </div>
  );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <input
          id="completed"
          name="completed"
          checked={completed}
          onChange={handleComplted}
          type="checkbox"
          style={{
            width: "20%",
            marginTop: "70px",
            transform: "scale(2)",
            padding: "10px",
          }}
        /> */}

        <span className="p-field-checkbox" style={{ marginLeft: "40px" }}>
          <Checkbox
            inputId="binary"
            checked={completed}
            onChange={handleComplted}
            style={{
              marginBottom: "7px",
              marginRight: "10px",
            }}
          />
          <label htmlFor="binary">
            {completed ? "completed" : "not completed"}
          </label>
        </span>

        <Button
          label="Add"
          type="submit"
          className="p-button-lg"
          style={{
            padding: "5px 30px",
          }}
        />
      </form>
    </div>
  );
};

export default NewTask;
