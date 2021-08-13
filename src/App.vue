<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import api from './config/api';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  async mounted(){
    await this.getTownspersons();
  },
  methods:{
    async getTownspersons(){
      const townspersons = await api.get('/townsperson');
      console.log(townspersons);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
