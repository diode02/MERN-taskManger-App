import React from "react";
import { useSelector } from "react-redux";

import NewTask from "../../components/newTask/newTask-com";

const TaskPage = () => {
  const currentUserTasks = useSelector((state) => state.tasks.currentUserTasks);

  const handleDelete = (taskID) => {};
  return (
    <div>
      User Tasks
      <NewTask />
      <React.Fragment>
        <table className="table">
          <thead>
            <tr>
              <th scope="">Task</th>
              <th scope="">Status</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {currentUserTasks.map((task) => (
              <tr key={task._id}>
                <td>{task.description}</td>
                <td>{task.completed ? "Completed" : "Not Completed"}</td>
                <td></td>
                <td>
                  <button
                    value={task._id}
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(task._id)}
                  >
                    Delete Task
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    </div>
  );
};

export default TaskPage;
