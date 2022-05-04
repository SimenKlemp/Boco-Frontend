<template>
  <div class="systemMessageContainer">
    <div id="acceptDenyMessage">
      Navn Navnesen ønsker å leie <strong>Stort telt</strong>
      <div class="buttonContainer">
        <div
            @click.stop="emitRentalAction('Accept')"
            id="acceptButton"
            class="button">
          Godkjenn
        </div>
        <div @click.stop="emitRentalAction('Reject')" class="button">Avvis</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RequestSystemMessage",
  props:{
    rental:{
      type:Object,
    }
  },
  methods:{
    emitRentalAction(type) {
      this.$emit("rentalAction", this.rental, type);

    },
  }
}
</script>

<style scoped>
.systemMessageContainer {
  background-color: rgba(142, 202, 230, 0.5);
  max-width: 280px;
  width: 100%;
  border-radius: 0 20px 20px 0;
  padding: 15px 20px;
  border-left: 3px solid #fb8500;
  margin-bottom: 1rem;
}
.button {
  border-radius: 5px;
  background: #d22222;
  width: 90px;
  height: 23px;
  text-align: center;
  color: white;
  font-size: 14px;
  font-weight: 500;
  padding-top: 5px;
}
#acceptButton {
  background: #389b3f;
}
#cancelButton {
  margin: 0 auto;
}
.buttonContainer {
  display: flex;
  justify-content: space-evenly;
  padding: 0 0.5rem;
  margin-top: 10px;
}
</style>