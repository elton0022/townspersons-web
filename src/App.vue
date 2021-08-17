<template>
  <div id="app">
    <Header />
    <div class="pages">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
  padding: 0px;
}
html,
body {
  margin: 0px;
  padding: 0px;
}
.pages {
  margin-top: 20px;
  padding: 24px;
}
.pages .content {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  min-height: 500px;
  box-shadow: -4px -4px 10px #0000001a, 4px 4px 10px #0000001a;
  border-radius: 5px;
}
</style>