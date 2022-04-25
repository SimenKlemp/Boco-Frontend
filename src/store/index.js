import { createStore } from "vuex";
import { getItems } from "@/service/apiService";

const getDefaultState = () => {
  return {
    token: null,
    currentItem: null,
    userInfo: {},
    items: [],
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
    SET_ITEMS(state, response) {
      state.items = response;
    },
    SET_ITEM(state, item) {
      state.currentItem = item;
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
    getItems({ commit }) {
      getItems(this.state.token)
        .then((response) => {
          commit("SET_ITEMS", response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    setItem({ commit }, item) {
      commit("SET_ITEM", item);
    },
  },
  modules: {},
});
