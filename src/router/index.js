import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NotificationsComponent from "@/components/NotificationsComponent";
import RegistrationComponent from "@/components/RegistrationComponent";
import LoginComponent from "@/components/LoginComponent";
import AddItemComponent from "@/components/AddItemComponent";
import ProductDetails from "@/views/ProductDetails";
import RequestComponent from "@/components/RequestComponent";
import MyProfile from "@/views/MyProfile";
import MyAds from "@/views/MyAds";
import MyRentals from "@/views/MyRentals";
import RentalsReceived from "@/views/RentalsReceived";
import AddFeedbackWebPageComponent from "@/components/AddFeedbackWebPageComponent";
import FeedbackView from "@/views/FeedbackView";
import EditUserData from "@/components/EditUserData";
import UserView from "@/views/UserView";
import FAQView from "@/views/FAQView";
import RentalDetails from "@/views/RentalDetails";
import SearchedItems from "@/views/SearchedItems";

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/notifications",
    name: "NotificationsComponent",
    component: NotificationsComponent,
  },
  {
    path: "/registration",
    name: "RegistrationComponent",
    component: RegistrationComponent,
  },
  {
    path: "/login",
    name: "LoginComponent",
    component: LoginComponent,
  },
  {
    path: "/add-item",
    name: "AddItemComponent",
    component: AddItemComponent,
  },
  {
    path: "/product-details/{id}",
    name: "ProductDetails",
    component: ProductDetails,
  },
  {
    path: "/rental-details/",
    name: "RentalDetails",
    component: RentalDetails,
  },
  {
    path: "/request-hire",
    name: "RequestComponent",
    component: RequestComponent,
  },
  {
    path: "/my-profile",
    name: "MyProfile",
    component: MyProfile,
  },
  {
    path: "/add-feedbackWebPage",
    name: "AddFeedbackWebPageComponent",
    component: AddFeedbackWebPageComponent,
  },
  {
    path: "/get-feedbackWebPage",
    name: "FeedbackView",
    component: FeedbackView,
  },
  {
    path: "/my-ads",
    name: "MyAds",
    component: MyAds,
  },
  {
    path: "/my-rentals",
    name: "MyRentals",
    component: MyRentals,
  },
  {
    path: "/rentals",
    name: "RentalsReceived",
    component: RentalsReceived,
  },
  {
    path: "/users",
    name: "UserView",
    component: UserView,
  },
  {
    path: "/faq",
    name: "faq",
    component: FAQView,
  },
  {
    path: "/edit-userdata",
    name: "EditUserData",
    component: EditUserData,
  },
  {
    path: "/searchedItems",
    name: "SearchedItems",
    component: SearchedItems,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
