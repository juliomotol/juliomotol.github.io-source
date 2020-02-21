import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import alert from '../../store/alert';
import preferences from '../../store/preferences';

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
