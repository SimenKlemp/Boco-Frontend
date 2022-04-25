<template>
  <div class="hamburgerContainer">
    <div class="profile">
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
            fill="#fff"
          />
        </svg>
        <p class="name">Navn Navnesen</p>
      </div>
    </div>
    <div class="hamburgerMeta">
      <div class="hamburgerActions">
        <div @click="emitRouteChange('HomeView')">Hjem</div>
        <div @click="emitRouteChange('MyProfile')">Min profil</div>
        <div @click="emitRouteChange('AddItemComponent')" id="routerLink">
          Lei ut
        </div>
        <div>Mine annonser</div>
        <div>Mine leieforhold</div>
      </div>
      <div class="hamburgerSupport">
        <div>FAQ</div>
        <div @click="emitRouteChange('AddFeedbackWebPageComponent')">Send tilbakemelding</div>
      </div>
      <div class="hamburgerLog">
        <div>Logg ut</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HamburgerMenu",
  methods: {
    emitRouteChange(to) {
      this.$router.push({ name: to });
      this.$emit("routeChange");
    },
  },
};
</script>

<style scoped>
.hamburgerContainer {
  position: absolute;
  width: 17.5rem;
  height: 100%;
  z-index: 100;
  background: white;
}
.profile {
  background: #126782;
  height: 6rem;
  color: white;
  padding-left: 1.2rem;
}
.profileContainer {
  position: absolute;
  display: flex;
  margin-top: 1.8rem;
}
.profileImage {
  height: 45px;
  width: 45px;
}
.name {
  padding: 0.8rem;
  font-size: 24px;
  font-weight: 500;
  margin-top: -5px;
}

.hamburgerMeta {
  text-align: left;
  margin: 1rem 1.2rem 0 1.2rem;
  font-size: 20px;
}
.hamburgerMeta div {
  margin-bottom: 1rem;
}
.hamburgerActions {
  border-bottom: solid black 1px;
}
.hamburgerSupport {
  border-bottom: solid black 1px;
}
.hamburgerLog {
}

#routerLink {
  margin-bottom: 1rem;
}
</style>
