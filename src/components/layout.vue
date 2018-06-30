<template>
  <div class="layout-wrapper">
    <div class="header">
      <span>UrSpot</span>
    </div>
    <div class="layout-content">
      <keep-alive>
        <nearby-search v-if="current_step === 'search'" style="height:100%;"></nearby-search>
        <search-results v-if="current_step === 'results'" style="height:100%;"></search-results>
      </keep-alive>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
import nearbySearch from './search.vue';
import searchResults from './results.vue';
export default {
  data: () => ({
  }),
  components: {
    nearbySearch,
    searchResults,
  },
  computed:{
    ...mapState({
      'current_step' : state => state.current_step,
    }),
  },
  methods: {
    ...mapActions({
      'findPlaces' : 'searchNearByPlaces',
    }),
  },
};

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.pac-container {
  background-color: transparent;
}

.pac-item {
  color: white;
  font-size: 1rem;
}

.pac-item:hover {
  color: black;
}

.pac-item-query {
  display: none;
}

#map>input {
  color: white;
}

.layout-wrapper {
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  background: url('../assets/dawn.jpg');
  background-size: cover;
}

.header {
  padding: 25px 60px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: center;
  background: linear-gradient(#1f5784, #0073a7);
  color: white;
}

.header>span {
  font-size: 2.3rem;
  font-weight: 500;
}

.layout-content {
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

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

.search-box>.input {
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

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

</style>
