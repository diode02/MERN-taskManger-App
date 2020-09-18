import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CustomButton from "../custom-button/custom-button.com";
import FormInput from "../form-input/form-input.com";
import { postTaskStart } from "./../../redux/tasks/tasks.actions";

const NewTask = () => {
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
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "inline-flex",
        }}
      >
        <FormInput
          label="description"
          type="description"
          name="description"
          required
          value={description}
          handleChange={handleChange}
        />
        <input
          id="completed"
          name="completed"
          checked={completed}
          onChange={handleComplted}
          type="checkbox"
        />
        <CustomButton type="submit" value="Add">
          Add
        </CustomButton>
      </form>
    </div>
  );
};

export default NewTask;
