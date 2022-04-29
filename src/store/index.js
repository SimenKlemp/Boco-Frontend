import { createStore } from "vuex";
import {
  doNotification,
  doRegisterItem, doRentalRequest,
  getFeedbacks,
  getItems, getMyNotifications,
  getUsers,
  search,
} from "@/service/apiService";
import { getMyItems, getMyRentals } from "@/service/apiService";
import { updateItem, deleteItem } from "@/service/apiService";

const getDefaultState = () => {
  return {
    token: null,
    currentItem: "",
    currentRental: "",
    userInfo: {},
    currentImageId: null,
    items: [],
    myItems: [],
    myRentals: [],
    myNotifications: [],
    feedbacks: [],
    users: [],
    currentSearchSentence: "",
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
    SET_RENTAL(state, rental) {
      state.currentRental = rental;
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
    SET_MY_NOTIFICATIONS(state, notifications) {
      state.myRentals = notifications;
    },
    SET_USERS(state, users) {
      state.users = users;
    },
    SET_CURRENT_SEARCH_SENTENCE(state, searchSentence) {
      state.currentSearchSentence = searchSentence;
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
    getItems({ commit }, pageObject) {
      getItems(pageObject.page, pageObject.pageSize)
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
    async fetchMyNotifications({ commit }) {
      let notifications = await getMyNotifications(
          this.state.userInfo.userId,
          this.state.token
      );
      commit("SET_MY_NOTIFICATIONS", notifications);
    },
    async updateItem({ commit }, item) {
      let response = await updateItem(
        item,
        state.currentItem.itemId,
        this.state.token
      );
      commit("SET_ITEM", response);
    },
    async deleteItem({ commit }) {
      await deleteItem(state.currentItem.itemId, this.state.token);
      commit("SET_ITEM", null);
    },
    async registerItem({ commit }, item) {
      let response = await doRegisterItem(item, this.state.token);
      commit("SET_ITEM", response);
    },
    async registerRental({ commit }, rental) {
      let response = await doRentalRequest(rental, this.state.token);
      commit("SET_RENTAL", response);
    },
    async registerNotification({ commit }, notification) {
      let response = await doNotification(notification, this.state.token);
      commit("SET_RENTAL", response);
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
    setRental({ commit }, rental) {
      commit("SET_RENTAL", rental);
    },
    getCurrentSearchSentence({ commit }, searchSentence) {
      commit("SET_CURRENT_SEARCH_SENTENCE", searchSentence);
    },
}
  },
  modules: {},
});
