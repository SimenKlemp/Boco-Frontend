<template>
  <div id="RequestContainer">
    <h1>Forespør leie:</h1>
    <ItemCardHorizontal :item="item" />
    <form @submit.prevent="submit">
      <h2>Tidsperiode</h2>
      <Datepicker
        v-model="dates"
        range
        locale="no"
        :enableTimePicker="false"
        selectText="Velg"
        cancelText="Lukk"
      ></Datepicker>
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
import { ref, onMounted } from "vue";

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
    const date = ref();

    // For demo purposes assign range from the current date
    onMounted(() => {
      const startDate = new Date();
      const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
      date.value = [startDate, endDate];
    });

    return {
      date,
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      message: "",
      // eslint-disable-next-line vue/no-dupe-keys
      dates: "",
      deliveryOptions: [
        {
          label: "Hjemmelevering",
          value: 0,
          status: !this.$store.state.currentItem.isDeliverable,
        },
        {
          label: "Hente",
          value: 1,
          status: !this.$store.state.currentItem.isPickupable,
        },
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
      this.v$.$validate();
      console.log(this.v$);
      if (!this.v$.$error) {
        console.log(this.dates[1]);
        const reqisterRentalRequest = {
          //deliveryInfo: this.deliveryOption,
          deliveryInfo: "DELIVERED",
          endDate: this.dates[1],
          itemId: this.$store.state.currentItem.itemId,
          message: this.message,
          startDate: this.dates[0],
          userId: this.$store.state.userInfo.userId,
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
