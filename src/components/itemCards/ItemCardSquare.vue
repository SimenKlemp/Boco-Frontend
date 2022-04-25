<template>
  <div class="itemCardContainer">
      <div class="imageContainer">
        <img
          :src="require('../../assets/6efa4b_motorsag-stihl-ms181c.jpg')"
          alt="motorsag"
        />
        <p id="priceTag">{{ item.price }} kr/dag</p>
      </div>
      <div class="itemMeta">
        <div class="itemInfo">
          <p>{{ item.place }}</p>
          <h4>{{ item.title }}</h4>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "ItemCardSquare",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
p {
  margin: 2px 0 2px 0;
  font-size: 11px;
}
h4 {
  margin: 5px 0 0 0;
  font-size: 16px;
}

.itemCardContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem;
}
.itemCard {
  position: relative;
  display: grid;
  grid-template-rows: 70% 10% 20%;
  height: 180px;
  width: 170px;
  border: 1px solid #707070;
  border-radius: 10px;
  margin-bottom: 2rem;
}
img {
  width: 170px;
  border-radius: 10px;
}
.itemMeta {
  text-align: left;
}
.itemInfo {
  padding-left: 1rem;
}

#priceTag {
  position: absolute;
  background: #707070;
  border-radius: 0 15px 0 10px;
  color: white;
  text-align: left;
  padding: 0 1rem 0 1rem;
  width: fit-content;
  bottom: 51px;
  font-size: 12px;
}
</style>
