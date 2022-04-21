<template>
  <div class="container">
    <div class="imageCarousel">Bilde her</div>
    <div class="productMeta">
      <h1>Motorsag fra Stihl</h1>
      <p>Trondheim</p>
      <p>Rating</p>
      <p>Dagsleie</p>
      <p>200 kr/dag</p>
    </div>
    <div class="requestContainer">Forespør</div>
    <div class="profileContainer">Navn Navnesen</div>
    <div class="description">Denne er fin</div>
  </div>
</template>

<script>
export default {
  name: "ProductDetails",
};
</script>

<style scoped>
h1 {
  color: black;
}
p {
  margin: 5px 0;
}

.container {
}
.imageCarousel {
  height: 20rem;
}
.productMeta {
  text-align: left;
}
.requestContainer {
}
.profileContainer {
}
.description {
}
</style>
