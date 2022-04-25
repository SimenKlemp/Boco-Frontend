<template>
  <div class="feedbackCardContainer">
    <div class="feedbackCard">
      <p>{{ feedback.user.userId }}</p>
      <h4>{{ feedback.message }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemCardSquare",
  props: {
    feedback: {
      type: Object,
      required: true,
    },
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

.feedbackCardContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem;
}
.feedbackCard {
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
</style>
