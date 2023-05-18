import axios from "axios";
const API_URL = process.env.REACT_APP_AXIOS_URL;

const options = { method: "GET", url: `${API_URL}/api/user/list` };

console.log(options);

export async function getAllUser() {
  try {
    const response = await axios.request(options);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}


export async function addUser(name, email, password,) {
  const options = {
    method: "POST",
    url: `${API_URL}/api/user`,
    data: {
      name,
      email,
      password,
      role_id:'64490e1a786d2fde520dab8c',
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}


export async function deleteUser(id) {
  const options = {
    method: "DELETE",
    url: `${API_URL}/api/user?id=${id}`,
    headers: { id },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}


export async function updateUser(name, email, id) {
  const options = {
    method: "PUT",
    url: `${API_URL}/api/user`,
    params: { id },
    data: { name, email },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
