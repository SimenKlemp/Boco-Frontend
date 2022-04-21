<template>
  <div id="RegContainer">
    <form @submit.prevent="login">
      <div id="registerTitle">
        <label>Registrer deg!</label>
      </div>

      <label class="h">Personalia</label>

      <BaseInput
        id="firstName"
        class="mb-4"
        type="firstName"
        v-model="firstName"
        placeholder="Fornavn"
      />
      <BaseInput
        id="lastName"
        class="mb-4"
        type="lastName"
        v-model="lastName"
        placeholder="Etternavn"
      />
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

      <label class="h">Adresse</label>

      <BaseInput
        id="address"
        class="mb-4"
        type="address"
        v-model="address"
        placeholder="Gateadresse"
      />
      <BaseInput
        id="postalcode"
        class="mb-4"
        type="postalcode"
        v-model="postalcode"
        placeholder="Postkode"
      />
      <BaseInput
        id="city"
        class="mb-4"
        type="city"
        v-model="city"
        placeholder="Poststed"
      />
      <button v-on:click="handleClickSignin_2">Registrer</button>

      <label id="loginstatusLabel">{{ loginStatus }}</label>
    </form>
  </div>
</template>

<script>
import BaseInput from "./BaseInput.vue";
import axios from "axios";

export default {
  name: "RegistrationComponent",
  components: {
    BaseInput,
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      address: "",
      postalcode: "",
      city: "",
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
.h {
  font-size: large;
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
