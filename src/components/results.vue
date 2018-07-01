<style scoped>
.grid {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-column-gap: 20px;
	grid-row-gap: 20px;
}

button {
	padding: 10px 25px;
	border: 1px solid whitesmoke;
	border-radius: 2px;
	color: white;
	font-weight: 700;
	font-size: .8rem;
	background-color:transparent;
	cursor:pointer;
}

button:hover{
	background-color: white;
	color:#0f6899;
}

</style>
<template>
	<div style="height:100%;display:flex;justify-content:center;align-items:center;flex-direction:column;">
		<div style="display: flex;
    margin: 20px 0px;justify-content:flex-start;width:100%;">
			<button @click="goBack()">
				Back
			</button>
		</div>
		<div class="grid">
			<result-card :result="hit" v-for="hit in results"></result-card>
		</div>
	</div>
</template>
<script>
import { mapMutations, mapState } from 'vuex';
import resultCard from '@/components/result-cards/result-card.vue';
export default {
	components: {
		resultCard,
	},
	computed: {
		...mapState({
			'results': state => state.results,
		}),
	},
	methods: {
		...mapMutations({
			'CHANGE_STEP': 'CHANGE_STEP'
		}),
		goBack() {
			this.$emit('ignore_auto_search',true);
			this.CHANGE_STEP('search');
		},
	},
};

</script>
