<template>
  <div class="itemCardContainer">
    <div v-for="(item, index) in items" :key="index" class="itemCard">
      <div class="imageContainer">Image</div>
      <div class="itemMeta">
        <div class="itemInfo">
          <h4>{{ item.title }}</h4>
          <div class="info">
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
            <p>{{ item.place }}</p>
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
            <p>{{ item.rating }}/5</p>
          </div>
          <div class="info">
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
  data() {
    return {
      items: [
        {
          image: null,
          price: 200,
          place: "Trondheim",
          title: "Motorsag",
          rating: 3.5,
        },
      ],
    };
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
  grid-template-columns: 35% 65%;
  height: 6rem;
  width: 100%;
  border: solid black;
  border-radius: 15px;
  margin-bottom: 2rem;
}
.itemMeta {
  text-align: left;
}
.itemInfo {
  padding-left: 1rem;
}
.imageContainer {
  background-color: var(--orange);
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
</style>
