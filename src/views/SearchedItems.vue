<template>
  <div class="mainContent">
    <form class="form" @submit.prevent="submit">
      <BaseSearchBar :label="'Søk...'" v-model="searchSentence"></BaseSearchBar>
      <button class="searchButton">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 100 100"
            x="0px"
            y="0px"
        >
          <title>Artboard 19</title>
          <path
              d="M45.5,20a25.5,25.5,0,1,0,15,46.13l12.7,12.7a4,4,0,0,0,5.66-5.66l-12.7-12.7A25.48,25.48,0,0,0,45.5,20Zm0,43A17.5,17.5,0,1,1,63,45.5,17.52,17.52,0,0,1,45.5,63Z"
          ></path>
        </svg>
      </button>
      <div class="itemsHeader">
        <h3>Søkeresultater</h3>
        <p> Viser {{itemSize}} resultater for {{searchSentence}}</p>
      </div>
      <div id="sortAlternativesContainer">
        <h4 id="sortTtitle"> sorter etter: </h4>
        <div id="inputContainer">

        </div>

      </div>
      <div id="deliverContainer">
        <h4 id="deliverTitle">Leveringsalternativer</h4>
        <div id="checkboxContainer">
          <BaseCheckboxGroup
              v-model="deliveryOption"
              name="deliveryOption"
              :options="deliveryOptions"/>
        </div>
      </div>
      <div id="PriceContainer">
        <h4 id="minPriceTitle">Minpris</h4>
        <div id="baseInputMinPriceContainer">
          <BaseInput
              id="minPrice"
              class="mb-4"
              type="minPrice"
              v-model="minPrice"
              placeholder="kr"/>
        </div>
        <h4 id="maxPriceTitle">Maxpris</h4>
        <div id="baseInputMaxPriceContainer">
          <BaseInput
              id="maxPrice"
              class="mb-4"
              type="maxPrice"
              v-model="maxPrice"
              placeholder="kr"/>
        </div>
      </div>
    </form>
  </div>
  <div class="itemsContainer">
    <div class="items">
      <ItemCardSquare
          v-for="item in items.slice(0, 4)"
          :key="item.itemId"
          :item="item"
          @click="seeItem(item)"
      ></ItemCardSquare>
    </div>
  </div>
</template>

<script>
import BaseSearchBar from "@/components/baseTools/BaseSearchBar";
import ItemCardSquare from "@/components/itemCards/ItemCardSquare";
import BaseCheckboxGroup from "@/components/baseTools/BaseCheckboxGroup";
import BaseInput from "@/components/baseTools/BaseInput";
export default {
  name: "SearchedItems",
  components: {
    BaseInput,
    BaseCheckboxGroup,
    ItemCardSquare,
    BaseSearchBar,
  },
  data() {
    return {
      maxPrice: 0,
      minPrice: 0,
      deliveryOption: 0,
      page: 0,
      pageSize: 30,
      sortField: "PRICE",
      searchSentence: "",
      deliveryOptions: [
        {
          label: "Kan hentes",
          value: 0,
          checked: this.$store.state.currentItem.isDeliverable,
        },
        {
          label: "Hjemmelevering",
          value: 1,
          checked: this.$store.state.currentItem.isPickupable,
        },
      ],
    };
  },
  computed: {
    items() {
      return this.$store.state.items;
    },
    itemSize(){
      return this.$store.state.items.length;
    }
  },
  methods: {
    emitToggleHamburgerMenu() {
      this.$emit("toggleHamburgerMenu");
    },
    async seeItem(item) {
      await this.$store.dispatch("setItem", item);
      await this.$router.push({ name: "ProductDetails" });
    },
    submit() {
      const searchRequest = {
        maxPrice: this.maxPrice,
        minPrice: this.minPrice,
        mustBeDeliverable: this.deliveryOption,
        mustBePickable: this.deliveryOption,
        page: this.page,
        pageSize: this.pageSize,
        sortField: this.sortField,
        text: this.searchSentence,

      };
      console.log(searchRequest);
      this.$store.dispatch("getSearchedItems", searchRequest);
    },
  },
}

</script>

<style scoped>

h3 {
  font-size: 22px;
  margin-bottom: 5px;
  font-weight: 500;
}
p {
  margin-top: 0;
  color: #575757;
  font-size: 14px;
  margin-bottom: 15px;
}

.form {
  display: grid;
  border-radius: 7px;
  box-shadow: 0 0 3px;
  background: white;
  grid-template-columns: 85% 15%;
  height: 4rem;
  width: 95%;
  margin: 70px auto 0;
}
.searchButton {
  border: none;
  background: transparent;
}
.items {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20rem;
}
.itemsHeader{
  margin-top: 1rem;
}

#checkboxContainer{
  margin-top: 1rem;

}
</style>