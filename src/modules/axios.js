import {get} from 'lodash';
import axios from 'axios';
import qs from 'qs';

// import {Notification} from 'element-ui';
// import store from '../store';
// import config from '../config';

const api = axios.create({
	baseURL: 'http://homestead.test/api/v1',
	// baseURL: config.apiURL,
	paramsSerializer: (params) => qs.stringify(params)
});

api.interceptors.request.use(config => {
	// const auth = store.getters['user/auth'];
	// if (auth) {
    //     config.headers.common['Authorization'] = `${auth.token_type} ${auth.access_token}`;
    // }

	return config;
}, (error) => {
	return Promise.reject(error);
});

api.interceptors.response.use(res => {
	return res;
}, (error) => {
	const res = error.response;
	console.log(res);

	// if (get(res, 'config.custom')) { // if the request catches the error itself, stop global error handling.
	// 	return Promise.reject(error);
	// }

	if (get(res, 'status') === 401 && !get(res, 'config.url').endsWith('logout')) { // if token is invalid, logout
		store.dispatch('user/logout');
	}

	// Notification({
	// 	title: 'Error',
	// 	message: get(res, 'data.message'),
	// 	type: 'error'
	// });

	return Promise.reject(error);
});

export default api;
