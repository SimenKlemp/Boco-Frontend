import { createStore } from "vuex";
import {doRegisterItem, getFeedbacks, getItems} from "@/service/apiService";
import { getMyItems, getMyRentals } from "@/service/apiService";
import { updateItem, deleteItem } from "@/service/apiService";

const getDefaultState = () => {
  return {
    token: null,
    currentItem: "",
    userInfo: {},
    currentImageId: null,
    items: [],
    myItems: [],
    myRentals: [],
    feedbacks: [],
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
    SET_IMAGE_ID(state, currentImageId) {
      state.currentImageId = currentImageId;
    },
    SET_ITEMS(state, response) {
      state.items = response;
    },
    SET_ITEM(state, item) {
      state.currentItem = item;
    },
    SET_FEEDBACKS(state, feedbacks) {
      state.feedbacks = feedbacks;
    },
    SET_MY_ITEMS(state, items) {
      state.myItems = items;
    },
    SET_MY_RENTALS(state, rentals) {
      state.myRentals = rentals;
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
    setCurrentImageId({ commit }, currentImageId) {
      commit("SET_IMAGE_ID", currentImageId);
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
    getFeedbacks({ commit }) {
      getFeedbacks(this.state.token)
        .then((response) => {
          commit("SET_FEEDBACKS", response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async fetchMyItems({ commit }) {
      let items = await getMyItems(
        this.state.userInfo.userId,
        this.state.token
      );
      commit("SET_MY_ITEMS", items);
    },
    async fetchMyRentals({ commit }) {
      let rentals = await getMyRentals(
        this.state.userInfo.userId,
        this.state.token
      );
      commit("SET_MY_RENTALS", rentals);
    },
    async updateItem({ commit }, item) {
      await updateItem(item, state.currentItem.itemId, state.token);
      commit("SET_ITEM", item);
    },
    async deleteItem({ commit }) {
      await deleteItem(state.currentItem.itemId, state.token);
      commit("SET_ITEM", null);
    },
    async registerItem({ commit }, item) {
      await doRegisterItem(item, this.$store.state.token);
      commit("SET_ITEM", item);
    }
  },
  modules: {},
});
