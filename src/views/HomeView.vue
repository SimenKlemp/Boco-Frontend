<template>
  <header>
    <nav>
      <div class="header">
        <button @click="emitToggleHamburgerMenu" class="hamburgerButton">
          <svg
            class="hamburgerMenu"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 32 32"
            x="0px"
            y="0px"
          >
            <title>menu</title>
            <path
              d="M1.158 3.441c-0.005 0-0.010 0-0.016 0-0.631 0-1.142 0.511-1.142 1.142s0.511 1.142 1.142 1.142c0.006 0 0.011 0 0.017 0h29.683c0.005 0 0.010 0 0.016 0 0.631 0 1.142-0.511 1.142-1.142s-0.511-1.142-1.142-1.142c-0.006 0-0.011 0-0.017 0zM1.158 14.858c-0.005 0-0.010 0-0.016 0-0.631 0-1.142 0.511-1.142 1.142s0.511 1.142 1.142 1.142c0.006 0 0.011 0 0.017 0h29.683c0.005 0 0.010 0 0.016 0 0.631 0 1.142-0.511 1.142-1.142s-0.511-1.142-1.142-1.142c-0.006 0-0.011 0-0.017 0zM1.158 26.275c-0.005 0-0.010 0-0.016 0-0.631 0-1.142 0.511-1.142 1.142s0.511 1.142 1.142 1.142c0.006 0 0.011 0 0.017 0h29.683c0.005 0 0.010 0 0.016 0 0.631 0 1.142-0.511 1.142-1.142s-0.511-1.142-1.142-1.142c-0.006 0-0.011 0-0.017 0z"
            ></path>
          </svg>
        </button>
        <button class="homeLink">
          <img
            class="logoImage"
            :src="require('../assets/bocologo_white.png')"
            alt="boco"
          />
        </button>
        <button @click="emitToggleNotifications" class="hamburgerButton">
          <!--TODO: fix emit-->
          <div class="dot" v-if="showNotification"></div>
          <svg
            class="notificationIcon"
            xmlns="http://www.w3.org/2000/svg"
            width="30.582"
            height="35.507"
            viewBox="0 0 30.582 35.507"
          >
            <g transform="translate(-12.2 -1.9)">
              <g transform="translate(12.2 1.9)">
                <g transform="translate(9.785 30.947)">
                  <path
                    d="M40.878,85.8a2.467,2.467,0,0,0-.178.935c0,1.988,2.487,3.625,5.506,3.625s5.506-1.637,5.506-3.625a2.619,2.619,0,0,0-.178-.935Z"
                    transform="translate(-40.7 -85.8)"
                  />
                </g>
                <path
                  d="M42.783,26.723a1.242,1.242,0,0,0-.364-.708c-.04-.034-3.277-2.968-3.277-10.725,0-6.037-4.854-8.566-8.859-9.342V4.193A2.581,2.581,0,0,0,27.532,1.9,2.622,2.622,0,0,0,24.74,4.193V5.981c-4,.776-8.859,3.271-8.859,9.342,0,7.757-3.236,10.691-3.277,10.691a1.1,1.1,0,0,0-.4.708h0v2.125H42.783V26.723Z"
                  transform="translate(-12.2 -1.9)"
                />
              </g>
            </g>
          </svg>
        </button>
      </div>
    </nav>
  </header>
  <HomeComponent></HomeComponent>
  <div class="itemsContainer">
    <div class="itemsHeader">
      <h3>Nyeste annonser</h3>
      <p>Se de nyeste annonsene på boco</p>
    </div>
    <div class="items">
      <ItemCardSquare
        v-for="item in items.slice(0, 4)"
        :key="item.itemId"
        :item="item"
        @click="seeItem(item)"
      ></ItemCardSquare>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeComponent from "@/components/HomeComponent.vue";
import ItemCardSquare from "@/components/itemCards/ItemCardSquare";

export default {
  name: "HomeView",
  components: {
    HomeComponent,
    ItemCardSquare,
  },
  computed: {
    items() {
      return this.$store.state.items;
    },
    showNotification() {
      let notifications = this.$store.state.myNotifications;
      for (let i = 0; i < notifications.length; i++) {
        console.log("LESER");
        console.log(i.pressed);
        if (notifications[i].pressed === false) {
          console.log("ULEST");
          return true;
        }
      }
      console.log("LEST");
      return false;
    },
  },
  methods: {
    emitToggleHamburgerMenu() {
      this.$emit("toggleHamburgerMenu");
    },
    emitToggleNotifications() {
      this.$emit("toggleNotifications");
    },
    async seeItem(item) {
      await this.$store.dispatch("setItem", item);
      await this.$router.push({ name: "ProductDetails" });
    },
  },
  async created() {   
    this.$store.dispatch("getItems", {
      page: 0,
      pageSize: 4,
    });
  },
  mounted() {
    if (this.$store.state.userInfo !== "") {
      this.$store.dispatch("fetchMyNotifications");
    }
  },
};
</script>
<style scoped>
h3 {
  font-size: 22px;
  margin-bottom: 5px;
  font-weight: 500;
}
p {
  margin-top: 0;
  color: #575757;
  font-size: 14px;
  margin-bottom: 15px;
}

.header {
  position: absolute;
  display: flex;
  width: 87%;
  justify-content: space-between;
  padding: 1rem 20px 1rem 20px;
}
.hamburgerMenu {
  fill: white;
  width: 2.5rem;
}
.hamburgerButton {
  width: 2.5rem;
  padding: 0;
  background: none;
  border: none;
  position: relative;
}
.homeLink {
  font-size: 40px;
  background: transparent;
  border: none;
}
.notificationIcon {
  fill: white;
  width: 2.5rem;
}
.logoImage {
  width: 8rem;
}

.itemsHeader {
  text-align: left;
}
.itemsContainer {
  margin: 10px;
}
.items {
  display: flex;
  flex-wrap: wrap;
}
.dot {
  height: 15px;
  width: 15px;
  background-color: #ea0000;
  border-radius: 50%;
  display: inline-block;
  position: absolute;
}
</style>
