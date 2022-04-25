import axios from "axios";

export async function doLogin(email, password) {
  const loginRequest = {
    email: email,
    password: password,
  };

  return axios
    .post(`http://localhost:8080/api/user/login`, loginRequest)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
}
export async function doRegistration(registerUserRequest) {
  return axios
    .post(`http://localhost:8080/api/user/register`, registerUserRequest)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
}
export async function doRegisterItem(itemRequest, token) {
  return axios
    .post(`http://localhost:8080/api/item/register`, itemRequest, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function doRegisterFeedbackWebPage(feedbackRequest, token) {
  return axios
      .post(`http://localhost:8085/api/feedbackWebPage/registerFeedback`, feedbackRequest, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log(err);
      });
}
