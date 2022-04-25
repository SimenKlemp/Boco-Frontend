<template>
  <div class="container" id="footerContainer">
    <img id="image" :src="require('../assets/bocologo.png')" alt="" />
    <div class="footerMeta">Her er masse info</div>
  </div>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
.container {
}
.footerMeta {
  border-top: solid black;
}
#footerContainer {
  padding-bottom: 20px;
}
#image {
  padding: 1rem;
  width: 22%;
}
</style>
