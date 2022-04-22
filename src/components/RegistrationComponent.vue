<template>
  <div id="RegContainer">
    <form @submit.prevent="submit">
      <h1>Registrer deg!</h1>

      <h2>Personalia</h2>

      <BaseInput
        id="firstName"
        class="mb-4"
        type="firstName"
        v-model="firstName"
        placeholder="Fornavn"
        :errorMessage="v$.$errors[1]"
      />
      <BaseErrorMessage v-if="v$.firstName.$error">{{
        v$.$errors[0].$message
      }}</BaseErrorMessage>
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
        :errorMessage="v$.$errors[2]"
      />
      <BaseErrorMessage v-if="v$.email.$error">{{
        v$.$errors[0].$message
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
        v$.$errors[0].$message
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
        v$.$errors[0].$message
      }}</BaseErrorMessage>
      <BaseInput
        id="postalcode"
        class="mb-4"
        type="postalcode"
        v-model="postalcode"
        placeholder="Postkode"
      />
      <BaseErrorMessage v-if="v$.postalcode.$error">{{
        v$.$errors[0].$message
      }}</BaseErrorMessage>
      <BaseInput
        id="city"
        class="mb-4"
        type="city"
        v-model="city"
        placeholder="Poststed"
      />
      <BaseErrorMessage v-if="v$.city.$error">{{
        v$.$errors[0].$message
      }}</BaseErrorMessage>

      <BaseButton id="registration" text="Registrer" />

      <label id="loginstatusLabel">{{ loginStatus }}</label>
    </form>
  </div>
</template>

<script>
import BaseInput from "./baseTools/BaseInput.vue";
import BaseErrorMessage from "@/components/baseTools/BaseErrorMessage";
import BaseButton from "@/components/baseTools/BaseButton";
import useVuelidate from "@vuelidate/core";
import { email, required } from "@vuelidate/validators";

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
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      address: "",
      postalcode: "",
      city: "",
    };
  },
  validations() {
    return {
      firstName: { required },
      lastName: { required },
      email: { required, email },
      password: { required },
      address: { required },
      postalcode: { required },
      city: { required },
    };
  },
  methods: {
    async submit() {
      this.v$.$validate();
      console.log(this.v$);
      if (!this.v$.$error) {
        const reqisterUserRequest = {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          password: this.password,
          address: this.address,
          postalcode: this.postalcode,
          city: this.city,
        };

        console.log(reqisterUserRequest);

        /*
        await this.$store.dispatch("createSubjectQueue", reqisterUserRequest);
        this.$store.dispatch(
          "getSubjectQueueUser",
          reqisterUserRequest.subjectId
        );
        await this.$store.dispatch("getAllSubjectQueues");
        await this.$router.push({ name: "QueueList" });

         */
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
