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
          <div class="info">
            <svg
              class="icons"
              xmlns:dc="http://purl.org/dc/elements/1.1/"
              xmlns:cc="http://creativecommons.org/ns#"
              xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
              xmlns:svg="http://www.w3.org/2000/svg"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
              xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
            >
              <g transform="translate(0,-952.36218)">
                <path
                  style="
                    text-indent: 0;
                    text-transform: none;
                    direction: ltr;
                    block-progression: tb;
                    baseline-shift: baseline;
                    color: #000000;
                    enable-background: accumulate;
                  "
                  d="m 50.000003,966.15342 8.59599,25.79072 a 1.999897,2.000113 0 0 0 1.90293,1.3782 l 27.461215,0 -22.342996,16.34066 a 1.999897,2.000113 0 0 0 -0.7218,2.2312 l 8.59599,26.6767 -22.310199,-16.3079 a 1.999897,2.000113 0 0 0 -2.362251,0 l -22.310199,16.3079 8.59599,-26.6767 a 1.999897,2.000113 0 0 0 -0.7218,-2.2312 l -22.34301,-16.34066 27.461229,0 a 1.999897,2.000113 0 0 0 1.90293,-1.3782 l 8.59598,-25.79072 z"
                  fill-opacity="1"
                  fill-rule="evenodd"
                  stroke="none"
                  marker="none"
                  visibility="visible"
                  display="inline"
                  overflow="visible"
                ></path>
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
          </div>
        </div>
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
  grid-template-columns: 37% 63%;
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
</style>
