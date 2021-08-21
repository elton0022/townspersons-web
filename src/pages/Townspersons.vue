<template>
  <div>
    <Navtools :enabled-back="false" :register="true" title-page="Lista de munícipes"/>
    <div class="content">
      <div class="page-body">
        <div v-for="person in townspersons" :key="person.id">
          <Card :townsperson="person" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import Navtools from "../components/Navtools.vue";

import { api } from "../config/api";

export default {
  name: "Townsperson",
  data() {
    return {
      townspersons: [],
    };
  },
  components: {
    Card,
    Navtools
  },
  async mounted() {
    await this.getTownspersons();
  },
  methods: {
    async getTownspersons() {
      const response = await api.get("/townsperson");
      this.townspersons = response.data;
    },
  },
};
</script>

<style>
.page-body {
  margin-top: 30px;
  display: inline-grid;
  grid-template-rows: repeat(3, 200px);
  grid-template-columns: repeat(3, 200px);
  grid-gap: 90px;
}
</style>