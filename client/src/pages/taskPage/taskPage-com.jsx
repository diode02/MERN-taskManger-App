import React from "react";
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
      <NewTask />
      <div>
        <div className="p-grid">
          <span className="p-col p-lg-9 p-text-left p-text-uppercase p-text-bold">
            Tasks
          </span>
          <div className="p-col p-lg-1 p-text-left p-text-uppercase p-text-bold">
            Status
          </div>
          <div className="p-col p-lg-1"></div>
          <div className="p-col p-lg-1"></div>
        </div>
        <div>
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
    </div>
  );
};

export default TaskPage;
