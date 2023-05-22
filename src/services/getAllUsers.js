import axios from "axios";
// const API_URL = process.env.REACT_APP_AXIOS_URL;
const API_URL = `http://localhost:5000`;

const options = { method: "GET", url: `${API_URL}/api/user/list` };

console.log(options,"here aero");

// export async function getAllUser() {
//   try {
//     const response = await axios.request(options);
//     // console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// }


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
    url: `http://localhost:5000/api/leads`,
    headers: { id },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}


export async function updateUser(formValues,id) {
  const options = {
    method: 'PUT',
    url: 'http://localhost:5000/api/leads',
    params: {id: id},
    data: formValues
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
