<template>
  <div class="header">
    <h2 class="title">Cadastro</h2>
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
  justify-content: flex-start;
  align-items: center;
  box-shadow: -6px -6px 30px #435d6b40, 6px 6px 30px #00000040;
}

.header .title {
  margin-left: 20px;
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