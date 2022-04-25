<template>
  <div id="FeedbackWebPageContainer">
    <form @submit.prevent="submit">
      <h1>Lag en tilbakemelding:</h1>
      <textarea
        id="description"
        class="mb-4"
        type="description"
        v-model="description"
        placeholder="Beskrivelse av tilbakemelding..."
      ></textarea
      ><BaseErrorMessage v-if="v$.description.$error">{{
        v$.$errors[2].$message
      }}</BaseErrorMessage>

      <BaseButton v-on:click="submit" id="publish" text="Publiser" />
    </form>
  </div>
</template>

<script>
import BaseButton from "@/components/baseTools/BaseButton";
import BaseErrorMessage from "@/components/baseTools/BaseErrorMessage";
import useVuelidate from "@vuelidate/core";
import { helpers, required } from "@vuelidate/validators";
import {doRegisterFeedbackWebPage, doRegisterItem} from "@/service/apiService";

export default {
  name: "AddFeedbackWebPageComponent",
  components: {
    BaseButton,
    BaseErrorMessage,
  },
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      description: "",
    };
  },
  validations() {
    return {
      description: {
        required: helpers.withMessage(
            "En tilbakemelding er påkrevd",
            required
        ),
      },
    };
  },
  methods: {
    async submit() {
      this.v$.$validate();
      console.log(this.v$);
      // eslint-disable-next-line no-empty
      if (!this.v$.$error) {
        const feedbackRequest = {
          description: this.description,
          userId: this.$store.state.userInfo.userId,
        };

        let feedbackResponse = doRegisterFeedbackWebPage(
          feedbackRequest,
          this.$store.state.token
        );
        console.log(feedbackResponse.status);
      }
    },
    addPhotos() {
      alert("Legger til bilder");
    },
  },
};
</script>

<style scoped>
form {
  padding: 0px 30px 0px 30px;
}
form > * {
  margin-bottom: 10px;
  display: block;
}
/deep/ #title {
  font-size: x-large;
}
#description {
  font-size: medium;
  border-radius: 15px;
  width: 100%;
  height: 150px;
}

#info {
  text-align: left;
}
#info > * {
  padding-bottom: 10px;
}
/deep/ #postalcode {
  width: 87px;
}
</style>
