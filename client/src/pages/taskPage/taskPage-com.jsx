import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import NewTask from "../../components/newTask/newTask-com";
import Task from "../../components/task/task-com";
import {
  deleteTaskStart,
  updateTaskStart,
} from "../../redux/tasks/tasks.actions";

const TaskPage = () => {
  const currentUserTasks = useSelector((state) => state.tasks.currentUserTasks);
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const handleDelete = (taskID) => {
    dispatch(deleteTaskStart({ taskID, token: currentUser.token }));
  };

  const handleEdit = (taskID) => {
    dispatch(deleteTaskStart({ taskID, token: currentUser.token }));
  };

  const handleUpdate = (description, completed, _id, token) => {
    dispatch(
      updateTaskStart({
        task: {
          description,
          completed,
          _id,
        },
        token,
      })
    );
  };

  return (
    <div>
      User Tasks
      <NewTask />
      <React.Fragment>
        <div
          className="div"
          style={{
            width: "100%",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "inline-flex",
            }}
          >
            <span
              style={{
                width: "70%",
                textAlign: "left",
              }}
            >
              Task
            </span>
            <span
              style={{
                width: "10%",
                textAlign: "left",
              }}
            >
              Status
            </span>
            <span
              style={{
                width: "10%",
                textAlign: "left",
              }}
            >
              Edit
            </span>
            <span
              style={{
                width: "10%",
                textAlign: "left",
              }}
            >
              Delete
            </span>
          </div>
          <div
            style={{
              width: "100%",
            }}
          >
            {currentUserTasks.map((task) => (
              <Task
                key={task._id}
                task={task}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                handleUpdate={handleUpdate}
                token={currentUser.token}
              />
            ))}
          </div>
        </div>
      </React.Fragment>
    </div>
  );
};

export default TaskPage;
