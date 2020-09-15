import axios from "axios";
const url = "users/";

export async function createUserWithEmailAndPassword(userData) {
  const response = await axios({
    method: "post",
    url: `${url}`,
    data: userData,
  })
    .then((response) => {
      return response.data.data;
    })
    .catch((error) => {
      throw error.response.data;
    });
  return response;
}
