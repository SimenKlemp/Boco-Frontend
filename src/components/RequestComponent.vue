<template>
  <div id="RequestContainer">
    <h1>Forespør leie:</h1>
    <ItemCardHorizontal />
    <h2>Tidsperiode</h2>
    <label></label>
    <Datepicker />
  </div>
</template>

<script>
import ItemCardHorizontal from "@/components/itemCards/ItemCardHorizontal";
import Datepicker from "@/components/baseTools/Datepicker";
export default {
  name: "RequestComponent",
  components: { Datepicker, ItemCardHorizontal },
};
</script>

<style scoped></style>
