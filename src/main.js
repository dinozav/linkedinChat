import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as firebase from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyB7IWlOf1YOTmGlvZMFL48YNJlBQFKpnT8",
  authDomain: "linkedin-439b3.firebaseapp.com",
  databaseURL: "https://linkedin-439b3.firebaseio.com",
  projectId: "linkedin-439b3",
  storageBucket: "linkedin-439b3.appspot.com",
  messagingSenderId: "671282062022",
  appId: "1:671282062022:web:dda7cb0bd5deaeb401edc7"
};
Vue.config.productionTip = false;
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
