import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import storeInstance from "./store";

import "./assets/main.less";

import Switch from "./components/common/Switch.vue";

const app = createApp(App);

app.component("Switch", Switch);

app.use(router);

app.use(storeInstance);

app.mount("#app");
