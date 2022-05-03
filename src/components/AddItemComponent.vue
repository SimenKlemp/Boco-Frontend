<template>
  <div id="RegContainer">
    <form @submit.prevent="submit">
      <h1 v-if="newAd === true">Opprett annonse:</h1>
      <h1 v-else>Rediger annonse:</h1>
      <!--TODO: fix validation on add item form (crashes)-->

      <BaseInput
          id="title"
          class="mb-4"
          type="title"
          v-model="title"
          placeholder="Tittel på annonse"
      />
      <BaseErrorMessage v-if="v$.title.$error">{{
          v$.$errors[0].$message
        }}
      </BaseErrorMessage>
      <h2>Kategori</h2>
      <BaseInput
          id="category"
          class="mb-4"
          type="category"
          v-model="category"
          placeholder="Kategori"
      />
      <BaseErrorMessage v-if="v$.category.$error">{{
          v$.$errors[1].$message
        }}
      </BaseErrorMessage>
      <textarea
          id="description"
          class="mb-4"
          type="description"
          v-model="description"
          placeholder="Beskrivelse av produkt/gjenstand..."
      ></textarea
      >
      <BaseErrorMessage v-if="v$.description.$error">{{
          v$.$errors[2].$message
        }}
      </BaseErrorMessage>
      <div class="images">
        <input type="file" accept="image/*" ref="file" @change="selectImage"/>
        <img
            v-if="previewImage"
            class="actualProfileImage"
            :src="previewImage"
            alt=""
        />
      </div>
      <div id="info">
        <AddressComponent
          v-model:address="address"
          v-model:postalcode="postalcode"
          v-model:city="city"
        />
        <div id="deliverContainer">
          <h2 id="deliverTitle">Leveringsalternativer</h2>
          <div class="checkboxContainer">
            <BaseCheckbox v-model="isPickupable" label="Kan hentes"/>
          </div>

          <div>
            <BaseCheckbox v-model="isDeliverable" label="Kan leveres"/>
          </div>
        </div>

        <h2>Pris</h2>

        <label :for="price" class="h3">Pris per dag</label>
        <BaseInput
            id="price"
            class="mb-4"
            type="price"
            v-model="price"
            placeholder="Pris per dag"
        />
        <BaseErrorMessage v-if="v$.price.$error">{{
            v$.$errors[6].$message
          }}
        </BaseErrorMessage>
        <div id="priceInfo">
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
            Hvis du ønsker å låne ut gjenstanden din gratis, sett pris til 0,-
          </p>
        </div>
      </div>

      <BaseButton
          v-if="newAd === true"
          @click.prevent="submit"
          id="publish"
          text="Publiser"
          :disabled="isError"
      />
      <div v-else>
        <BaseButton
            @click="saveItem"
            id="save"
            text="Lagre endringer"
            :disabled="isError"
        />
        <BaseButton
            @click="deleteItem"
            id="delete"
            text="Slett annonse"
            :disabled="isError"
        />
      </div>
    </form>
  </div>
</template>

<script>
import BaseInput from "./baseTools/BaseInput.vue";
import BaseButton from "@/components/baseTools/BaseButton";
import BaseErrorMessage from "@/components/baseTools/BaseErrorMessage";
import useVuelidate from "@vuelidate/core";
import {helpers, required} from "@vuelidate/validators";
import BaseCheckbox from "@/components/baseTools/BaseCheckbox";
import UploadService from "@/service/apiService";
import AddressComponent from "@/components/AddressComponent";

export default {
  name: "AddItemComponent",
  components: {
    AddressComponent,
    BaseCheckbox,
    BaseButton,
    BaseInput,
    BaseErrorMessage,
  },
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      title: this.$store.state.currentItem.title,
      category: this.$store.state.currentItem.category,
      description: this.$store.state.currentItem.description,
      address: this.$store.getters.GET_ADDRESS,
      postalcode: this.$store.getters.GET_POSTALCODE,
      city: this.$store.getters.GET_CITY,
      price: this.$store.state.currentItem.price,
      message: "",
      dates: null,
      currentImage: undefined,
      previewImage: undefined,
      currentImageId: undefined,
      isDeliverable: this.$store.state.currentItem.isDeliverable,
      isPickupable: this.$store.state.currentItem.isPickupable,
    };
  },
  validations() {
    return {
      title: {
        required: helpers.withMessage("Tittel er påkrevd", required),
      },
      category: {
        required: helpers.withMessage("Kategori er påkrevd", required),
      },
      description: {
        required: helpers.withMessage(
            "En beskrivelse av produktet er påkrevd",
            required
        ),
      },
      address: {
        required: helpers.withMessage("Addresse er påkrevd", required),
      },
      postalcode: {
        required: helpers.withMessage("Postkode er påkrevd", required),
      },
      city: {
        required: helpers.withMessage("Poststed er påkrevd", required),
      },
      price: {
        required: helpers.withMessage("Pris er påkrevd", required),
      },
    };
  },
  methods: {
    async submit() {
      this.v$.$validate();
      console.log(this.v$);
      // eslint-disable-next-line no-empty
      if (!this.v$.$error) {
        if (this.currentImage !== undefined) {
          await UploadService.upload(this.currentImage, this.$store.state.token)
              .then((response) => {
                this.$store.dispatch("setCurrentImageId", response.data);
              })
              .catch((err) => {
                this.progress = 0;
                this.message = "Could not upload the image! " + err;
                this.currentImage = undefined;
              });
        }

        const itemRequest = {
          category: this.category,
          description: this.description,
          imageId: this.$store.state.currentImageId,
          isDeliverable: this.isDeliverable,
          isPickupable: this.isPickupable,
          postOffice: this.city,
          postalCode: this.postalcode,
          price: parseFloat(this.price),
          streetAddress: this.address,
          title: this.title,
          userId: this.$store.state.userInfo.userId,
        };
        await this.$store.dispatch("registerItem", itemRequest);
        await this.$router.push({name: "ProductDetails"});
        this.$emit("routeChange");
      }
    },
    async saveItem() {
      if (this.currentImage !== undefined) {
        await UploadService.upload(this.currentImage, this.$store.state.token)
            .then((response) => {
              this.$store.dispatch("setCurrentImageId", response.data);
            })
            .catch((err) => {
              this.progress = 0;
              this.message = "Could not upload the image! " + err;
              this.currentImage = undefined;
            });
      }

      if (!this.v$.$error) {
        const itemUpdated = {
          category: this.category,
          description: this.description,
          imageId: this.$store.state.currentImageId,
          isPickupable: this.isPickupable,
          isDeliverable: this.isDeliverable,
          postOffice: this.city,
          postalCode: this.postalcode,
          price: parseFloat(this.price),
          streetAddress: this.address,
          title: this.title,
          userId: this.$store.state.userInfo.userId,
        };
        await this.$store.dispatch("updateItem", itemUpdated);
        await this.$router.push({name: "ProductDetails"});
        this.$emit("routeChange");
      }
    },
    async deleteItem() {
      await this.$store.dispatch("deleteItem");
      await this.$router.push({name: "MyAds"});
    },
    selectImage() {
      this.currentImage = this.$refs.file.files.item(0);
      this.previewImage = URL.createObjectURL(this.currentImage);
    }
  },
  computed: {
    newAd() {
      return this.$store.state.currentItem === "";
    },
    isError() {
      if (this.v$.$error) {
        return true;
      } else {
        return false;
      }
    }
  },
};
</script>

<style scoped>
form {
  padding: 0px 40px 0px 30px;
}

.actualProfileImage {
  width: 9rem;
  height: 9rem;
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


.checkboxContainer {
  margin-bottom: 10px;
}
#priceInfo {
  display: flex;
  font-size: 14px;
  color: #707070;
  margin-bottom: 30px;
  width: 100%;
}
#priceInfo svg {
  margin-right: 10px;
}
</style>
