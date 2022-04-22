<template>
  <div class="loginContainer">
    <div class="titleInfo">
      <h1 id="loginTitle">Velkommen!</h1>
    </div>
    <div>
      <h5
        id="LoginError"
        v-if="this.$store.state.userInfo.loginStatus === 'Fail'"
      >
        Wrong password or username!
      </h5>
    </div>
    <div id="RegContainer">
      <form @submit.prevent="doLogin">
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

        <BaseButton v-on:click="doLogin" text="Sign in" />

        <div v-if="this.$store.state.userInfo.loginStatus === 'Fail'">
          <router-link to="/register"
            >If you do not have a user allready, click here to
            register</router-link
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import BaseInput from "@/components/baseTools/BaseInput";
import BaseButton from "@/components/baseTools/BaseButton";
import { doLogin } from "@/service/apiService";

export default {
  name: "LoginComponent",
  components: {
    BaseInput,
    BaseButton,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async doLogin() {
      let loginResponse = await doLogin(this.email, this.password);

      console.log(loginResponse);

      if (loginResponse.role !== "") {
        this.$store.dispatch("storeUser", loginResponse);

        switch (loginResponse.role) {
          case "User":
            //TODO: push til min side!! -->
            this.$router.push({ name: "HomeView" });
            break;

          default:
            alert("Something went wrong with the authentication!");
        }
      } else {
        this.$store.dispatch("storeUser", loginResponse);
      }
    },
  },
};
</script>

<style scoped>
.loginContainer {
  display: flex;
  flex-direction: column;
  row-gap: 2px;
  justify-content: center;
  margin: 50px auto;
  margin-top: 15%;
  width: 300px;
}

#registerTitle {
  font-size: x-large;
  font-weight: bold;
}
#loginTitle {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  font-weight: 100;
  font-size: 28px;
  color: black;
}
#LoginError {
  color: black;
  font-size: 15px;
  font-weight: 300;
  padding: 8px;
  margin: 0 auto;
  margin-bottom: 5px;
  border-radius: 5px;
  border: solid 1px red;
  background-color: rgba(255, 0, 0, 0.27);
}
form {
  padding: 0px 30px 0px 30px;
}
form > * {
  margin-bottom: 10px;
}

.mybtn {
  align-items: center;
  padding: 10px;
  width: 180px;
  color: white;
  background-color: black;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  border-radius: 6px;
  font-weight: 700;
}
.mybtn:hover {
  -webkit-transform: scale(1.02);
  transform: scale(1.02);
  box-shadow: 0 7px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.mybtn:active {
  -webkit-transform: scale(1);
  transform: scale(1);
  box-shadow: none;
}
.mybtn:focus {
  outline: 0;
}
.mybtn:disabled {
  -webkit-transform: scale(1);
  transform: scale(1);
  box-shadow: none;
}
</style>
