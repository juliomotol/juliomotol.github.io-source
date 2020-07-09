import Vue from 'vue';
import router from './router';
import store from './store';
import { firestorePlugin } from 'vuefire';
import App from './App.vue';
import './registerServiceWorker';
import './utilities/vee-validate';

Vue.use(firestorePlugin);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
