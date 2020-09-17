import axios from "axios";

export const getUpdatedArray = (old, newItem) => {
  old.push(newItem);
  return [...old];
};

export const getUpdatedArrayAfterDelete = (old, deleted) => {
  old.filter((task) => task._id !== deleted._id);
};

export async function deleteTaskAPI() {}

export async function getTasksAPI(token) {
  const data = await axios
    .get("/tasks/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(
      (response) => {
        return Object.values(response.data);
      },
      (error) => {
        return error;
      }
    );
  return data;
}

export async function postTaskAPI(payload) {
  var bodyParameters = {
    ...payload.task,
  };
  var config = {
    headers: { Authorization: payload.token },
  };
  return await axios
    .post(/tasks/, bodyParameters, config)
    .then((response) => {
      return response;
    })
    .catch((error) => {});
}
