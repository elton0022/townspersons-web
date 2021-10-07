<template>
  <div>
    <Navtools
      :enabled-back="true"
      :register="false"
      title-page="Novo Munícipe"
    />
    <div class="content">
      <v-container>
        <div class="form">
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
                :rules="cpfRules"
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
              <BirthDate
                @change="(value) => (townsperson.birth_date = value)"
              />
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
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="address.public_place"
                label="Logradouro"
                :rules="rules"
                hide-details="auto"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
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
            <v-col cols="12" sm="2">
              <v-text-field
                v-model="address.complement"
                label="Complemento"
                :rules="rules"
                hide-details="auto"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="2">
              <v-text-field
                v-model="address.uf"
                label="UF"
                :rules="rules"
                hide-details="auto"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="2">
              <v-text-field
                v-model="address.code_IBGE"
                label="Código de IBGE"
                :rules="rules"
                hide-details="auto"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="2" align="left">
              <v-btn
                :loading="loading"
                :disabled="loading"
                color="primary"
                id="button-save"
                large
                @click="addTownsperson()"
              >
                Salvar
                <v-icon dark right> mdi-checkbox-marked-circle </v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
import Navtools from "../components/Navtools.vue";
import BirthDate from "../components/BirthDate.vue";
import emptyPhoto from "../assets/icons/emptyPhoto.png";
import { apiViaCEP, api } from "../config/api";
export default {
  name: "FormTownsperson",
  data() {
    return {
      loading: false,
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
      cpfRules: [
        (value) => !!value || "Não pode ser vazio",
        (value) => value.length === 11 || "Digite os 11 caracteres",
      ],
    };
  },
  components: {
    Navtools,
    BirthDate,
  },
  methods: {
    async addTownsperson() {
      const formPersonalData = Object.values(this.townsperson);
      const formAdress = Object.values(this.address);

      if (formPersonalData.includes("") || formAdress.includes("")) {
        alert("Alguns Campos estão vazios");
      } else {
        let data = new FormData();
        let addressText = JSON.stringify(this.address);

        data.append("photo", this.townsperson.photo);
        data.append("name", this.townsperson.name);
        data.append("cpf", this.townsperson.cpf);
        data.append("cns", this.townsperson.cns);
        data.append("email", this.townsperson.email);
        data.append("birth_date", this.townsperson.birth_date);
        data.append("phone", this.townsperson.phone);
        data.append("status", this.townsperson.status);
        data.append("address", addressText);

        let config = {
          header : {
            'Content-Type' : 'multipart/form-data'
          }
        }
        const response = await api.post("/townsperson", data, config);
        if (!response.data || !response) {
          alert(response);
        } else {
          alert("Adicionado!!");
        }
        
      }
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
      const [day, month, year] = date.split("/");
      return `${year}-${month}-${day}`;
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

#button-save {
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

.form {
  padding: 0 40px 0 40px;
}
</style>