<template>
  <div id="RegContainer">
    <form @submit.prevent="login">
      <div id="registerTitle">
        <label>Logg inn:</label>
      </div>

      <BaseInput
        id="email"
        class="mb-4"
        type="email"
        v-model="email"
        placeholder="Epost"
      />
      <BaseInput
        id="password"
        class="mb-4"
        type="password"
        v-model="password"
        placeholder="Passord"
      />

      <button v-on:click="handleClickSignin_2">Logg inn</button>

      <label id="loginstatusLabel">{{ loginStatus }}</label>
    </form>
  </div>
</template>

<script>
import BaseInput from "./BaseInput.vue";
import axios from "axios";

export default {
  name: "LoginComponent",
  components: {
    BaseInput,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async handleClickSignin() {
      //alert("You entered, username: " + this.username);
      const loginRequest = { email: this.email, password: this.password };
      const loginResponse = await axios.post(
        "http://localhost:8080/#/registration",
        loginRequest
      );
      console.log(loginResponse);
      alert("Login: " + loginResponse.data.loginStatus);
    },
    handleClickSignin_2() {
      const loginRequest = { email: this.email, password: this.password };
      const loginResponse = axios.post(
        "http://localhost:8080/#/registration",
        loginRequest
      );
      console.log(loginResponse);
      loginResponse.then((resolvedResult) => {
        this.loginStatus = resolvedResult.data.loginStatus;
        // alert("Login2: " + resolvedResult.data.loginStatus);
      });
    },
  },
};
</script>

<style scoped>
#registerTitle {
  font-size: x-large;
  font-weight: bold;
}
form {
  padding: 0px 30px 0px 30px;
}
form > * {
  margin-bottom: 10px;
}
button {
  width: 100%;
  font-size: medium;
  padding: 10px;
  border-radius: 7px;
  margin-top: 10px;
}
</style>
