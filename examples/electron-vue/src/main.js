import Vue from "vue";
import App from "./App.vue";
import "./styles.css";

import { setupGrammarlyConnectedAccounts } from './grammarlyConnectedAccounts'

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

setupGrammarlyConnectedAccounts()