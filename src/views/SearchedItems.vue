<template>
  <div class="mainContent">
    <form class="form" @submit.prevent="submit" id="form">
      <div id="searchbarContainer">
        <BaseSearchBar
          :label="'Søk...'"
          v-model="searchSentence"
        ></BaseSearchBar>
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
      </div>
      <BaseErrorMessage v-if="v$.searchSentence.$error"
        >{{ v$.$errors[0].$message }}
      </BaseErrorMessage>
      <div class="optionsContainer">
        <div class="itemsHeader">
          <h3>Søkeresultater</h3>
          <p>Viser {{ itemSize }} resultater for {{ searchSentence }}</p>
        </div>

        <div id="sortAlternativesContainer">
          <h4 id="sortTitle">sorter etter:</h4>
          <div id="inputSortContainer">
            <Multiselect
              id="multiSelect"
              v-model="sortField"
              :options="sortOptions"
            ></Multiselect>
          </div>
        </div>
        <div id="deliverContainer">
          <h4 id="deliverTitle">Leveringsalternativer</h4>
          <div id="checkboxContainer">
            <BaseCheckbox
              v-model="mustBePickable"
              label="Kan hentes"
              class="checkbox"
            />
            <BaseCheckbox
              v-model="mustBeDeliverable"
              label="Kan leveres"
              class="checkbox"
            />
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
              placeholder="kr"
            />
          </div>
          <h4 id="maxPriceTitle">Maxpris</h4>
          <div id="baseInputMaxPriceContainer">
            <BaseInput
              id="maxPrice"
              class="mb-4"
              type="maxPrice"
              v-model="maxPrice"
              placeholder="kr"
            />
          </div>
        </div>
      </div>
    </form>
  </div>
  <div class="itemsContainer">
    <div class="items">
      <ItemCardSquare
        v-for="item in items"
        :key="item.itemId"
        :item="item"
        @click="seeItem(item)"
      ></ItemCardSquare>
    </div>
  </div>
</template>

<script>
import Multiselect from "@vueform/multiselect";
import BaseSearchBar from "@/components/baseTools/BaseSearchBar";
import ItemCardSquare from "@/components/itemCards/ItemCardSquare";
import BaseInput from "@/components/baseTools/BaseInput";
import BaseCheckbox from "@/components/baseTools/BaseCheckbox";
import useVuelidate from "@vuelidate/core";
import { helpers, required } from "@vuelidate/validators";

export default {
  name: "SearchedItems",
  components: {
    BaseInput,
    BaseCheckbox,
    ItemCardSquare,
    BaseSearchBar,
    Multiselect,
  },
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      maxPrice: 10000,
      minPrice: 0,
      mustBeDeliverable: false,
      mustBePickable: false,
      page: 0,
      pageSize: 30,
      sortField: "RELEVANCE",
      searchSentence: this.$store.state.currentSearchSentence,
      sortOptions: ["PRICE", "RELEVANCE", "PUBLICITY_DATE"],
    };
  },
  validations() {
    return {
      searchSentence: {
        required: helpers.withMessage("", required),
      },
    };
  },
  computed: {
    items() {
      return this.$store.state.items;
    },
    itemSize() {
      return this.$store.state.items.length;
    },
    isError() {
      if (this.v$.$error) {
        return true;
      } else {
        return false;
      }
    },
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
      this.v$.$validate();
      console.log(this.v$);
      if (!this.v$.$error) {
        const searchRequest = {
          maxPrice: this.maxPrice,
          minPrice: this.minPrice,
          mustBeDeliverable: this.mustBeDeliverable,
          mustBePickable: this.mustBePickable,
          page: this.page,
          pageSize: this.pageSize,
          sortField: this.sortField,
          text: this.searchSentence,
        };

        console.log(searchRequest);
        this.$store.dispatch("getCurrentSearchSentence", this.searchSentence);
        this.$store.dispatch("getSearchedItems", searchRequest);
      } else {
        alert("Søkefelt må være utfylt");
      }
    },
  },
};
</script>

<style scoped>
@import "@vueform/multiselect/themes/default.css";

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
  border: none;
  border-radius: 7px;

  background: white;

  width: 95%;
  margin: 0 auto;
}
#searchbarContainer {
  display: grid;
  grid-template-columns: 85% 15%;
  height: 4rem;
  border: 1px solid #707070;
  box-shadow: 0 0 3px;
  border-radius: 10px;
}
.searchButton {
  border: none;
  background: transparent;
}
.items {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
}
.itemsHeader {
  margin-top: 1rem;
}

#checkboxContainer {
  margin-top: 1rem;
}

.optionsContainer {
  text-align: left;
}
.mainContent {
  margin: 0 15px;
}
#baseInputMinPriceContainer {
  max-width: 150px;
  width: 100%;
}
#baseInputMaxPriceContainer {
  max-width: 150px;
  width: 100%;
}
#minPriceTitle {
  font-weight: 500;
}
#maxPriceTitle {
  font-weight: 500;
}
</style>
