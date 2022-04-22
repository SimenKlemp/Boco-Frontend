import axios from "axios";

export async function doLogin(email, password) {
  const loginRequest = {
    email: email,
    password: password,
  };

  return axios
    .post(`http://localhost:8080/api/login`, loginRequest)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
}
export async function doRegistration(registerUserRequest) {
  return axios
    .post(`http://localhost:8080/api/login`, registerUserRequest)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
}
