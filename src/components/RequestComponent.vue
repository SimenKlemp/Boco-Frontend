<template>
  <div id="RequestContainer">
    <h1>Forespør leie:</h1>
    <ItemCardHorizontal :item="item" />
    <form @submit.prevent="submit">
      <h2>Tidsperiode</h2>
      <Datepicker v-model="dates" :previewFormat="format" />
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
      <div id="descriptionInfo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
        >
          <path
            id="noun-info-3126147"
            d="M17.5,5A12.5,12.5,0,1,0,30,17.5,12.5,12.5,0,0,0,17.5,5Zm2.094,18.354a6.263,6.263,0,0,1-2.185,2.072,3.774,3.774,0,0,1-1.781.381c-1.615-.134-2.365-1.351-1.66-3.287l2.123-5.833c.458-1.259.014-1.642-.349-1.651q-.649-.012-1.551,1.216a.32.32,0,1,1-.522-.37,6.263,6.263,0,0,1,2.185-2.072,3.775,3.775,0,0,1,1.781-.381c1.615.134,2.365,1.351,1.66,3.287l-2.123,5.833c-.458,1.259-.014,1.642.349,1.651q.649.012,1.551-1.216a.32.32,0,1,1,.522.37Zm1.7-12.142a1.51,1.51,0,1,1-.9-1.935,1.51,1.51,0,0,1,.9,1.935Z"
            transform="translate(-5 -5)"
            fill="#126782"
          />
        </svg>
        <p>
          Lurt å inkludere ønsket hente/leverings tidspunkt, eller andre
          detaljer
        </p>
      </div>
      <BaseButton
        id="request"
        text="Forespør leie"
        @click.prevent="submit"
        :disabled="isError"
      />
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
import { ref } from "vue";

export default {
  name: "RequestComponent",
  components: {
    BaseButton,
    BaseRadioGroup,
    Datepicker,
    ItemCardHorizontal,
    BaseErrorMessage,
  },
  setup() {
    const date = ref(new Date());
    // In case of a range picker, you'll receive [Date, Date]
    const format = ([startDate, endDate]) => {
      const startDay = startDate.getDate();
      const startMonth = startDate.getMonth() + 1;
      const startYear = startDate.getFullYear();

      const endDay = endDate.getDate();
      const endMonth = endDate.getMonth() + 1;
      const endYear = endDate.getFullYear();

      return `${startDay}/${startMonth}/${startYear}`;
    };
    return {
      date,
      format,
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
  computed: {
    item() {
      return this.$store.state.currentItem;
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
    async submit() {
      this.showDates();
      this.v$.$validate();
      console.log(this.v$);
      if (!this.v$.$error) {
        console.log(this.dates);
        //Need to split dates to get access to start and end date

        console.log(this.deliveryOption);

        const reqisterRentalRequest = {
          endDate: "2022-04-25T07:32:23.293Z",
          itemId: this.$store.state.currentItem.itemId,
          message: this.message,
          startDate: "2022-04-25T07:32:23.294Z",
          userId: this.$store.state.userInfo.userId,
          deliveryInfo: this.deliveryOption,
        };

        let response = await doRentalRequest(
          reqisterRentalRequest,
          this.$store.state.token
        );
        await this.$router.push({ name: "MyRentals" });
        console.log(response);
      } else {
        alert("Alle felter må være fylt inn");
      }
    },
    showDates() {
      console.log(this.dates);
    }
  },
};
</script>

<style scoped>
.radio:checked ~ .checkmark {
  background-color: var(--blue);
}
#RequestContainer {
  padding: 0 15px;
}
#radioContainer {
  margin-top: 10px;
  margin-bottom: 15px;
}
#message {
  font-size: medium;
  border-radius: 15px;
  width: 100%;
  height: 150px;
}
h2 {
  font-size: 24px;
  font-weight: 500;
  color: black;
  margin-bottom: 25px;
}
form {
  text-align: left;
}
#deliverTitle {
  margin-top: 20px;
}
textarea {
  margin-bottom: 20px;
}
#descriptionInfo {
  display: flex;
  font-size: 14px;
  color: #707070;
  margin-bottom: 30px;
}
#descriptionInfo svg {
  margin-right: 10px;
}
</style>
