import axios from "axios";
const url = "users/";

export async function createUserWithEmailAndPassword(userData) {
  const response = await axios({
    method: "post",
    url: `${url}`,
    data: userData,
  })
    .then((response) => {
      response.data.data["token"] = response.data.token;
      return response.data.data;
    })
    .catch((error) => {
      console.log(error.response.data);
      throw error.response.data;
    });
  return response;
}

export async function logOutAsync(token) {
  var config = {
    headers: { Authorization: token },
  };

  var bodyParameters = {
    key: "value",
  };

  const data = axios
    .post(url + "/logout", bodyParameters, config)
    .then((response) => {
      return true;
    })
    .catch((error) => {
      return false;
    });
  return data;
}

export async function signInWithEmailAndPassword(userData) {
  const data = await axios({
    method: "post",
    url: url + "login",
    data: userData,
  })
    .then((response) => {
      response.data.user["token"] = response.data.token;
      return response.data.user;
    })
    .catch((error) => {
      throw error.message;
    });
  return data;
}
