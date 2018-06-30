import Vue from 'vue';

const searchNearByPlaces = ({ commit, state }, payload) => {
	Vue.$http.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${payload.latitude},${payload.longitude}&radius=1500&type=restaurant&keyword=cruise&key=${payload.key}
`).then((response) => {
		commit('SET_SEARCH_RESULTS',response.data.results);
		commit('SET_LOADING', false);
		commit('CHANGE_STEP', 'results');
		console.log("RESPONSE: ", response.data.results);
	});
};

export default {
	searchNearByPlaces,
}
