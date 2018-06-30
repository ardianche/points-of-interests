import Vue from 'vue';
export default {
	SET_SEARCH_RESULTS(state, payload) {
		Vue.set(state, 'results',payload);
	},
	SET_PHOTOS(state,payload){
		state.photos = payload;
	},
	CHANGE_STEP(state,payload){
		state.current_step = payload;
	},
	SET_LOADING(state,payload){
		state.loading = payload;
	},
}
