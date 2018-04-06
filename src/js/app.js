require('./env');

require('./bootstrap');

// Axios
window.axios = require('axios');

// intercept all outgoing requests to our api server url and attach the token if present.
window.axios.interceptors.request.use(function (config) {
    config.url = API_SERVER_URL + config.url;
    config.headers['Authorization'] = 'Bearer ' + localStorage.getItem(LOCAL_STORAGE_PREFIX + 'token');

    return config;
}, function (error) {

    return Promise.reject(error);
});

// Set up vue
window.Vue = require('vue');

// Components
require('./components');

//use Vue Router
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// import and initialize our routes
const { routes } = require('./routes');

window.router = new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
	
	next();
});
// My auth module
import { Auth } from './modules/auth/auth';
Vue.use(Auth);

// vuex
import { store } from './store/store';
Vue.use(store);

// start vue instance
const app = new Vue({
    router,
    store
}).$mount('#app'); 