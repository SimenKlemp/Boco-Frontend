import axios from "axios";

export async function doLogin(email, password) {
  const loginRequest = {
    email: email,
    password: password,
  };

  return axios
    .post(`http://localhost:8085/api/user/login`, loginRequest)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
}
export async function doRegistration(registerUserRequest) {
  return axios
    .post(`http://localhost:8085/api/user/register`, registerUserRequest)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
}
export async function doRegisterItem(itemRequest, token) {
  return axios
    .post(`http://localhost:8085/api/item/register`, itemRequest, {
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
export async function doRentalRequest(registerRentalRequest, token) {
  return axios
    .post(`http://localhost:8085/api/rental/register`, registerRentalRequest, {
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
class UploadFilesService {
  upload(file, token) {
    let formData = new FormData();

    formData.append("image", file);

    return axios.post("http://localhost:8085/api/image/upload", formData, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "multipart/form-data",
      },
    });
  }

  getImage(imageId) {
    return axios.get("http://localhost:8085/api/image/" + imageId);
  }
}

export default new UploadFilesService();
export function getItems() {
  return axios.get("http://localhost:8085/api/item/all").then((response) => {
    return response.data;
  });
}

export function updateItem(item, itemId, token) {
  return axios
    .put("http://localhost:8085/api/item/update/" + itemId, item, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      return response.data;
    });
}

export function deleteItem(item) {
  return axios
    .delete("http://localhost:8085/api/item/delete/" + item.itemId)
    .then((response) => {
      return response.data;
    });
}

export function getMyItems(userId, token) {
  return axios
    .get("http://localhost:8085/api/item/get-my/" + userId, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      return response.data;
    });
}

export function getMyRentals(userId, token) {
  return axios
    .get("http://localhost:8085/api/rental/get-my/" + userId, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      return response.data;
    });
}

export function getRentalsForItem(itemId, token) {
  return axios
    .get("http://localhost:8085/api/rental/for-item/" + itemId, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      return response.data;
    });
}
