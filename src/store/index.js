import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import alert from './modules/alert';
import preferences from './modules/preferences';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {},
	mutations: {},
	actions: {},
	modules: {
		alert,
		preferences
	},
	plugins: [
		createPersistedState({
			key: 'jm',
			paths: ['preferences']
		})
	]
});
