import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		isFullPage: false
	},
	mutations: {
		toggleFullPage: (state, value) => state.isFullPage = typeof value === 'boolean' ? value : !state.isFullPage,
	},
	actions: {
	},
	modules: {
	}
})
