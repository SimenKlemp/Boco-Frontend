<template>
  <div @click="toggleDropdown" class="customerContainer">
    <div class="profileContainer">
      <svg
         class="profileImage"
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
      <div class="profileInfo">
        <h3 class="name">{{ rental.user.name }}</h3>
        <div class="verifiedContainer">
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
          <div class="verifiedText">Verifisert</div>
        </div>
      </div>
    </div>
    <div class="metaContainer">
      <div class="left">
        <div class="statusContainer">
          <svg
            v-if="status === 'Aktiv'"
            class="statusIcon"
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
          >
            <g id="noun-timer-2095142" transform="translate(-12.47 -12.47)">
              <path
                id="Path_45"
                data-name="Path 45"
                d="M23.47,33.47a10,10,0,1,1,10-10,10,10,0,0,1-10,10Zm0-19.855a9.855,9.855,0,1,0,9.855,9.855A9.855,9.855,0,0,0,23.47,13.615Z"
                transform="translate(0)"
                fill="#034363"
                stroke="#034363"
                stroke-width="2"
              />
              <path
                id="Path_46"
                data-name="Path 46"
                d="M27.539,27.537h0V19.07a8.525,8.525,0,0,0-2.19.287,8.492,8.492,0,0,0-5.99,5.99,8.508,8.508,0,0,0,0,4.38,8.492,8.492,0,0,0,5.99,5.99,8.508,8.508,0,0,0,4.38,0,8.511,8.511,0,0,0,5.141-3.947Z"
                transform="translate(-4.069 -4.067)"
                fill="#034363"
              />
            </g>
          </svg>
          <svg
            v-if="status === 'Avventer'"
            class="statusIcon"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <g id="_05" data-name="05" transform="translate(-2 -2)">
              <path
                id="Path_43"
                data-name="Path 43"
                d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
                fill="#fd9e02"
              />
              <path
                id="Path_44"
                data-name="Path 44"
                d="M12,6a1,1,0,0,0-1,1v4.59l-2.71,2.7A1,1,0,1,0,9.7,15.7l3-3A1,1,0,0,0,13,12V7A1,1,0,0,0,12,6Z"
                fill="#fd9e02"
              />
            </g>
          </svg>
          <svg
            v-if="status === 'Akseptert'"
            class="statusIcon"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20.004"
            viewBox="0 0 20 20.004"
          >
            <g id="noun-checkmark-2573373" transform="translate(-1.002 -0.999)">
              <path
                id="Path_42"
                data-name="Path 42"
                d="M18.072,18.076a10,10,0,1,0-14.14,0A10,10,0,0,0,18.072,18.076ZM6.183,11.212a.63.63,0,0,1,.888,0l2.038,2.032L14.934,7.43a.636.636,0,0,1,.888.006.623.623,0,0,1,0,.881L9.546,14.569a.6.6,0,0,1-.438.181.614.614,0,0,1-.444-.181L6.183,12.1A.63.63,0,0,1,6.183,11.212Z"
                fill="#37b43f"
              />
            </g>
          </svg>
          <div class="status">{{ status }}</div>
        </div>
        <div class="pickupContainer">
          <svg
            class="positionMarker"
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
          <div class="pickupOption">Henter hos deg</div>
        </div>
      </div>
      <div class="right">
        <div class="dateContainer" id="fromDate">
          <div class="dateText">Fra dato:</div>
          <div class="date">{{ rental.startDate.slice(0, 10) }}</div>
        </div>
        <div class="dateContainer">
          <div class="dateText">Til dato:</div>
          <div class="date">{{ rental.endDate.slice(0, 10) }}</div>
        </div>
      </div>
    </div>
    <div v-if="dropDownClicked && !isActive" class="dropDown">
      <div class="dropDownText">{{ rental.message }}</div>
      <div class="buttons">
        <div
          @click="emitRentalAction('Accept')"
          id="acceptButton"
          class="button"
        >
          BEKREFT
        </div>
        <div @click="emitRentalAction('Reject')" class="button">AVVIS</div>
      </div>
    </div>
    <div v-if="dropDownClicked && isActive" class="alternateDropDown">
      <div class="button" id="cancelButton">Kanseller</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomerCard",
  data() {
    return {
      dropDownClicked: false,
    };
  },
  props: {
    rental: {
      type: Object,
      required: true,
    },
  },
  methods: {
    toggleDropdown() {
      this.dropDownClicked = !this.dropDownClicked;
      this.$emit("cardUpdate");
    },
    emitRentalAction(type) {
      this.$emit("rentalAction", this.rental, type);
    },
  },
  computed: {
    isActive() {
      return this.rental.status === "ACTIVE";
    },
    status() {
      switch (this.rental.status) {
        case "ACCEPTED":
          return "Akseptert";
        case "ACTIVE":
          return "Aktiv";
        case "PENDING":
          return "Avventer";
        case "REJECTED":
          return "Avvist";
        default:
          return "Default";
      }
    },
  },
};
</script>

<style scoped>
.customerContainer {
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 3px 6px #00000029;
  padding: 1rem;
  margin-bottom: 2rem;
}
.profileContainer {
  display: flex;
  margin-bottom: 1.5rem;
}
.profileInfo {
  margin-left: 1rem;
  padding-top: 0.2rem;
}

.metaContainer {
  display: flex;
  justify-content: space-between;
}
.verifiedContainer {
  display: flex;
}
.verifiedIcon {
  width: 1.1rem;
  height: 1.1rem;
  fill: #8ecae6;
  margin-right: 0.5rem;
}
.pickupContainer {
  display: flex;
}
.statusContainer {
  display: flex;
  margin-bottom: 0.5rem;
}
.statusIcon {
  margin-right: 0.455rem;
}
.positionMarker {
  height: 1.3rem;
  width: 1.3rem;
  fill: #fb8500;
  margin-right: 0.5rem;
}

.dateContainer {
  display: flex;
  justify-content: space-between;
}
.date {
  margin-left: 1rem;
}

.dropDown {
  margin: 1.5rem 0 1rem 0;
}
.dropDownText {
  margin-bottom: 2rem;
}
.buttons {
  display: flex;
  justify-content: space-evenly;
  padding: 0 0.5rem;
}
.button {
  border-radius: 10px;
  background: #e21313;
  width: 7.5rem;
  text-align: center;
  color: white;
  padding: 0.7rem 1rem;
}

.alternateDropDown {
  margin: 2rem 0 1rem 0;
}

#acceptButton {
  background: #37b43f;
}
#fromDate {
  margin-bottom: 0.5rem;
}
#cancelButton {
  margin: 0 auto;
}
</style>
