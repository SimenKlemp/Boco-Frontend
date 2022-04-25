<template>
  <div class="itemCardContainer">
    <div v-for="(item, index) in items" :key="index" class="itemCard">
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
  </div>
</template>

<script>
export default {
  name: "ItemCardSquare",
  data() {
    return {
      items: [
        { image: null, price: 200, place: "Trondheim", title: "Motorsag fra Stihl i god stand " },
        { image: null, price: 200, place: "Trondheim", title: "Sykkel" },
        { image: null, price: 200, place: "Trondheim", title: "Ski" },
        { image: null, price: 200, place: "Trondheim", title: "Kajakk" },
      ],
    };
  },
};
</script>

<style scoped>
p {
  margin: 5px 0 2px 0;
  font-size: 11px;
  color: #707070;
}
h4 {
  margin: 5px 0 0 0;
  font-size: 16px;
  font-weight: 400;
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
  grid-template-rows: 128px 23px 50px;
  width: 170px;
  height: 200px;
  border: none;
  border-radius: 10px;
  margin-bottom: 2rem;
  box-shadow: 0 3px 6px #00000029;
}
img {
  width: 10.625rem;
  border-radius: 10px 10px 0 0;
}
.itemMeta {
  text-align: left;
}
.itemInfo {
  padding-left: 10px;
  padding-bottom: 5px;
}
.imageContainer{
  height: 8rem;
}
#priceTag {
  position: absolute;
  background: #126782;
  border-radius: 0 10px 0 0;
  color: white;
  text-align: left;
  padding: 3px 10px;
  width: fit-content;
  bottom: 71px;
  font-size: 12px;
  font-weight: 500;
}

</style>
