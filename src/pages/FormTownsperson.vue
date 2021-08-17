<template>
  <div>
    <Navtools
      :enabled-back="true"
      :register="false"
      title-page="Novo munícipe"
    />
    <div class="content">
      <v-container class="grey lighten-5">
        <v-row>
          <div class="photo">
            <img
              style="width: 100px; height: 100px"
              :src="previewPhoto"
              alt="asdsdasd"
            />
            <v-file-input
              accept="imarulesge/png, image/jpeg, image/bmp"
              placeholder="Clique aqui"
              prepend-icon="mdi-camera"
              label="Escolha uma foto"
              v-model="townsperson.photo"
            ></v-file-input>
          </div>
        </v-row>
        <v-row>
          <v-col align="left" cols="12" sm="6">
            <h3>Dados Pessoais</h3>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="townsperson.name"
              label="Nome"
              :rules="rules"
              hide-details="auto"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="3">
            <v-text-field
              v-model="townsperson.cpf"
              label="CPF"
              :rules="rules"
              hide-details="auto"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="3">
            <v-text-field
              v-model="townsperson.cns"
              label="CNS"
              :rules="rules"
              hide-details="auto"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <button v-on:click="addTownsperson()" class="register">Salvar</button>
  </div>
</template>

<script>
import Navtools from "../components/Navtools.vue";

//import api from "../config/api";

export default {
  name: "FormTownsperson",
  data() {
    return {
      previewPhoto: null,
      townsperson: {
        name: "",
        cpf: "",
        cns: "",
        email: "",
        birth_date: "",
        phone: "",
        photo: '../icons/logo.svg',
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
      rules: [(value) => !!value || "Não pode ser vazio"],
    };
  },
  components: {
    Navtools,
  },
  methods: {
    addTownsperson() {
      //const response = await api.post("/townsperson");
      //this.townspersons = response.data;
      console.log(this.townsperson);
    },
    /*readURL(input) {
      if (input) {
        var reader = new FileReader();

        reader.onload = function (e) {
          this.previewPhoto = e.target.result;
        };

        reader.readAsDataURL(input);
      }
    },*/
  },
};
</script>

<style scoped>
.photo {
  width: 400px;
  height: 100px;
  margin: 0 auto;
}
</style>