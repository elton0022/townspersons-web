<template>
  <div class="header">
    <h2 class="name-logo">Munícipes</h2>
    <v-icon large color="primary"> mdi-city-variant </v-icon>
  </div>
</template>

<script>
import logo from "../assets/icons/logo.svg";

export default {
  name: "Header",
  data() {
    return {
      logo,
    };
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-shadow: -6px -6px 30px #435d6b40, 6px 6px 30px #00000040;
}

.header .name-logo {
  margin: 10px 10px 0 0; 
}

@media screen and (max-width: 600px) {
  .header {
    height: auto;
  }

  .header .content {
    height: auto;
    flex-direction: column;
  }

  .header .content .logo {
    margin-left: 18px;
  }

  .header .content .navigation {
    margin-top: 22px;
    justify-content: center;
  }
}
</style>