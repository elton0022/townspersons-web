<template>
  <div>
    <Navtools
      :enabled-back="true"
      :register="false"
      title-page="Novo Munícipe"
    />
    <div class="content">
      <v-container>
        <v-row>
          <div class="select-photo">
            <img id="photo" :src="previewPhoto" alt="Foto do Perfil" />
            <v-file-input
              @change="changePhoto"
              accept="image/png, image/jpeg, image/bmp"
              placeholder="Escolha uma Foto"
              prepend-icon="mdi-camera"
              label="Foto do Perfil"
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
              color="primary"
              v-model="townsperson.name"
              label="Nome"
              :rules="rules"
              hide-details="auto"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="2">
            <v-text-field
              v-model="townsperson.cpf"
              label="CPF"
              :rules="rules"
              hide-details="auto"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="2">
            <v-text-field
              v-model="townsperson.cns"
              label="CNS"
              :rules="rules"
              hide-details="auto"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="2">
            <v-text-field
              v-model="townsperson.status"
              label="Status"
              :rules="rules"
              hide-details="auto"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="townsperson.email"
              label="Email"
              :rules="rules"
              hide-details="auto"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="3">
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="dateFormatted"
                  label="Data de nascimento"
                  prepend-icon="mdi-calendar"
                  @blur="date = parseDate(dateFormatted)"
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="date"
                :active-picker.sync="activePicker"
                :max="
                  new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                    .toISOString()
                    .substr(0, 10)
                "
                min="1950-01-01"
                @change="save"
                @input="menu = false"
              ></v-date-picker>
            </v-menu>
          </v-col>
          <v-col cols="12" sm="3">
            <v-text-field
              v-model="townsperson.phone"
              label="Telefone"
              :rules="rules"
              hide-details="auto"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col align="left" cols="12" sm="6">
            <h3>Endereço</h3>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              @change="() => (address.cep.length === 8 ? getCEP() : '')"
              v-model="address.cep"
              label="CEP"
              :rules="rules"
              hide-details="auto"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="address.public_place"
              label="Logradouro"
              :rules="rules"
              hide-details="auto"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="3">
            <v-text-field
              v-model="address.district"
              label="Bairro"
              :rules="rules"
              hide-details="auto"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="3">
            <v-text-field
              v-model="address.city"
              label="Cidade"
              :rules="rules"
              hide-details="auto"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="address.complement"
              label="Complemento"
              :rules="rules"
              hide-details="auto"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="address.uf"
              label="UF"
              :rules="rules"
              hide-details="auto"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="address.code_IBGE"
              label="Código de IBGE"
              :rules="rules"
              hide-details="auto"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col align="center">
            <v-btn
              :loading="loading"
              :disabled="loading"
              color="primary"
              class="ma-2 white--text"
              @click="loader = 'loading'"
            >
              Salvar
              <v-icon dark right> mdi-checkbox-marked-circle </v-icon>
            </v-btn>
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
import { apiViaCEP } from "../config/api";
export default {
  name: "FormTownsperson",
  data() {
    return {
      valid: true,
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      activePicker: null,
      menu: false,
      dateFormatted: null,
      emptyPhoto,
      previewPhoto: emptyPhoto,
      townsperson: {
        name: "",
        cpf: "",
        cns: "",
        email: "",
        birth_date: null,
        phone: "",
        photo: null,
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
  watch: {
    menu(val) {
      val && setTimeout(() => (this.activePicker = "YEAR"));
    },
    date() {
      this.dateFormatted = this.formatDate(this.date);
    },
  },
  methods: {
    addTownsperson() {
      //const response = await api.post("/townsperson");
      //this.townspersons = response.data;
      const [day, month, year] = this.dateFormatted.split("/");
      this.townsperson.birth_date = `${year}-${month}-${day}`;
      console.log(this.townsperson);
    },
    changePhoto() {
      var fr = new FileReader();
      if (this.townsperson.photo) {
        fr.onload = function () {
          document.getElementById("photo").src = fr.result;
        };
        fr.readAsDataURL(this.townsperson.photo);
      } else {
        document.getElementById("photo").src = emptyPhoto;
      }
    },
    save(date) {
      this.$refs.menu.save(date);
    },
    async getCEP() {
      const { data } = await apiViaCEP.get(`${this.address.cep}/json/`);
      console.log(data);
      if (!data.erro) {
        this.address.public_place = data.logradouro;
        this.address.district = data.bairro;
        this.address.complement = data.complemento;
        this.address.code_IBGE = data.ibge;
        this.address.city = data.localidade;
        this.address.uf = data.uf;
      } else {
        alert("O CEP pode estar incorreto");
      }
    },
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${day}/${month}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
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
  max-width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 5px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
    drop-shadow(-4px -4px 10px rgba(0, 0, 0, 0.05));
}
</style>