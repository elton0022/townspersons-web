<template>
  <div>
    <Navtools
      :enabled-back="true"
      :register="false"
      title-page="Novo munícipe"
    />
    <div class="content">
      <div class="form">
        <div class="row">
          <div class="input-group">
            <label for="input-name">Nome*</label>
            <br />
            <input
              style="width: 400px"
              class="input-name"
              v-model="townsperson.name"
              placeholder="Nome"
              required
              type="text"
            />
          </div>
          <div class="input-group">
            <label for="input-cpf">CPF*</label>
            <br />
            <input
            style="width: 100%"
              class="input-cpf"
              v-model="townsperson.cpf"
              placeholder="Nome"
              required
              type="text"
            />
          </div>
        </div>
        <button v-on:click="addTownsperson()" class="register">Salvar</button>
      </div>
    </div>
  </div>
</template>

<script>
import Navtools from "../components/Navtools.vue";

//import api from "../config/api";

export default {
  name: "FormTownsperson",
  data() {
    return {
      townsperson: {
        name: "",
        cpf: "",
        cns: "",
        email: "",
        birth_date: "",
        phone: "",
        status: "",
      },
      address: {
        cep: "",
        public_place: "",
        complement: "",
        district: "",
        city: "",
        uf: "",
        code_IBGE: "",
      },
    };
  },
  components: {
    Navtools,
  },
  mounted() {
   
  },
  methods: {
    addTownsperson() {
      //const response = await api.post("/townsperson");
      //this.townspersons = response.data;
      console.log(this.townsperson);
    },
  },
};
</script>

<style scoped>
.form {
  width: 100%;
  max-width: 700px;
  border: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.row {
  display: flex;
  flex-direction: row;
}

.input-group {
  text-align: left;
}

.input-group label {
  left: 0;
}

.input-group input {
  height: 20px;
  border-radius: 5px;
  padding: 10px;
  font-size: 15px;
}

.register {
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
</style>