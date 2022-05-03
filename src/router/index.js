import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RegistrationComponent from "@/components/RegistrationComponent";
import LoginComponent from "@/components/LoginComponent";
import AddItemComponent from "@/components/AddItemComponent";
import ProductDetails from "@/views/ProductDetails";
import RequestComponent from "@/components/RequestComponent";
import MyProfile from "@/views/MyProfile";
import MyAds from "@/views/MyAds";
import MyRentals from "@/views/Rentals/MyRentals";
import RentalsReceived from "@/views/RentalsReceived";
import AddFeedbackWebPageComponent from "@/components/AddFeedbackWebPageComponent";
import FeedbackView from "@/views/FeedbackView";
import EditUserData from "@/components/EditUserData";
import UserView from "@/views/UserView";
import FAQView from "@/views/FAQView";
import RentalDetails from "@/views/RentalDetails";
import SearchedItems from "@/views/SearchedItems";
import MessageView from "@/views/MessageView";
import NotFoundView from "@/views/NotFoundView";
import RatingsView from "@/views/RatingsView";
import GiveRatingView from "@/views/GiveRatingView";
import AllChatsView from "@/views/AllChats/AllChatsView";
import RentalsPending from "@/views/Rentals/RentalsPending";
import RentalsActive from "@/views/Rentals/RentalsActive";
import RentalsFinished from "@/views/Rentals/RentalsFinished";
import AllChats from "@/views/AllChats/AllChats";
import ChatsPending from "@/views/AllChats/ChatsPending";
import ChatsActive from "@/views/AllChats/ChatsActive";
import ChatsFinished from "@/views/AllChats/ChatsFinished";

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
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
    redirect: "/my-rentals/pending",
    component: MyRentals,
    children: [
      {
        path: "/my-rentals/pending",
        name: "RentalsPending",
        component: RentalsPending,
      },
      {
        path: "/my-rentals/active",
        name: "RentalsActive",
        component: RentalsActive,
      },
      {
        path: "/my-rentals/finished",
        name: "RentalsFinished",
        component: RentalsFinished,
      },
    ],
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
    path: "/ratings",
    name: "RatingsView",
    props: true,
    component: RatingsView,
  },
  {
    path: "/chat",
    name: "MessageView",
    component: MessageView,
  },
  {
    path: "/all-chats",
    name: "AllChats",
    //redirect: "/all-chats/all",
    component: AllChatsView,
    children: [
      {
        path: "/all-chats/all",
        name: "AllChats",
        component: AllChats,
      },
      {
        path: "/all-chats/pending",
        name: "ChatsPending",
        component: ChatsPending,
      },
      {
        path: "/all-chats/active",
        name: "ChatsActive",
        component: ChatsActive,
      },
      {
        path: "/all-chats/finished",
        name: "ChatsFinished",
        component: ChatsFinished,
      },
    ],
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
  {
    path: "/:catchAll(.*)",
    name: "NotFoundView",
    component: NotFoundView,
  },
  {
    path: "/giveRating",
    name: "giveRating",
    component: GiveRatingView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
