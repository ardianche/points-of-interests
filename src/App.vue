<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App'
};

</script>
<style>
html,body{
  height: 100%;
}

body {
  margin: 0px;
  padding: 0px;
}

#app {
  font-family: 'Comfortaa', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

</style>
