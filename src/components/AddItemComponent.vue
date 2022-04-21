<template>
  <div id="RegContainer">
    <form @submit.prevent="login">
      <div id="registerTitle">
        <label>Opprett annonse:</label>
      </div>

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

      <button id="addImage">Legg til bilder</button>

      <label class="h2">Sted</label>
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
          <label :for="postalcode" class="h3">Postkode</label>
          <BaseInput
            id="postalcode"
            class="mb-4"
            type="postalcode"
            v-model="postalcode"
            placeholder="Postkode"
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

      <label class="h2">Pris</label>

      <label :for="price" class="h3">Pris per dag</label>
      <BaseInput
        id="price"
        class="mb-4"
        type="price"
        v-model="price"
        placeholder="Pris per dag"
      />

      <button>Publiser annonse</button>
    </form>
  </div>
</template>

<script>
import BaseInput from "./BaseInput.vue";

export default {
  name: "AddItemComponent",
  components: {
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
#registerTitle {
  font-size: x-large;
  font-weight: bold;
}
form {
  padding: 0px 30px 0px 30px;
}
form > * {
  margin-bottom: 10px;
  display: block;
}
button {
  width: 100%;
  font-size: medium;
  padding: 10px;
  border-radius: 7px;
  margin-top: 10px;
}
.h2 {
  font-size: large;
  font-weight: bold;
}
/deep/ #title {
  font-size: x-large;
}
#description {
  font-size: medium;
  border-radius: 7px;
  width: 100%;
  height: 150px;
}
.postalAddress {
  display: flex;
  justify-content: space-between;
}
</style>
