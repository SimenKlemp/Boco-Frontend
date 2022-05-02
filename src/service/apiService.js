import axios from "axios";

    /*
    //Import these
    import SockJS from "sockjs-client";
    import Stomp from "webstomp-client";


    // Replace with store values
    const messageRequest = {
        "text" : text,
        "userId" : userId,
        "rentalId" : rentalId
    }

    let stompClient;

    function connect(rentalId) {
      const socket = new SockJS('http://localhost:8085/api/chat-connect');
      stompClient = Stomp.over(socket);

      stompClient.connect({}, (frame) => {
        stompClient.subscribe('/chat-outgoing/' + rentalId, (messageOutput) => {
          
          // Handle message responses here
          console.log(JSON.parse(messageOutput.body));

        });
      });
    }
    
    function send(messageRequest) {
      stompClient.send('/chat-incoming', JSON.stringify(messageRequest), {});
    }
    */


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
export async function doEditUser(editUserRequest, userId, token) {
  return axios
    .put(`http://localhost:8085/api/user/update/` + userId, editUserRequest, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      console.log(response);
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
      console.log(response);
      return response.data;
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
export function getItems(page, pageSize) {
  return axios
    .get("http://localhost:8085/api/item/all/" + page + "/" + pageSize)
    .then((response) => {
      return response.data;
    });
}

export async function doRegisterFeedbackWebPage(feedbackRequest, token) {
  return axios
    .post(
      "http://localhost:8085/api/feedbackWebPage/registerFeedback",
      feedbackRequest,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    )
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getFeedbacks(token) {
  return axios
    .get("http://localhost:8085/api/feedbackWebPage/getFeedbacks", {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      console.log(response.data);
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

export function deleteItem(itemId, token) {
  return axios
    .delete("http://localhost:8085/api/item/delete/" + itemId, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
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

export function acceptRental(rentalId, token) {
  return axios
    .put("http://localhost:8085/api/rental/accept/" + rentalId, null, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      return response.data;
    });
}

export function rejectRental(rentalId, token) {
  return axios
    .put("http://localhost:8085/api/rental/reject/" + rentalId, null, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      return response.data;
    });
}

export function cancelRental(rentalId, token) {
  return axios
    .put("http://localhost:8085/api/rental/cancel/" + rentalId, null, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      return response.data;
    });
}

export function getUsers(token) {
  return axios
    .get("http://localhost:8085/api/user/getUsers", {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
}

export function updateRoleUsers(token, userId) {
  return axios
    .put("http://localhost:8085/api/user/updateUserAdmin/" + userId, null, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
}

export function search(searchRequest) {
  return axios
    .put("http://localhost:8085/api/item/search", searchRequest)
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
}
