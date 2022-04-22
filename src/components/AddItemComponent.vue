<template>
  <div id="RegContainer">
    <form @submit.prevent="submit">
      <h1>Opprett annonse:</h1>

      <BaseInput
        id="title"
        class="mb-4"
        type="title"
        v-model="title"
        placeholder="Tittel på annonse"
      /><BaseErrorMessage v-if="v$.title.$error">{{
        v$.$errors[0].$message
      }}</BaseErrorMessage>
      <h2>Kategori</h2>
      <BaseInput
        id="category"
        class="mb-4"
        type="category"
        v-model="category"
        placeholder="Kategori"
      /><BaseErrorMessage v-if="v$.category.$error">{{
        v$.$errors[1].$message
      }}</BaseErrorMessage>

      <textarea
        id="description"
        class="mb-4"
        type="description"
        v-model="description"
        placeholder="Beskrivelse av produkt/gjenstand..."
      ></textarea
      ><BaseErrorMessage v-if="v$.description.$error">{{
        v$.$errors[2].$message
      }}</BaseErrorMessage>


      <div id="info">
        <h2>Sted</h2>
        <div>
          <label :for="address" class="h3">Gateadresse</label>
          <BaseInput
            id="address"
            class="mb-4"
            type="address"
            v-model="address"
            placeholder="Gateadresse"
          />/><BaseErrorMessage v-if="v$.address.$error">{{
            v$.$errors[3].$message
          }}</BaseErrorMessage>
        </div>

        <div class="postalAddress">
          <div>
            <label :for="postalcode" class="h3">Postnummer</label>
            <BaseInput
              id="postalcode"
              class="mb-4"
              type="postalcode"
              v-model="postalcode"
              placeholder="Postnr"
            />/><BaseErrorMessage v-if="v$.postalcode.$error">{{
              v$.$errors[4].$message
            }}</BaseErrorMessage>
          </div>

          <div>
            <label :for="city" class="h3">Poststed</label>
            <BaseInput
              id="city"
              class="mb-4"
              type="city"
              v-model="city"
              placeholder="Poststed"
            />/><BaseErrorMessage v-if="v$.city.$error">{{
              v$.$errors[5].$message
            }}</BaseErrorMessage>
          </div>
        </div>

        <h2>Pris</h2>

        <label :for="price" class="h3">Pris per dag</label>
        <BaseInput
          id="price"
          class="mb-4"
          type="price"
          v-model="price"
          placeholder="Pris per dag"
        />/><BaseErrorMessage v-if="v$.price.$error">{{
          v$.$errors[6].$message
        }}</BaseErrorMessage>
      </div>

      <BaseButton v-on:click="submit" id="publish" text="Publiser" />
    </form>
  </div>
</template>

<script>
import BaseInput from "./baseTools/BaseInput.vue";
import BaseButton from "@/components/baseTools/BaseButton";
import BaseErrorMessage from "@/components/baseTools/BaseErrorMessage";
import useVuelidate from "@vuelidate/core";
import { helpers, required } from "@vuelidate/validators";
import { doRegisterItem } from "@/service/apiService";

export default {
  name: "AddItemComponent",
  components: {
    BaseButton,
    BaseInput,
    BaseErrorMessage,
  },
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      title: "",
      category: "",
      description: "",
      address: "",
      postalcode: "",
      city: "",
      price: "",
    };
  },
  validations() {
    return {
      title: {
        required: helpers.withMessage("Navn er påkrevd", required),
      },
      category: {
        required: helpers.withMessage("Kategori er påkrevd", required),
      },
      description: {
        required: helpers.withMessage(
          "En beskrivelse av produktet er påkrevd",
          required
        ),
      },
      address: {
        required: helpers.withMessage("Addresse er påkrevd", required),
      },
      postalcode: {
        required: helpers.withMessage("Postkode er påkrevd", required),
      },
      city: {
        required: helpers.withMessage("Poststed er påkrevd", required),
      },
      price: {
        required: helpers.withMessage("Pris er påkrevd", required),
      },
    };
  },
  methods: {
    async submit() {
      this.v$.$validate();
      console.log(this.v$);
      // eslint-disable-next-line no-empty
      if (!this.v$.$error) {
        const itemRequest = {
          category: this.category,
          description: this.description,
          postOffice: this.city,
          postalCode: this.postalcode,
          price: this.price,
          streetAddress: this.address,
          title: this.title,
          userId: this.$store.state.userInfo.userId,
        };

        let itemResponse = doRegisterItem(itemRequest, this.$store.state.token);
        if (itemResponse.status === 201) {
          await this.$router.push({ name: "HomeView" });
        }
      }
    },
    addPhotos() {
      alert("Legger til bilder");
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
  display: block;
}
/deep/ #title {
  font-size: x-large;
}
#description {
  font-size: medium;
  border-radius: 15px;
  width: 100%;
  height: 150px;
}
.postalAddress {
  display: flex;
}
#info {
  text-align: left;
}
#info > * {
  padding-bottom: 10px;
}
/deep/ #postalcode {
  width: 87px;
}
</style>
