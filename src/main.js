import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const app = createApp(App).use(store).use(router).mount("#app");
app.component("Date-picker", Datepicker);
