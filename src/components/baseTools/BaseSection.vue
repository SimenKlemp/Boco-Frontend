<template>
  <div class="sectionContainer">
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
    v-for="item in items"
    :key="item.itemId"
    class="items"
    :item="item"
  ></ItemCardHorizontal>
</template>

<script>
import ItemCardHorizontal from "@/components/itemCards/ItemCardHorizontal";
export default {
  name: "BaseSection",
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
};
</script>

<style scoped>
.sectionContainer {
  border-bottom: solid black 1px;
  display: flex;
  height: 3.8rem;
  justify-content: space-between;
  margin: 0 1rem;
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
