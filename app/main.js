import Vue from "nativescript-vue";
import orientation from "nativescript-orientation";

import App from "./components/App";

//import store from "./store";

Vue.config.silent = false;

new Vue({
  //store,
  render: (h) => h("frame", [h(App)]),
  mounted() {
    setTimeout(() => {
      orientation.setOrientation("portrait");
      orientation.disableRotation();
    });
  },
}).$start();
