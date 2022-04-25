import { createStore } from "vuex";

const getDefaultState = () => {
  return {
    token: null,
    userInfo: {},
  };
};
const state = getDefaultState();

export default createStore({
  state,
  getters: {},
  mutations: {
    RESET_STATE(state) {
      Object.assign(state, getDefaultState());
    },
    ADD_USER(state, userInfo) {
      state.userInfo = userInfo;
    },
    ADD_TOKEN(state, token) {
      state.token = token;
    },
  },
  actions: {
    resetState({ commit }) {
      commit("RESET_STATE");
    },
    storeUser({ commit }, userInfo) {
      commit("ADD_USER", userInfo);
    },
    storeToken({ commit }, token) {
      commit("ADD_TOKEN", token);
    },
  },
  modules: {},
});
