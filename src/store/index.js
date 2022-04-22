import { createStore } from "vuex";

const getDefaultState = () => {
  return {
    userInfo: {},
  };
};
const state = getDefaultState();

export default createStore({
  state,
  getters: {},
  mutations: {
    ADD_USER(state, userInfo) {
      state.userInfo = userInfo;
    },
  },
  actions: {
    storeUser({ commit }, userInfo) {
      commit("ADD_USER", userInfo);
    },
  },
  modules: {},
});
