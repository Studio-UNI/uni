<template>
  <div id="app">
    <img src="assets/images/logo.png">
    <div class="hello">
      <router-link :to="{name:'Home'}">Accueil</router-link>
      <router-link :to="{name:'Projets'}">Projets</router-link>
      <router-link :to="{name:'Services'}">Services</router-link>
      <router-link :to="{name:'Equipe'}">Equipe</router-link>
      <router-link :to="{name:'Contact'}">Contact</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
