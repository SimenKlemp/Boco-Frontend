<template>
  <div class="container" @click="goToPage('EditUserData')">
    <div class="profileContainer">
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
        v-if="hasProfileImage"
        class="actualProfileImage"
        :src="
          'http://localhost:8085/api/image/' +
          this.$store.state.userInfo.imageId
        "
        alt=""
      />

      <h2 class="name">{{ user.name }}</h2>
      <div class="verified">
        <svg
          class="verifiedIcon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 14 14"
          x="0px"
          y="0px"
        >
          <path
            fill-rule="evenodd"
            d="M11.7949784,66.4659097 L10.8006356,66.9112789 C10.3681997,67.1049684 9.85919321,66.9685805 9.58153738,66.5846225 L8.94309593,65.7017501 C8.8596047,65.5862938 8.73082217,65.5119411 8.58908844,65.4973638 L7.50527776,65.3858935 C7.0339325,65.3374155 6.66131392,64.9647969 6.6128359,64.4934516 L6.5013656,63.4096409 C6.48678824,63.2679072 6.41243561,63.1391247 6.29697928,63.0556334 L5.41410685,62.417192 C5.03014889,62.1395362 4.89376102,61.6305297 5.08745045,61.1980937 L5.53281968,60.203751 C5.59106218,60.0737173 5.59106218,59.9250121 5.53281968,59.7949784 L5.08745045,58.8006356 C4.89376102,58.3681997 5.03014889,57.8591932 5.41410685,57.5815374 L6.29697928,56.9430959 C6.41243561,56.8596047 6.48678824,56.7308222 6.5013656,56.5890884 L6.6128359,55.5052778 C6.66131392,55.0339325 7.0339325,54.6613139 7.50527776,54.6128359 L8.58908844,54.5013656 C8.73082217,54.4867882 8.8596047,54.4124356 8.94309593,54.2969793 L9.58153738,53.4141068 C9.85919321,53.0301489 10.3681997,52.893761 10.8006356,53.0874505 L11.7949784,53.5328197 C11.9250121,53.5910622 12.0737173,53.5910622 12.203751,53.5328197 L13.1980937,53.0874505 C13.6305297,52.893761 14.1395362,53.0301489 14.417192,53.4141068 L15.0556334,54.2969793 C15.1391247,54.4124356 15.2679072,54.4867882 15.4096409,54.5013656 L16.4934516,54.6128359 C16.9647969,54.6613139 17.3374155,55.0339325 17.3858935,55.5052778 L17.4973638,56.5890884 C17.5119411,56.7308222 17.5862938,56.8596047 17.7017501,56.9430959 L18.5846225,57.5815374 C18.9685805,57.8591932 19.1049684,58.3681997 18.9112789,58.8006356 L18.4659097,59.7949784 C18.4076672,59.9250121 18.4076672,60.0737173 18.4659097,60.203751 L18.9112789,61.1980937 C19.1049684,61.6305297 18.9685805,62.1395362 18.5846225,62.417192 L17.7017501,63.0556334 C17.5862938,63.1391247 17.5119411,63.2679072 17.4973638,63.4096409 L17.3858935,64.4934516 C17.3374155,64.9647969 16.9647969,65.3374155 16.4934516,65.3858935 L15.4096409,65.4973638 C15.2679072,65.5119411 15.1391247,65.5862938 15.0556334,65.7017501 L14.417192,66.5846225 C14.1395362,66.9685805 13.6305297,67.1049684 13.1980937,66.9112789 L12.203751,66.4659097 C12.0737173,66.4076672 11.9250121,66.4076672 11.7949784,66.4659097 Z M9.29788981,59.0535316 L8.44936164,59.9020598 L11.2978898,62.7505879 L15.6705556,58.3779222 L14.8220274,57.529394 L11.2978898,61.0535316 L9.29788981,59.0535316 Z"
            transform="translate(-5 -53)"
          ></path>
        </svg>
        <p class="verifiedText">Verifisert</p>
      </div>
    </div>
    <div class="actions">
      <BaseCardHorizontal>
        <svg
          v-if="!hasProfileImage"
          class="sideIcon"
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
          v-if="hasProfileImage"
          class="actualProfileImage small"
          :src="
            'http://localhost:8085/api/image/' +
            this.$store.state.userInfo.imageId
          "
          alt=""
        />

        <div class="personalInfoContainer" >
          <div class="emailContainer">
            <svg
              class="icons"
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="16.995"
              viewBox="0 0 17 16.995"
            >
              <path
                id="noun-email-2770972"
                d="M43.479,34.478a8.576,8.576,0,0,0-7.627-7.952,8.5,8.5,0,1,0-1.7,16.917,6.965,6.965,0,0,0,.868.036,8.107,8.107,0,0,0,4.7-1.446.807.807,0,0,0-.9-1.337A6.867,6.867,0,0,1,30.177,30.1a6.858,6.858,0,0,1,11.711,4.446,7.181,7.181,0,0,1-.361,2.639,1.566,1.566,0,0,1-1.482,1.048,1.543,1.543,0,0,1-1.554-1.554v-5.1a.841.841,0,0,0-.831-.831.818.818,0,0,0-.831.831v.253a3.8,3.8,0,0,0-2.277-.723,3.886,3.886,0,1,0,2.53,6.832,3.2,3.2,0,0,0,5.964-.181A10.174,10.174,0,0,0,43.479,34.478Zm-8.928,2.783a2.277,2.277,0,1,1,2.277-2.277A2.291,2.291,0,0,1,34.551,37.262Z"
                transform="translate(-26.484 -26.484)"
                fill="#fb8500"
              />
            </svg>
            <div class="personalInfoText">{{ user.email }}</div>
          </div>
          <div class="addressContainer">
            <svg
              class="icons"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 96 96"
              enable-background="new 0 0 96 96"
              xml:space="preserve"
            >
              <path
                d="M48,9C31.86,9,18.73,22.131,18.73,38.271c0,14.13,23.756,41.948,28.518,47.381L48,86.512l0.752-0.857  c4.762-5.432,28.518-33.24,28.518-47.383C77.27,22.131,64.14,9,48,9z M48,48c-5.374,0-9.73-4.356-9.73-9.73s4.356-9.73,9.73-9.73  s9.73,4.356,9.73,9.73S53.374,48,48,48z"
              ></path>
            </svg>
            <div class="personalInfoTextAddress">
              {{ user.streetAddress }} {{ user.postalCode }}
              {{ user.postOffice }}
            </div>
          </div>
        </div>
        <svg
          class="sideIconRight"
          xmlns="http://www.w3.org/2000/svg"
          width="20.065"
          height="19.599"
          viewBox="0 0 20.065 19.599"
        >
          <path
            id="np_edit_4779758_000000"
            d="M3.727,5.776H14.9L13.158,7.514H3.727a.009.009,0,0,0-.009.009V20.951a.009.009,0,0,0,.009.009H17.155a.009.009,0,0,0,.009-.009v-8.5L18.9,10.718V20.951A1.752,1.752,0,0,1,17.155,22.7H3.727A1.752,1.752,0,0,1,1.98,20.951V7.523A1.752,1.752,0,0,1,3.727,5.776Zm7.11,8.531A4,4,0,0,0,8.892,13.2l-.067.067-.631,3.685,3.685-.631.067-.067a4,4,0,0,0-1.109-1.945Zm8.579-11.1a.38.38,0,0,0-.536,0L17.628,4.462l3.054,3.054,1.253-1.253a.38.38,0,0,0,0-.536Zm.557,5.017L16.919,5.173,9.7,12.392a5.376,5.376,0,0,1,3.055,3.055Z"
            transform="translate(-1.98 -3.099)"
            fill="#034363"
            fill-rule="evenodd"
          />
        </svg>
      </BaseCardHorizontal>
      <BaseCardHorizontal>
        <svg
          class="sideIcon extraPadding"
          xmlns="http://www.w3.org/2000/svg"
          width="40.577"
          height="40.577"
          viewBox="0 0 40.577 40.577"
        >
          <g id="noun-news-1366052" transform="translate(-8.07 -8.07)">
            <path
              id="Path_18"
              data-name="Path 18"
              d="M48.647,13.876A5.806,5.806,0,0,0,42.84,8.07H13.876A5.806,5.806,0,0,0,8.07,13.876V42.84a5.806,5.806,0,0,0,5.806,5.806H42.84a5.806,5.806,0,0,0,5.806-5.806Zm-2.9,28.964a2.9,2.9,0,0,1-2.9,2.9H13.876a2.9,2.9,0,0,1-2.9-2.9V13.876a2.9,2.9,0,0,1,2.9-2.9H42.84a2.9,2.9,0,0,1,2.9,2.9Z"
            />
            <path
              id="Path_19"
              data-name="Path 19"
              d="M20.922,36.79H34.242a1.452,1.452,0,0,0,1.452-1.452V24.452A1.452,1.452,0,0,0,34.242,23H20.922a1.452,1.452,0,0,0-1.452,1.452V35.339A1.452,1.452,0,0,0,20.922,36.79ZM22.373,25.9H32.791v7.984H22.373Z"
              transform="translate(-5.884 -7.706)"
            />
            <path
              id="Path_20"
              data-name="Path 20"
              d="M67.723,23H59.982a1.452,1.452,0,0,0,0,2.9h7.742a1.452,1.452,0,0,0,0-2.9Z"
              transform="translate(-26.044 -7.706)"
            />
            <path
              id="Path_21"
              data-name="Path 21"
              d="M67.723,35H59.982a1.452,1.452,0,0,0,0,2.9h7.742a1.452,1.452,0,0,0,0-2.9Z"
              transform="translate(-26.044 -13.9)"
            />
            <path
              id="Path_22"
              data-name="Path 22"
              d="M67.723,47H59.982a1.452,1.452,0,0,0,0,2.9h7.742a1.452,1.452,0,0,0,0-2.9Z"
              transform="translate(-26.044 -20.093)"
            />
            <path
              id="Path_23"
              data-name="Path 23"
              d="M47.594,59H20.982a1.452,1.452,0,0,0,0,2.9H47.594a1.452,1.452,0,1,0,0-2.9Z"
              transform="translate(-5.915 -26.287)"
            />
            <path
              id="Path_24"
              data-name="Path 24"
              d="M47.594,71H20.982a1.452,1.452,0,1,0,0,2.9H47.594a1.452,1.452,0,1,0,0-2.9Z"
              transform="translate(-5.915 -32.481)"
            />
          </g>
        </svg>
        <div
          @click="goToPage('MyAds')"
          class="actionInfoText"
          id="extraPadding"
        >
          Mine annonser
        </div>
        <svg
          class="sideIconRight"
          xmlns="http://www.w3.org/2000/svg"
          width="11.676"
          height="20"
          viewBox="0 0 11.676 20"
        >
          <path
            id="Path_8"
            data-name="Path 8"
            d="M32.219,986.143l-1,.956-9,8.639,2,2.081,8-7.683,8,7.683,2-2.081-9-8.639Z"
            transform="translate(997.819 -22.219) rotate(90)"
          />
        </svg>
      </BaseCardHorizontal>
      <BaseCardHorizontal>
        <svg
          class="sideIcon extraPadding"
          xmlns="http://www.w3.org/2000/svg"
          width="35.768"
          height="40.046"
          viewBox="0 0 35.768 40.046"
        >
          <g
            id="Group_53"
            data-name="Group 53"
            transform="translate(-44 -515.5)"
          >
            <path
              id="Path_11"
              data-name="Path 11"
              d="M36.377,23.793V6.279A4.279,4.279,0,0,0,32.1,2H9.279A4.279,4.279,0,0,0,5,6.279v27.1a4.279,4.279,0,0,0,4.279,4.279H22.514A9.984,9.984,0,1,0,36.377,23.793ZM9.279,34.8a1.426,1.426,0,0,1-1.426-1.426V6.279A1.426,1.426,0,0,1,9.279,4.852H32.1a1.426,1.426,0,0,1,1.426,1.426v16.1H33.41A9.984,9.984,0,0,0,21.074,34.718v.114Zm21.393,4.279A7.131,7.131,0,0,1,24.5,35.5a6.931,6.931,0,0,1-.956-3.551,7.131,7.131,0,0,1,7.131-7.131,6.9,6.9,0,0,1,3.566.97,7.131,7.131,0,0,1-3.566,13.292Z"
              transform="translate(39 513.5)"
            />
            <path
              id="Path_12"
              data-name="Path 12"
              d="M25.926,20.609,23.3,24.531l-.713-1.07a1.426,1.426,0,0,0-2.368,1.569l1.9,2.852a1.426,1.426,0,0,0,2.382,0l3.794-5.7a1.426,1.426,0,0,0-2.368-1.569Z"
              transform="translate(45.415 521.205)"
            />
            <path
              id="Path_13"
              data-name="Path 13"
              d="M10.426,8.852h11.41a1.426,1.426,0,0,0,0-2.852H10.426a1.426,1.426,0,0,0,0,2.852Z"
              transform="translate(40.705 515.205)"
            />
            <path
              id="Path_14"
              data-name="Path 14"
              d="M10.426,12.852h11.41a1.426,1.426,0,0,0,0-2.852H10.426a1.426,1.426,0,0,0,0,2.852Z"
              transform="translate(40.705 516.91)"
            />
            <path
              id="Path_15"
              data-name="Path 15"
              d="M21.836,14H10.426a1.426,1.426,0,0,0,0,2.852h11.41a1.426,1.426,0,0,0,0-2.852Z"
              transform="translate(40.705 518.615)"
            />
          </g>
        </svg>
        <div @click="goToPage('MyRentals')" class="actionInfoText">
          Mine leieforhold
        </div>
        <svg
          class="sideIconRight"
          xmlns="http://www.w3.org/2000/svg"
          width="11.676"
          height="20"
          viewBox="0 0 11.676 20"
        >
          <path
            id="Path_8"
            data-name="Path 8"
            d="M32.219,986.143l-1,.956-9,8.639,2,2.081,8-7.683,8,7.683,2-2.081-9-8.639Z"
            transform="translate(997.819 -22.219) rotate(90)"
          />
        </svg>
      </BaseCardHorizontal>
    </div>
  </div>
</template>

<script>
import BaseCardHorizontal from "@/components/baseTools/BaseCardHorizontal";
export default {
  name: "MyProfile",
  components: {
    BaseCardHorizontal,
  },
  computed: {
    user() {
      return this.$store.state.userInfo;
    },
    hasProfileImage() {
      return this.$store.state.userInfo.imageId !== -1;
    },
  },
  methods: {
    goToPage(to) {
      this.$router.push({ name: to });
    },
  },
};
</script>

<style scoped>
.container {
  margin: 2rem 0;
}
.profileContainer {
  margin-bottom: 3rem;
}
.image {
  width: 130px;
  height: 130px;
  margin-bottom: 2rem;
}
.name {
  font-size: 28px;
  font-weight: 500;
  color: black;
  margin-bottom: 0.5rem;
}
.verified {
  display: flex;
  align-items: center;
  justify-content: center;
}
.verifiedIcon {
  width: 1.5rem;
  fill: #8ecae6;
  margin-right: 0.5rem;
}
.verifiedText {
  font-size: 22px;
}
.actions {
  background: #e5ecf1;
  padding: 1rem;
}

.personalInfoContainer {
  padding-top: 1rem;
}
.emailContainer {
  display: flex;
  margin: 0.5rem 0;
}
.icons {
  height: 1rem;
  width: 1rem;
  margin-right: 0.5rem;
  fill: #fb8500;
}
.addressContainer {
  display: flex;
  margin: 0.5rem 0;
}
.personalInfoText {
  margin-top: -0.3rem;
}
.personalInfoTextAddress {
  margin-top: -0.2rem;
}

.sideIcon {
  width: 50px;
  height: 50px;
  padding: 1rem 1.5rem;
}
.sideIconRight {
  height: 1.5rem;
  width: 1.5rem;
  padding: 32px 20px;
  fill: black;
}
.extraPadding {
  padding: 1.3rem 1.5rem 1rem 1.5rem;
}
.actionInfoText {
  padding: 2rem 6.2rem 2rem 0;
}
.actualProfileImage {
  border-radius: 50%;
  width: 9rem;
  height: 9rem;
}
.small {
  width: 4rem;
  height: 4rem;
  margin: 10px 0 0 1.25rem;
}

#extraPadding {
  padding-right: 6.9rem;
}
</style>
