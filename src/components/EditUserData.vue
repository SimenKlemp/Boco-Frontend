<template>
  <div id="RegContainer">
    <form @submit.prevent="submit">
      <div class="addImageContainer">
        <img
          v-if="hasProfileImage && !previewImage"
          class="actualProfileImage"
          :src="
            'http://localhost:8085/api/image/' +
            this.$store.state.userInfo.imageId
          "
          alt=""
        />
        <img
          v-if="previewImage"
          class="preview my-3 actualProfileImage"
          :src="previewImage"
          alt=""
        />

        <img
          v-if="!previewImage && !hasProfileImage"
          id="nounprofile"
          :src="require('../assets/noun-profile-1995071.svg')"
          alt=""
        />
        <div>
          <input
            id="addImageButton"
            type="file"
            accept="image/*"
            ref="file"
            @change="selectImage"
          />
        </div>
      </div>

      <div class="editInfoContainer">
        <h2>Personalia</h2>
        <label>Fullt navn</label>
        <BaseInput
          id="name"
          class="mb-4"
          type="firstName"
          v-model="name"
          placeholder="Navn"
          :errorMessage="v$.$errors[1]"
        />
        <BaseErrorMessage v-if="v$.name.$error">{{
          v$.$errors[0].$message
        }}</BaseErrorMessage>
        <label>E-post</label>
        <BaseInput
          id="email"
          class="mb-4"
          type="email"
          v-model="email"
          placeholder="Epost"
          :errorMessage="v$.$errors[2]"
        />
        <BaseErrorMessage v-if="v$.email.$error">{{
          v$.$errors[1].$message
        }}</BaseErrorMessage>

        <div class="password">
          <label>Password</label>
          <BaseInput
            id="oldPassword"
            class="mb-4"
            type="password"
            v-model="oldPassword"
            placeholder="Gammelt passord"
            :errorMessage="v$.$errors[3]"
          />
          <BaseErrorMessage v-if="v$.oldPassword.$error">{{
            v$.$errors[2].$message
          }}</BaseErrorMessage>
          <BaseInput
            id="newPassword"
            class="mb-4"
            type="password"
            v-model="newPassword"
            placeholder="Nytt passord"
            :errorMessage="v$.$errors[4]"
          />
          <BaseErrorMessage v-if="v$.newPassword.$error">{{
            v$.$errors[3].$message
          }}</BaseErrorMessage>
          <BaseInput
            id="repeatNewPassword"
            class="mb-4"
            type="password"
            v-model="repeatNewPassword"
            placeholder="Gjenta nytt passord"
            :errorMessage="v$.$errors[5]"
          />
          <BaseErrorMessage v-if="v$.repeatNewPassword.$error">{{
            v$.$errors[4].$message
          }}</BaseErrorMessage>
        </div>

        <h2>Adresse</h2>
        <label>Gateadresse</label>
        <BaseInput
          id="address"
          class="mb-4"
          type="address"
          v-model="address"
          placeholder="Gateadresse"
        />
        <BaseErrorMessage v-if="v$.address.$error">{{
          v$.$errors[5].$message
        }}</BaseErrorMessage>
        <label>Postnummer</label>
        <BaseInput
          id="postalcode"
          class="mb-4"
          type="postalcode"
          v-model="postalcode"
          placeholder="Postkode"
        />
        <BaseErrorMessage v-if="v$.postalcode.$error">{{
          v$.$errors[6].$message
        }}</BaseErrorMessage>
        <label>Poststed</label>
        <BaseInput
          id="city"
          class="mb-4"
          type="city"
          v-model="city"
          placeholder="Poststed"
        />
        <BaseErrorMessage v-if="v$.city.$error">{{
          v$.$errors[7].$message
        }}</BaseErrorMessage>
      </div>
      <BaseButton
        @click="submit"
        text="Lagre endringer"
        id="registerButton"
        :disabled="isError"
      />
    </form>
  </div>
</template>

<script>
import BaseInput from "@/components/baseTools/BaseInput";
import BaseButton from "@/components/baseTools/BaseButton";
import BaseErrorMessage from "@/components/baseTools/BaseErrorMessage";
import useVuelidate from "@vuelidate/core";
import {
  email,
  required,
  helpers,
  sameAs,
  minLength,
} from "@vuelidate/validators";
import UploadService, { doEditUser, doLogin } from "@/service/apiService";
export default {
  name: "EditUserData",
  components: {
    BaseInput,
    BaseErrorMessage,
    BaseButton,
  },
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      name: this.$store.state.userInfo.name,
      email: this.$store.state.userInfo.email,
      password: "",
      oldPassword: "",
      newPassword: "",
      repeatNewPassword: "",
      address: this.$store.state.userInfo.streetAddress,
      postalcode: this.$store.state.userInfo.postalCode,
      city: this.$store.state.userInfo.postOffice,

      passwordPressed: false,

      currentImage: undefined,
      previewImage: undefined,

      progress: 0,
      message: "",
    };
  },
  validations() {
    return {
      name: {
        required: helpers.withMessage("Navn er påkrevd", required),
      },
      email: {
        required: helpers.withMessage("Email er påkrevd", required),
        email,
      },
      oldPassword: {
        required: helpers.withMessage(
          "Må skrive inn gammelt passord",
          required
        ),
      },
      newPassword: {
        required: helpers.withMessage(
          "Må skrive inn et nytt passord",
          required
        ),
        minLength: minLength(6),
      },
      repeatNewPassword: {
        required: helpers.withMessage(
          "Må skrive det nye passordet igjen",
          required
        ),
        sameAsPassword: sameAs(this.newPassword),
      },
      address: {
        required: helpers.withMessage("Adresse er påkrevd", required),
      },
      postalcode: {
        required: helpers.withMessage("Postkode er påkrevd", required),
      },
      city: {
        required: helpers.withMessage("By er påkrevd", required),
      },
    };
  },
  computed: {
    hasProfileImage() {
      return this.$store.state.userInfo.imageId !== -1;
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
        await doLogin(this.$store.state.userInfo.email, this.oldPassword).then(
          async (loginResponse) => {
            if (loginResponse.status === 200) {
              await UploadService.upload(
                this.currentImage,
                this.$store.state.token
              )
                .then((response) => {
                  this.$store.dispatch("setCurrentImageId", response.data);
                })
                .catch((err) => {
                  this.progress = 0;
                  this.message = "Could not upload the image! " + err;
                  this.currentImage = undefined;
                });
              const editUserRequest = {
                email: this.email,
                imageId: this.$store.state.currentImageId,
                isPerson: true,
                name: this.name,
                password: this.newPassword,
                postOffice: this.city,
                postalCode: this.postalcode,
                streetAddress: this.address,
              };

              let response = await doEditUser(
                editUserRequest,
                this.$store.state.userInfo.userId,
                this.$store.state.token
              );

              this.$store.dispatch("storeUser", response.data.userInfo);

              await this.$router.push({ name: "MyProfile" });
            }
          }
        );
      } else {
        alert("Alle felter må være riktig utfylt");
      }
    },
    selectImage() {
      this.currentImage = this.$refs.file.files.item(0);
      this.previewImage = URL.createObjectURL(this.currentImage);
    },
    editPassword() {
      this.passwordPressed = true;
    },
  },
};
</script>

<style scoped>
form {
  padding: 0 20px;
}
form > * {
  margin-bottom: 10px;
}
.editInfoContainer {
  padding: 20px;
}
#nounprofile {
  width: 9rem;
  height: 9rem;
}
#addImageButton {
  content: "Legg til bilde";
  display: inline-block;
  background: linear-gradient(top, #f9f9f9, #e3e3e3);
  border: 1px solid #999;
  border-radius: 3px;
  outline: none;
  white-space: nowrap;
  -webkit-user-select: none;
  cursor: pointer;
  text-shadow: 1px 1px #fff;
  font-weight: 700;
  font-size: 10pt;
  margin: 0 auto;
}
.actualProfileImage {
  border-radius: 50%;
  width: 9rem;
  height: 9rem;
}

h1 {
  color: black;
  font-weight: 500;
  font-size: 28px;
  margin-bottom: 15px;
}
h2 {
  color: black;
  font-weight: 400;
  font-size: 25px;
  text-align: left;
  margin-left: 15px;
  margin-bottom: 20px;
}
.mb-4 {
  margin-bottom: 20px;
}
label {
  float: left;
  margin-left: 15px;
  color: black;
  font-weight: 500;
  margin-bottom: 5px;
}
button {
  margin-top: 30px;
}
</style>
