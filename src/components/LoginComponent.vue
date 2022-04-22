<template>
  <div id="RegContainer">
    <form @submit.prevent="login">
      <h1>Logg inn:</h1>

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

      <BaseButton
          id="login"
          text="Logg inn"
      />

      <label id="loginstatusLabel">{{ loginStatus }}</label>
    </form>
  </div>
</template>

<script>
import BaseInput from "./baseTools/BaseInput.vue";
import axios from "axios";
import BaseButton from "@/components/baseTools/BaseButton";

export default {
  name: "LoginComponent",
  components: {
    BaseButton,
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
form {
  padding: 0px 30px 0px 30px;
}
form > * {
  margin-bottom: 10px;
}
</style>
