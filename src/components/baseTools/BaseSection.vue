<template>
  <div @click="toggleItems" class="sectionContainer">
    <div class="meta">
      <div class="title">{{ title }}</div>
      <svg
        class="dropdownIcon"
        xmlns="http://www.w3.org/2000/svg"
        width="11.676"
        height="20"
        viewBox="0 0 11.676 20"
      >
        <path
          id="Path_8"
          data-name="Path 8"
          d="M32.219,986.143l-1,.956-9,8.639,2,2.081,8-7.683,8,7.683,2-2.081-9-8.639Z"
          transform="translate(997.819 -22.219) rotate(90)"
        />
      </svg>
    </div>
    <ItemCardHorizontal
      v-for="item in dataItems"
      :key="item.itemId"
      class="items"
      :item="item"
      @click.stop="goToItem(item)"
    ></ItemCardHorizontal>
  </div>
</template>

<script>
import ItemCardHorizontal from "@/components/itemCards/ItemCardHorizontal";
export default {
  name: "BaseSection",
  data() {
    return {
      dataItems: null,
    };
  },
  components: {
    ItemCardHorizontal,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: false,
    },
  },
  methods: {
    toggleItems() {
      if (this.dataItems === null) {
        this.dataItems = this.items;
      } else {
        this.dataItems = null;
      }
    },
    goToItem(item) {
      this.$store.dispatch("setItem", item);
      this.$router.push({ name: "ProductDetails" });
    },
  },
};
</script>

<style scoped>
.sectionContainer {
  border-bottom: solid black 1px;
  margin: 0 1rem;
}
.meta {
  display: flex;
  height: 3.8rem;
  justify-content: space-between;
}
.title {
  padding: 1.1rem;
  font-size: 20px;
}
.dropdownIcon {
  height: 1.5rem;
  width: 1rem;
  padding: 1rem;
}
</style>
