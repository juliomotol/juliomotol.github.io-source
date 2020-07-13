import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import preferences from './modules/preferences';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        preferences,
    },
    plugins: [
        createPersistedState({
            key: 'jm',
            paths: ['preferences'],
        }),
    ],
});
