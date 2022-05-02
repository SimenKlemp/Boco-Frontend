<template>
  <div class="container">
    <h2>Sted</h2>
    <div id="streetAddressContainer">
      <label :for="address" class="h3">Gateadresse</label>
      <BaseInput
          id="address"
          class="mb-4"
          type="address"
          v-model="address"
          placeholder="Gateadresse"
      />
    </div>

    <div class="postalAddress">
      <div id="postalcodeContainer">
        <label :for="postalcode" class="h3">Postnummer</label>
        <BaseInput
            id="postalCode"
            class="mb-4"
            type="postalcode"
            v-model="postalcode"
            placeholder="Postnr"
        />

      </div>

      <div id="cityContainer">
        <label :for="city" class="h3">Poststed</label>
        <BaseInput
            id="city"
            class="mb-4"
            type="city"
            v-model="city"
            placeholder="Poststed"
        />
        <!--TODO: fix validation on address!!!-->

      </div>
    </div>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import BaseInput from "@/components/baseTools/BaseInput";
import BaseErrorMessage from "@/components/baseTools/BaseErrorMessage";

export default {
  name: "AddressComponent",
  components: {
    BaseInput,
    BaseErrorMessage,
  },
  props: {
    address: {
      type: String,
      required: true,
    },
    postalcode: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    }
  },
  setup() {
    return {
      v$: useVuelidate(),
    };
  }
}
</script>

<style scoped>
.container {
  text-align: left;
}
.postalAddress {
  display: flex;
  justify-content: space-between;
}
#postalcodeContainer {
  width: 110px;
  margin-right: 30px;
}
#cityContainer {
  width: 100%;
}
</style>