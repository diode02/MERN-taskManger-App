import React, { useState } from "react";
import { useSelector } from "react-redux";
const Task = ({
  task: { _id, description, completed },
  handleDelete,
  handleUpdate,
  token,
}) => {
  const [editTask, seteditTask] = useState({
    descriptionInner: description,
    completedInner: completed,
    edit: false,
  });

  const { edit, descriptionInner, completedInner } = editTask;

  const handleEditButton = () => {
    seteditTask({
      ...editTask,
      edit: !edit,
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    seteditTask({ ...editTask, [name]: value });
  };

  const handleCheckBox = () => {
    seteditTask({
      ...editTask,
      completedInner: !completedInner,
    });
  };

  return (
    <div
      key={_id}
      style={{
        width: "100%",
        display: "inline-flex",
      }}
    >
      {edit ? (
        <input
          style={{
            width: "70%",
          }}
          value={descriptionInner}
          name="descriptionInner"
          onChange={handleChange}
        />
      ) : (
        <span
          style={{
            width: "70%",
          }}
        >
          {descriptionInner}
        </span>
      )}
      {edit ? (
        <input
          style={{
            width: "13%",
          }}
          type="checkbox"
          checked={completedInner}
          onChange={handleCheckBox}
        />
      ) : (
        <span
          style={{
            width: "10%",
          }}
        >
          {completedInner ? "Completed" : "Not Completed"}
        </span>
      )}
      <span>
        <button
          style={{}}
          value={_id}
          className="btn btn-danger btn-sm"
          onClick={() => handleEditButton(_id)}
        >
          Edit Task
        </button>
      </span>
      <span>
        {edit ? (
          <button
            style={{}}
            value={_id}
            className="btn btn-danger btn-sm"
            onClick={() => {
              handleUpdate(descriptionInner, completedInner, _id, token);
              seteditTask({
                ...editTask,
                edit: !edit,
              });
            }}
          >
            Done
          </button>
        ) : (
          <button
            style={{}}
            value={_id}
            className="btn btn-danger btn-sm"
            onClick={() => handleDelete(_id)}
          >
            Delete Task
          </button>
        )}
      </span>
    </div>
  );
};

export default Task;
