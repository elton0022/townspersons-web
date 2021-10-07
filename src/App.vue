<template>
  <v-app id="app" :theme="theme">
    <Header />
    <div class="pages">
      <router-view />
    </div>
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: {
    Header,
  },
  data() {
    return {
      theme: "light",
    };
  },
  methods: {
    toggleTheme: () =>
      (this.theme.value = this.theme.value === "light" ? "dark" : "light"),
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
  height: 1000px;
  margin-top: 20px;
  padding: 24px;
}
.pages .content {
  width: 100%;
  margin-top: 10px;
  max-height: 1000px;
  box-shadow: -4px -4px 10px #0000001a, 4px 4px 10px #0000001a;
  border-radius: 5px;
}
</style>