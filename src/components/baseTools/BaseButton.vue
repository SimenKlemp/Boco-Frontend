<template>
  <button :for="id"><img v-if="img" src="img" />{{ text }}</button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    id: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
    img: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
button {
  width: 100%;
  font-size: medium;
  padding: 10px;
  border-radius: 15px;
  margin-top: 10px;
  background-color: var(--blue);
  color: white;
}
</style>
