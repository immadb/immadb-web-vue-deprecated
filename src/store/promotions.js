import axios from '../modules/axios';

export default {
	namespaced: true,

	state: {
		data: null,
	},

	mutations: {
		data(state, {data}) {
			state.data = data;
		},
	},

	actions: {
		async index({commit, dispatch, state, getters}, params) {
			params = Object.assign({}, params);
			const res = await axios.get('promotions', { params });
            commit('data', res);
			return getters.data;
		},
	},

	getters: {
		data(state) {
			return state.data;
		},
	},
};
