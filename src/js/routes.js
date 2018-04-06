export const routes = [
	{ path: '', component: require('./pages/index.vue'), children: [
		{ path: '', component: require('./pages/dashboard'), name: 'dashboard' }
	]},

	{ path: '*', component: require('./pages/errors/404.vue') }
];