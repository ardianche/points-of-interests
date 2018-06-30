import state from './state.js';
import steps from './steps.js';
import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';
import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
	state,
	mutations,
	actions,
	strict: debug,
	plugins: debug ? [createLogger()] : [],
});
