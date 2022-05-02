<template>
  <div class="container">
    <div class="headerContainer"></div>
    <div class="allRatingsContainer">
      <div class="ratingsHeader">
        <span id="name">Navn Navnesen</span>
        <span>har 4 vurderinger</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RatingsView",
};
</script>

<style scoped>
span {
  font-size: 22px;
}

.allRatingsContainer {
  background: #e5ecf1;
  padding: 1rem;
}
.ratingsHeader {
  text-align: left;
}

#name {
  font-weight: bold;
  margin-right: 0.5rem;
}
</style>
