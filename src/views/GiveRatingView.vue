<template>
  <div class="container">
    <h1>Vurder leieforholdet med:</h1>
    <div id="personContainer">
      <div class="">
        <svg
          v-if="!hasProfileImage"
          class="image"
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="45"
          viewBox="0 0 45 45"
        >
          <path
            id="noun-profile-1995071"
            d="M25,2.5A22.5,22.5,0,1,0,47.5,25,22.52,22.52,0,0,0,25,2.5Zm0,12.884a7.058,7.058,0,1,1-7.058,7.058A7.076,7.076,0,0,1,25,15.384ZM12.684,38.642V37.6a5.448,5.448,0,0,1,5.447-5.447H31.868A5.448,5.448,0,0,1,37.316,37.6v1.042a18.379,18.379,0,0,1-24.632,0Z"
            transform="translate(-2.5 -2.5)"
            fill="#126782"
          />
        </svg>
        <img
          v-if="isMyItem"
          class="actualProfileImage"
          :src="'http://localhost:8085/api/image/' + rental.user.imageId"
          alt=""
        />
        <img
          v-if="!isMyItem"
          class="actualProfileImage"
          :src="'http://localhost:8085/api/image/' + rental.item.user.imageId"
          alt=""
        />
      </div>
      <div id="infoContainer">
        <h2 v-if="isMyItem">{{ rental.user.name }}</h2>
        <h2 v-if="!isMyItem">{{ rental.item.user.name }}</h2>
        <h3>{{ rental.item.title }}</h3>
      </div>
    </div>
    <form @submit.prevent="submit">
      <div id="textareaContainer">
        <label>Skriv en vurdering</label>
        <textarea
          placeholder="Skriv hva du synes om leieforholdet her"
          v-model="description"
        ></textarea>
        <BaseErrorMessage v-if="v$.description.$error">{{
          v$.$errors[2].$message
        }}</BaseErrorMessage>
      </div>
      <star-rating
        v-model:rating="rating"
        :increment="0.5"
        active-color="#FB8500"
      />
      <BaseButton @click="submit" text="Gi vurdering " />
    </form>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
import BaseButton from "@/components/baseTools/BaseButton";
import BaseErrorMessage from "@/components/baseTools/BaseErrorMessage";
import { doRating } from "@/service/apiService";
import useVuelidate from "@vuelidate/core";
import { helpers, required } from "@vuelidate/validators";
export default {
  name: "GiveRatingView",

  components: {
    StarRating,
    BaseButton,
    BaseErrorMessage,
  },
  methods: {
    async submit() {
      this.v$.$validate();
      console.log(this.v$);
      // eslint-disable-next-line no-empty
      if (!this.v$.$error) {
        const ratingRequest = {
          feedback: this.description,
          rate: this.rating,
          userId: this.$store.state.userInfo.userId,
          rentalId: this.rental.rentalId,
        };

        console.log(this.description);
        console.log(this.$store.state.userInfo.userId);

        let ratingResponse = await doRating(
          ratingRequest,
          this.$store.state.token
        );
        console.log(ratingResponse.status);
      }
    },
  },
  computed: {
    rental() {
      return this.$store.state.currentRental;
    },
    hasProfileImage() {
      return true;
    },
    isMyItem() {
      return this.rental.item.user.userId === this.$store.state.userInfo.userId;
    },
  },
  data() {
    return {
      rating: 0,
      description: "",
    };
  },
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  validations() {
    return {
      description: {
        required: helpers.withMessage("En vurdering er påkrevd", required),
      },
    };
  },
};
</script>

<style scoped>
#personContainer {
  display: flex;
}
h1 {
  font-weight: 500;
  font-size: 28px;
  margin-bottom: 30px;
  text-align: left;
}
#infoContainer {
  text-align: left;
  margin-left: 20px;
  margin-top: 10px;
}
.container {
  margin: 0 15px;
}
#textareaContainer {
  text-align: left;
  margin-top: 40px;
  margin-bottom: 30px;
}
textarea {
  height: 180px;
  border-radius: 15px;
}
label {
  margin-left: 10px;
  font-size: 16px;
  font-weight: 500;
}
button {
  margin: 40px 0;
}
.actualProfileImage {
  border-radius: 50%;
  width: 9rem;
  height: 9rem;
}
</style>
