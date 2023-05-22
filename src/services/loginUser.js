import axios from "axios";

const options = { method: "GET", url: "http://localhost:3000/api/user" };

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
