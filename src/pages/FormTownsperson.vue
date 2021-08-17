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
          <div class="select-photo">
            <img
              id="photo"
              :src="emptyPhoto"
              alt="Foto do Perfil"
            />
            <v-file-input
              accept="imarulesge/png, image/jpeg, image/bmp"
              placeholder="Clique aqui"
              prepend-icon="mdi-camera"
              label="..."
              v-model="townsperson.photo"
              @change="changePhoto"
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
import emptyPhoto from "../assets/icons/emptyPhoto.png";

//import api from "../config/api";

export default {
  name: "FormTownsperson",
  data() {
    return {
      emptyPhoto,
      previewPhoto: null,
      townsperson: {
        name: "",
        cpf: "",
        cns: "",
        email: "",
        birth_date: "",
        phone: "",
        photo: "../icons/logo.svg",
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
    changePhoto() {
      var fr = new FileReader();
      if (this.townsperson.photo) {
        fr.onload = function () {
          document.getElementById("photo").src = fr.result;
        };
        fr.readAsDataURL(this.townsperson.photo);
      }else{
         document.getElementById("photo").src = emptyPhoto;
      }
    },
  },
};
</script>

<style scoped>
.select-photo {
  width: 400px;
  height: 200px;
  margin: 0 auto;
  margin-top: 30px;
}

#photo {
  width: 100%;
  max-width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 5px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(-4px -4px 10px rgba(0, 0, 0, 0.05));
}
</style>