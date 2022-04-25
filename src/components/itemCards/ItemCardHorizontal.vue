<template>
  <div class="itemCardContainer">
    <div class="itemCard">
      <div class="imageContainer">
        <img :src="require('../../assets/6efa4b_motorsag-stihl-ms181c.jpg')" />
      </div>
      <div class="itemMeta">
        <div class="itemInfo">
          <div class="info" id="positionInfo">
            <svg
              class="icons"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 96 96"
              enable-background="new 0 0 96 96"
              xml:space="preserve"
            >
              <path
                d="M48,9C31.86,9,18.73,22.131,18.73,38.271c0,14.13,23.756,41.948,28.518,47.381L48,86.512l0.752-0.857  c4.762-5.432,28.518-33.24,28.518-47.383C77.27,22.131,64.14,9,48,9z M48,48c-5.374,0-9.73-4.356-9.73-9.73s4.356-9.73,9.73-9.73  s9.73,4.356,9.73,9.73S53.374,48,48,48z"
              ></path>
            </svg>
            <p>{{ item.postOffice }}</p>
          </div>
          <h3>{{item.title}}</h3>
          <div id="priceRatingContainer">
          <div class="info">
            <svg xmlns="http://www.w3.org/2000/svg" width="15.726" height="15" viewBox="0 0 15.726 15">
              <g id="filled_star" data-name="filled star" transform="translate(0 0)">
                <path id="Path_1" data-name="Path 1" d="M19.9,966.153l1.781,5.342a.414.414,0,0,0,.394.285h5.688l-4.628,3.385a.414.414,0,0,0-.15.462l1.781,5.526-4.621-3.378a.414.414,0,0,0-.489,0l-4.621,3.378,1.781-5.526a.414.414,0,0,0-.15-.462l-4.628-3.385h5.688a.414.414,0,0,0,.394-.285l1.78-5.342Z" transform="translate(-12.04 -966.153)" fill="#fb8500" fill-rule="evenodd"/>
              </g>
            </svg>

            <!--TODO: add rating when this is in database-->
            <p>3/5</p>
          </div>

          <div class="info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 14 14"
            >
              <g id="noun-coin-3324289" transform="translate(-230.91 -122.91)">
                <path
                  id="Path_9"
                  data-name="Path 9"
                  d="M13.91,6.91a7,7,0,1,0,7,7A7,7,0,0,0,13.91,6.91ZM14.4,16.957h-.067v.784a.418.418,0,0,1-.837,0v-.784h-.915a.418.418,0,1,1,0-.837H14.4a.9.9,0,0,0,0-1.791h-.971a1.733,1.733,0,0,1,0-3.465h.067v-.784a.418.418,0,0,1,.837,0v.784h.915a.418.418,0,1,1,0,.837H13.425a.9.9,0,1,0,0,1.791H14.4a1.733,1.733,0,1,1,0,3.465Z"
                  transform="translate(224 116)"
                  fill="#fb8500"
                />
              </g>
            </svg>
            <p>{{ item.price }} kr/dag</p>
          </div></div>
        </div>
      </div>
</div>
</template>

<script>
export default {
  name: "ItemCardHorizontal",
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
  font-weight: 400;
}

.itemCardContainer {
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
}
.itemCard {
  position: relative;
  display: grid;
  grid-template-columns: 39.5% 60.5%;
  height: 108px;
  width: 100%;
  border: none;
  border-radius: 15px;
  margin-bottom: 2rem;
  box-shadow: 0 3px 10px #00000029;
}
.itemMeta {
  text-align: left;
}
.itemInfo {
  padding-left: 1rem;
}
.imageContainer {
}
img {
  max-width: 150px;
  width: 100%;
  border-radius: 15px 0 0 15px;
}
.icons {
  fill: var(--orange);
  height: 15px;
  padding-right: 3px;
}
.info {
  display: flex;
  flex-direction: row;
}
#positionInfo {
  padding-top: 15px;
}
#priceRatingContainer {
  display: grid;
  grid-template-columns: 30% 50%;
  margin-top: 10px;
}
h3{
  font-size: 16px;
  font-weight: 400;
}
</style>
