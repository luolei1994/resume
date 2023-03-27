import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import storeInstance from "./store";
import ViewUIPlus from "view-ui-plus";
import "view-ui-plus/dist/styles/viewuiplus.css";

import "./assets/main.less";

import Switch from "./components/common/Switch.vue";

const app = createApp(App);

app.component("Switch", Switch);

app.use(router);

app.use(storeInstance);

app.use(ViewUIPlus);

app.mount("#app");
