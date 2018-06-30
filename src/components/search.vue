<style scoped>
.search-box {
	min-width: 670px;
	max-width: 670px;
	min-height: 250px;
	max-height: 250px;
	background-color: transparent;
	border: 1px solid whitesmoke;
	border-radius: 4px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	box-shadow: 0px 0px 17px 0px #000000;
}

.search-box>span {
	font-size: 1.1rem;
	color: white;
}

.search-box> div > .input {
	margin-top: 10px;
	border: 0px;
	border-bottom: 1px solid whitesmoke;
	background-color: transparent;
	outline: none;
	color: white;
	font-size: 1.5rem;
}

input[type="text"] {
	width: 100%;
	border: unset;
	background-color: transparent;
	outline: none;
	color: white;
	font-size: 1.9rem;
}

.loader svg {
	color: white;
	animation: spin 2s linear infinite;
}

@keyframes spin {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}

</style>
<template>
	<div class="search-box">
		<div v-if="!loading">
			<span style="color:white;font-weight:700;">Find your spot...</span>
			<div class="input" style="position:relative;display:flex;align-items:center;">
				<vue-google-autocomplete id="map" ref="address" classname="input" placeholder="" v-on:placechanged="getAddressData" v-on:error="handleError">
				</vue-google-autocomplete>
				<search @click="searchFor()" style="position:absolute:right:0px; color:white;stroke:white;"></search>
			</div>
		</div>
		<div class="loader" v-if="loading">
			<loader></loader>
		</div>
	</div>
</template>
<script>
import { SearchIcon, LoaderIcon } from 'vue-feather-icons';
import VueGoogleAutocomplete from 'vue-google-autocomplete';
import { mapActions, mapState, mapMutations } from 'vuex';
export default {
	data: () => ({
		address: null,
		google_key: 'AIzaSyAXF8ZWXjzr059GfLZCdb8Q6mc0wkixZEI',
		photos: [],
	}),
	components: {
		Search: SearchIcon,
		VueGoogleAutocomplete,
		Loader: LoaderIcon,
	},
	computed: {
		...mapState({
			'results': state => state.results,
			'loading': state => state.loading,
		}),
	},
	methods: {
		...mapActions({
			'findPlaces': 'searchNearByPlaces',
		}),
		...mapMutations({
			'SET_LOADING': 'SET_LOADING',
		}),
		/**
		 * When the location found
		 * @param {Object} addressData Data of the found location
		 * @param {Object} placeResultData PlaceResult object
		 * @param {String} id Input container ID
		 */
		getAddressData(addressData, placeResultData, id) {
			this.address = addressData;
		},

		handleError(error) {
			alert(error)
		},
		searchFor() {
			console.log("latitude: ", this.address.latitude);

			console.log("longitude: ", this.address.longitude);

			let payload = {
				latitude: this.address.latitude,
				longitude: this.address.longitude,
				key: this.google_key,
			}
			this.SET_LOADING(true);
			this.findPlaces(payload);
			// this.$http.get('https://api.yelp.com/v3/businesses/search?location=706+Mission+St,+San+Francisco,+CA,+US&term=burrito').then((response) => {
			//   console.log("RESPONSE: ", response.data);
			// });
		},
	}
};

</script>
