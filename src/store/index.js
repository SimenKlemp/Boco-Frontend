import { createStore } from "vuex";
import { getFeedbacks, getItems, getUsers, search } from "@/service/apiService";
import { getMyItems, getMyRentals } from "@/service/apiService";
import { updateItem } from "@/service/apiService";

const getDefaultState = () => {
  return {
    token: null,
    currentItem: null,
    userInfo: {},
    currentImageId: null,
    items: [],
    myItems: [],
    myRentals: [],
    feedbacks: [],
    users: [],
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
    SET_USERS(state, users) {
      state.users = users;
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
    updateItem(item) {
      updateItem(item, state.currentItem.itemId, state.token);
    },
    getUsers({ commit }) {
      getUsers(this.state.token)
          .then((response) => {
            commit("SET_USERS", response);
          })
          .catch((error) => {
            console.log(error);
          });
    },
    getSearchedItems({ commit }, searchRequest) {
      search(searchRequest)
          .then((response) => {
            commit("SET_ITEMS", response);
          })
          .catch((error) => {
            console.log(error);
          });
      },

  },
  modules: {},
});
