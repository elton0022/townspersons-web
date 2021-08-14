<template>
  <div>
    <div class="nav-tools">
      <div class="title-page">
        <img v-if="enabledBack" class="back-icon" v-on:click="backPage()" :src="backSvg" alt="back"  />
        <h2>{{ titlePage }}</h2>
      </div>
      <button v-if="register" v-on:click="changePage()" class="register">
        Novo
      </button>
    </div>
  </div>
</template>

<script>
import back from "../assets/icons/back.svg";

export default {
  name: "Navtools",
  data() {
    return {
      backSvg: back,
    };
  },
  props: {
    enabledBack: {
      type: Boolean,
      required: true,
      default: false,
    },
    titlePage: {
      type: String,
      required: true,
      default: "",
    },
    register: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  methods: {
    changePage() {
      this.$router.push('new-townsperson')
    },
    backPage() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.nav-tools {
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.nav-tools .back-icon{
  cursor: pointer;
}

.nav-tools .title-page {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.nav-tools .title-page img {
  margin-right: 23px;
  color: #0000;
  box-shadow: -4px -4px 10px rgba(0, 0, 0, 0.1), 4px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

.nav-tools .register {
  width: 100%;
  max-width: 200px;
  padding: 20px;
  height: 30px;
  background-color: #2c3e50;
  color: #ffff;
  font-weight: bold;
  font-size: 17px;
  text-align: center;
  border: 2px solid #2c3e50; 
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.register:hover{
    background-color: #336394;
    border-color: #336394;
}

</style>