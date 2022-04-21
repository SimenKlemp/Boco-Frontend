<template>
  <div class="container">
    <img id="image" src="@/assets/bocologo.png" alt="" />
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

#image {
  padding: 1rem;
  width: 22%;
}
</style>
