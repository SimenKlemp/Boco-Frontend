<template>
  <div id="RequestContainer">
    <h1>Forespør leie:</h1>
    <ItemCardHorizontal :item="item"/>
    <form @submit.prevent="submit">
      <h2>Tidsperiode</h2>
      <Datepicker v-model="dates" />
      <h2 id="deliverTitle">Leveringsalternativer</h2>
      <div id="radioContainer">
        <BaseRadioGroup
          v-model="deliveryOption"
          name="deliveryOption"
          :options="deliveryOptions"
        />
      </div>
      <h2>Melding til utleier</h2>
       <textarea
        id="message"
        class="mb-4"
        type="message"
        v-model="message"
        placeholder="Melding til utleier..."
      ></textarea>
      <BaseErrorMessage v-if="v$.message.$error">{{
        v$.$errors[0].$message
      }}</BaseErrorMessage>

      <BaseButton id="request" text="Forespør leie" />
    </form>
  </div>
</template>

<script>
import ItemCardHorizontal from "@/components/itemCards/ItemCardHorizontal";
import Datepicker from "@/components/baseTools/DatepickerComponent";
import BaseButton from "@/components/baseTools/BaseButton";
import BaseRadioGroup from "@/components/baseTools/BaseRadioGroup";
import useVuelidate from "@vuelidate/core";
import BaseErrorMessage from "@/components/baseTools/BaseErrorMessage";
import { helpers, required } from "@vuelidate/validators";
import { doRentalRequest } from "@/service/apiService";

export default {
  name: "RequestComponent",
  components: {
    BaseButton,
    BaseRadioGroup,
    Datepicker,
    ItemCardHorizontal,
    BaseErrorMessage,
  },
  computed: {
    item() {
      return this.$store.state.currentItem;
    },
  },
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      message: "",
      dates: null,
      deliveryOption: 0,
      deliveryOptions: [
        { label: "Hjemmelevering", value: 0 },
        { label: "Hente", value: 1 },
      ],
    };
  },
  validations() {
    return {
      message: {
        required: helpers.withMessage(
          "Melding til utleier er påkrevd",
          required
        ),
      },
    };
  },
  methods: {
    async submit() {
      this.v$.$validate();
      console.log(this.v$);
      if (!this.v$.$error) {
        console.log(this.dates);
        //Need to split dates to get access to start and end date

        const reqisterRentalRequest = {
          endDate: "2022-04-25T07:32:23.293Z",
          itemId: 19, //get correct itemid
          message: this.message,
          startDate: "2022-04-25T07:32:23.294Z",
          userId: this.$store.state.userInfo.userId,
        };

        let response = await doRentalRequest(
          reqisterRentalRequest,
          this.$store.state.token
        );
        console.log(response);
      } else {
        alert("Alle felter må være fylt inn");
      }
    },
  },
};
</script>

<style scoped>
.radio:checked ~ .checkmark {
  background-color: var(--blue);
}
#RequestContainer{
  padding: 0 15px;
}
#radioContainer{
  margin-top:10px;
  margin-bottom: 15px;
}
#message {
  font-size: medium;
  border-radius: 15px;
  width: 100%;
  height: 150px;
}
h2{
  font-size: 24px;
  font-weight: 500;
  color: black;
  margin-bottom: 25px;
}
form {
  text-align: left;
}
#deliverTitle{
  margin-top:20px;
}
textarea{
  margin-bottom: 30px;
}
</style>
