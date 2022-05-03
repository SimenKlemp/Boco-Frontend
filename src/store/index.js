import { createStore } from "vuex";
import {
  doRegisterItem,
  getAllRatings,
  doRentalRequest,
  getFeedbacks,
  getItems,
  getMyNotifications,
  getUsers,
  search, getMeanRating,
} from "@/service/apiService";
import { getMyItems, getMyRentals } from "@/service/apiService";
import { updateItem, deleteItem } from "@/service/apiService";

const getDefaultState = () => {
  return {
    token: null,
    currentItem: "",
    currentRental: "",
    userInfo: "",
    currentImageId: null,
    items: [],
    myItems: [],
    myRentals: [],
    myNotifications: [],
    feedbacks: [],
    users: [],
    currentSearchSentence: "",
    currentRatings: [],
    meanRating: null,
  };
};
const state = getDefaultState();

export default createStore({
  state,
  getters: {
    GET_ADDRESS() {
      if (state.currentItem === "") {
        return state.userInfo.streetAddress;
      }
      return state.currentItem.streetAddress;
    },
    GET_POSTALCODE() {
      if (state.currentItem === "") {
        return state.userInfo.postalCode;
      }
      return state.currentItem.postalCode;
    },
    GET_CITY() {
      if (state.currentItem === "") {
        return state.userInfo.postOffice;
      }
      return state.currentItem.postOffice;
    },
    GET_PRICE() {
      if (state.currentItem.price === 0) {
        return true;
      }
      return false;
    },
  },
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
      state.myNotifications = notifications;
    },
    SET_USERS(state, users) {
      state.users = users;
    },
    SET_CURRENT_SEARCH_SENTENCE(state, searchSentence) {
      state.currentSearchSentence = searchSentence;
    },
    SET_CURRENT_RATINGS(state, ratings) {
      state.currentRatings = ratings;
    },
    RESTORE_TOKEN(state) {
      const tokenString = localStorage.getItem("token");
      const userString = localStorage.getItem("user");
      if (tokenString) {
        const tokenData = JSON.parse(tokenString);
        this.state.token = tokenData;
        const userData = JSON.parse(userString);
        this.state.userInfo = userData;
        console.log(userData);
      }
    },
    SET_MEAN_RATING(state, meanRating) {
      state.meanRating = meanRating;
    },
  },
  actions: {
    resetState({ commit }) {
      commit("RESET_STATE");
    },
    storeUser({ commit }, userInfo) {
      commit("ADD_USER", userInfo);
      localStorage.setItem("user", JSON.stringify(userInfo));
    },
    storeToken({ commit }, token) {
      commit("ADD_TOKEN", token);
      localStorage.setItem("token", JSON.stringify(token));
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
    async getAllRatings({ commit }, userId) {
      let ratings = await getAllRatings(userId, this.state.token);

      commit("SET_CURRENT_RATINGS", ratings);
    },
    async storeMeanRating({ commit }) {
      let meanRating = await getMeanRating(
        this.state.userInfo.userId,
        this.state.token
      );
      commit("SET_MEAN_RATING", meanRating);
    },
  },
  modules: {},
});
