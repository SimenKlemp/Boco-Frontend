<template>
  <div id="RequestContainer">
    <h1>Forespør leie:</h1>
    <ItemCardHorizontal />
    <form>
      <h2>Tidsperiode</h2>
      <Datepicker />
      <h2>Leveringsalternativer</h2>
      <input class="radio" id="collect" type="radio" name="radio"/>
      <label for="collect">Hente selv</label>
      <input class="radio" id="deliver" type="radio" name="radio"/>
      <label for="deliver">Hjemlevering</label>
      <h2>Melding til utleier</h2>
      <textarea
          id="message"
          class="mb-4"
          type="message"
          v-model="message"
          placeholder="Melding til utleier..."
      ></textarea>
      <BaseButton
          id="request"
          text="Forespør leie"
      />
    </form>
  </div>
</template>

<script>
import ItemCardHorizontal from "@/components/itemCards/ItemCardHorizontal";
import Datepicker from "@/components/baseTools/Datepicker";
import BaseButton from "@/components/baseTools/BaseButton";
export default {
  name: "RequestComponent",
  components: {BaseButton, Datepicker, ItemCardHorizontal },
};
</script>

<style scoped>
.radio:checked ~ .checkmark {
  background-color: var(--blue);
}
#message {
  font-size: medium;
  border-radius: 15px;
  width: 100%;
  height: 150px;
}
form {
  text-align: left;
}
</style>
