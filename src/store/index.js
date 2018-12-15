import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import promotions from "./promotions";

const store = new Vuex.Store({
	strict: true,
	modules: {
		promotions,
	},
});

export default store;
