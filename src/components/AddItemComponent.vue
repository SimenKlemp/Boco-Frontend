<template>
  <div id="RegContainer">
    <form @submit.prevent="login">
      <h1>Opprett annonse:</h1>

      <BaseInput
        id="title"
        class="mb-4"
        type="title"
        v-model="title"
        placeholder="Tittel på annonse"
      />

      <textarea
        id="description"
        class="mb-4"
        type="description"
        v-model="description"
        placeholder="Beskrivelse av produkt/gjenstand..."
      ></textarea>

      <BaseButton id="addPhotos" text="Legg til bilder" />
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
          />
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
            />
          </div>

          <div>
            <label :for="city" class="h3">Poststed</label>
            <BaseInput
              id="city"
              class="mb-4"
              type="city"
              v-model="city"
              placeholder="Poststed"
            />
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
        />
      </div>

      <BaseButton id="publish" text="Publiser" />
    </form>
  </div>
</template>

<script>
import BaseInput from "./baseTools/BaseInput.vue";
import BaseButton from "@/components/baseTools/BaseButton";

export default {
  name: "AddItemComponent",
  components: {
    BaseButton,
    BaseInput,
  },
  data() {
    return {
      title: "",
      description: "",
      address: "",
      postalcode: "",
      city: "",
      price: "",
    };
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
