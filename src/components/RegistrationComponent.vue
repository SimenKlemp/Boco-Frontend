<template>
  <div id="RegContainer">
    <form @submit.prevent="submit">
      <h1>Registrer deg!</h1>

      <h2>Personalia</h2>

      <BaseInput
        id="name"
        class="mb-4"
        type="firstName"
        v-model="name"
        placeholder="Navn"
        :errorMessage="v$.$errors[1]"
      />
      <BaseErrorMessage v-if="v$.name.$error">{{
        v$.$errors[0].$message
      }}</BaseErrorMessage>
      <BaseInput
        id="email"
        class="mb-4"
        type="email"
        v-model="email"
        placeholder="Epost"
        :errorMessage="v$.$errors[2]"
      />
      <BaseErrorMessage v-if="v$.email.$error">{{
        v$.$errors[1].$message
      }}</BaseErrorMessage>
      <BaseInput
        id="password"
        class="mb-4"
        type="password"
        v-model="password"
        placeholder="Passord"
        :errorMessage="v$.$errors[3]"
      />
      <BaseErrorMessage v-if="v$.password.$error">{{
        v$.$errors[2].$message
      }}</BaseErrorMessage>

      <h2>Adresse</h2>

      <BaseInput
        id="address"
        class="mb-4"
        type="address"
        v-model="address"
        placeholder="Gateadresse"
      />
      <BaseErrorMessage v-if="v$.address.$error">{{
        v$.$errors[3].$message
      }}</BaseErrorMessage>
      <BaseInput
        id="postalcode"
        class="mb-4"
        type="postalcode"
        v-model="postalcode"
        placeholder="Postkode"
      />
      <BaseErrorMessage v-if="v$.postalcode.$error">{{
        v$.$errors[4].$message
      }}</BaseErrorMessage>
      <BaseInput
        id="city"
        class="mb-4"
        type="city"
        v-model="city"
        placeholder="Poststed"
      />
      <BaseErrorMessage v-if="v$.city.$error">{{
        v$.$errors[5].$message
      }}</BaseErrorMessage>

      <BaseButton v-on:click="submit" text="Registerer" />
    </form>
  </div>
</template>

<script>
import BaseInput from "@/components/baseTools/BaseInput";
import BaseButton from "@/components/baseTools/BaseButton";
import BaseErrorMessage from "@/components/baseTools/BaseErrorMessage";
import useVuelidate from "@vuelidate/core";
import { email, required, helpers } from "@vuelidate/validators";
import { doRegistration } from "@/service/apiService";

export default {
  name: "RegistrationComponent",
  components: {
    BaseInput,
    BaseErrorMessage,
    BaseButton,
  },
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      address: "",
      postalcode: "",
      city: "",
    };
  },
  validations() {
    return {
      name: {
        required: helpers.withMessage("Navn er påkrevd", required),
      },
      email: {
        required: helpers.withMessage("Email er påkrevd", required),
        email,
      },
      password: {
        required: helpers.withMessage("Passord er påkrevd", required),
      },
      address: {
        required: helpers.withMessage("Adresse er påkrevd", required),
      },
      postalcode: {
        required: helpers.withMessage("Postkode er påkrevd", required),
      },
      city: {
        required: helpers.withMessage("By er påkrevd", required),
      },
    };
  },
  methods: {
    async submit() {
      this.v$.$validate();
      console.log(this.v$);
      if (!this.v$.$error) {
        const reqisterUserRequest = {
          name: this.name,
          email: this.email,
          password: this.password,
          address: this.address,
          postalcode: this.postalcode,
          city: this.city,
        };
        let loginResponse = await doRegistration(reqisterUserRequest);

        if (loginResponse.status === "Success") {
          this.$store.dispatch("storeUser", loginResponse);

          switch (loginResponse.role) {
            case "Admin":
              this.$router.push({ name: "AdminView" });
              break;

            case "User":
              //TODO: push til min side!! -->
              this.$router.push({ name: "HomeView" });
              break;

            default:
              alert("Something went wrong with the authentication!");
          }
        }
      } else {
        alert("Alle felter må være fylt ut");
      }
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
