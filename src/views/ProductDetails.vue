<template>
  <div class="container">
    <div class="imageCarousel">
      <img
        v-if="item.imageId === -1 || item.imageId === null"
        id="productImage"
        :src="require('../assets/Motorsag.png')"
        alt=""
      />
      <img
        v-else
        :src="'http://localhost:8085/api/image/' + item.imageId"
        id="product"
      />
    </div>
    <div class="info">
      <div class="productMeta">
        <div id="ratingLocationContainer">
          <div class="location">
            <svg
              class="positionMarker"
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
          <div class="rating">
            <svg
              class="stars"
              xmlns="http://www.w3.org/2000/svg"
              width="162.031"
              height="30.079"
              viewBox="0 0 162.031 30.079"
            >
              <g
                id="Group_12"
                data-name="Group 12"
                transform="translate(-15 -527.501)"
              >
                <g
                  id="filled_star"
                  data-name="filled star"
                  transform="translate(2.96 -437.071)"
                >
                  <path
                    id="Path_1"
                    data-name="Path 1"
                    d="M26.29,966.153l3.227,9.682a.751.751,0,0,0,.714.517H40.54l-8.387,6.134a.751.751,0,0,0-.271.838l3.227,10.014-8.375-6.122a.751.751,0,0,0-.887,0l-8.375,6.122L20.7,983.324a.751.751,0,0,0-.271-.838l-8.387-6.134H22.349a.751.751,0,0,0,.714-.517l3.227-9.682Z"
                    fill="#fb8500"
                    fill-rule="evenodd"
                  />
                </g>
                <g
                  id="filled_star-2"
                  data-name="filled star"
                  transform="translate(35.96 -437.071)"
                >
                  <path
                    id="Path_1-2"
                    data-name="Path 1"
                    d="M26.29,966.153l3.227,9.682a.751.751,0,0,0,.714.517H40.54l-8.387,6.134a.751.751,0,0,0-.271.838l3.227,10.014-8.375-6.122a.751.751,0,0,0-.887,0l-8.375,6.122L20.7,983.324a.751.751,0,0,0-.271-.838l-8.387-6.134H22.349a.751.751,0,0,0,.714-.517l3.227-9.682Z"
                    fill="#fb8500"
                    fill-rule="evenodd"
                  />
                </g>
                <g
                  id="filled_star-3"
                  data-name="filled star"
                  transform="translate(68.96 -437.071)"
                >
                  <path
                    id="Path_1-3"
                    data-name="Path 1"
                    d="M26.29,966.153l3.227,9.682a.751.751,0,0,0,.714.517H40.54l-8.387,6.134a.751.751,0,0,0-.271.838l3.227,10.014-8.375-6.122a.751.751,0,0,0-.887,0l-8.375,6.122L20.7,983.324a.751.751,0,0,0-.271-.838l-8.387-6.134H22.349a.751.751,0,0,0,.714-.517l3.227-9.682Z"
                    fill="#fb8500"
                    fill-rule="evenodd"
                  />
                </g>
                <g
                  id="filled_star-4"
                  data-name="filled star"
                  transform="translate(101.96 -437.071)"
                >
                  <path
                    id="Path_1-4"
                    data-name="Path 1"
                    d="M26.29,966.153l3.227,9.682a.751.751,0,0,0,.714.517H40.54l-8.387,6.134a.751.751,0,0,0-.271.838l3.227,10.014-8.375-6.122a.751.751,0,0,0-.887,0l-8.375,6.122L20.7,983.324a.751.751,0,0,0-.271-.838l-8.387-6.134H22.349a.751.751,0,0,0,.714-.517l3.227-9.682Z"
                    fill="#fb8500"
                    fill-rule="evenodd"
                  />
                </g>
                <g
                  id="filled_star-5"
                  data-name="filled star"
                  transform="translate(134.96 -437.071)"
                >
                  <path
                    id="Path_1-5"
                    data-name="Path 1"
                    d="M26.29,966.153l3.227,9.682a.751.751,0,0,0,.714.517H40.54l-8.387,6.134a.751.751,0,0,0-.271.838l3.227,10.014-8.375-6.122a.751.751,0,0,0-.887,0l-8.375,6.122L20.7,983.324a.751.751,0,0,0-.271-.838l-8.387-6.134H22.349a.751.751,0,0,0,.714-.517l3.227-9.682Z"
                    fill="none"
                    stroke="#fb8500"
                    stroke-width="1"
                    fill-rule="evenodd"
                  />
                </g>
              </g>
            </svg>
            <p class="ratingSummary">(4/5)</p>
          </div>
        </div>

        <h1>{{ item.title }}</h1>
        <div class="price">
          <p id="priceTitle">Dagsleie</p>
          <p v-if="!isFree" class="pricetag">{{ item.price }} kr</p>
          <p v-else class="pricetag">GRATIS</p>
        </div>
      </div>
    </div>
    <div class="requestContainer">
      <BaseButton
        v-if="!isMyAd"
        class="baseButton"
        :id="'requestButton'"
        :text="'Send forespørsel'"
        :status="isRequested"
        @click="goToRequest(item)"
      ></BaseButton>
      <BaseButton
        v-else
        class="baseButton"
        :id="'editButton'"
        :text="'Endre annonse'"
        @click="goToEditAd(item)"
      ></BaseButton>
    </div>
    <div class="profileContainer">
      <BaseProfile :user="item.user"></BaseProfile>
    </div>
    <div class="description">
      <h3 class="descriptionTitle">Beskrivelse</h3>
      <p id="descriptionText">{{ item.description }}</p>
    </div>
  </div>
</template>

<script>
import BaseProfile from "@/components/baseTools/BaseProfile";
import BaseButton from "@/components/baseTools/BaseButton";
export default {
  name: "ProductDetails",
  components: {
    BaseProfile,
    BaseButton,
  },
  computed: {
    item() {
      return this.$store.state.currentItem;
    },
    isMyAd() {
      console.log(
        this.item.user.userId + " " + this.$store.state.userInfo.userId
      );
      return this.item.user.userId === this.$store.state.userInfo.userId;
    },
    isFree() {
      return this.item.price === 0;
    },
    isRequested() {
      console.log("HEEEIII");
      console.log(this.$store.state.myRentalsActive.length);
      for (let i = 0; i < this.$store.state.myRentalsActive.length; i++) {
        console.log("SJKEKKER");
        if (
          this.$store.state.currentItem.itemId ===
          this.$store.state.myRentalsActive[i].item.itemId
        ) {
          console.log("Er inni if active");
          return true;
        }
      }
      for (let i = 0; i < this.$store.state.myRentalsPending.length; i++) {
        console.log("SJKEKKER IGFJEN");
        if (
          this.$store.state.currentItem.itemId ===
          this.$store.state.myRentalsPending[i].item.itemId
        ) {
          console.log("Er inni if pending");
          return true;
        }
      }
      return false;
    },
  },
  methods: {
    async goToRequest() {
      if (this.$store.state.userInfo.userId) {
        console.log(this.$store.state.userInfo);
        await this.$router.push({ name: "RequestComponent" });
      } else {
        await this.$router.push({ name: "LoginComponent" });
      }
    },
    async goToEditAd() {
      await this.$router.push({ name: "AddItemComponent" });
    },
  },
  async mounted() {
    await this.$store.dispatch("fetchMyRentals", "ACCEPTED");
    await this.$store.dispatch("fetchMyRentals", "PENDING");
    console.log(BaseButton.props.status);
  },
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
  margin: 1rem 0;
}
.imageCarousel {
  height: 20rem;
  width: 100%;
  margin: 1rem 0;
}
.info {
  margin: 0 1rem 0 1rem;
}
.productMeta {
  text-align: left;
}
.location {
  display: flex;
  height: 1.5rem;
  margin-bottom: 0.5rem;
}
.positionMarker {
  fill: #fb8500;
  height: 100%;
  margin: 3px 5px 0 -1px;
}
.rating {
  display: flex;
  height: 1.5rem;
  margin-bottom: 1.5rem;
  grid-column: 3;
}
.stars {
  height: 100%;
  margin: 0 0.5rem 0 -1.15rem;
}
.ratingSummary {
  font-size: 20px;
  margin: 0;
  padding-bottom: 2px;
}
.price {
  margin-bottom: 0.5rem;
}
.price p {
  font-size: 24px;
  font-weight: bold;
}
.requestContainer {
  height: 2.5rem;
  margin: 1rem 1rem 2.5rem 1rem;
}
.baseButton {
  height: 100%;
}
.profileContainer {
  margin: 0 1rem 0 1rem;
}
.description {
  text-align: left;
  margin: 0 1rem 0 1rem;
}
.descriptionTitle {
  font-size: 24px;
  margin: 24px 0 10px 0;
}

#productImage {
  width: 100%;
  height: 100%;
}
.pricetag {
  font-size: 26px;
  font-weight: 500;
}
#descriptionText {
  color: #333333;
}
#ratingLocationContainer {
  display: grid;
  grid-template-columns: 40% 20% 40%;
}
#priceTitle {
  font-size: 16px;
  font-weight: 400;
}
#product {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
</style>
