<template>
  <div>
    <div class="card">
      <img
        class="photo"
        :src="`${api_url}/photos/${townsperson.photo}`"
        alt="photo"
      />
      <div class="personal-information">
        <strong class="name">{{ townsperson.name }}</strong> 
        <br/>
        <label class="contact">{{ townsperson.phone }}</label>
        <br/>
        <label class="contact">{{ townsperson.email }}</label>
      </div>
      <div class="address">
          <p>{{ townsperson.city }} - {{ townsperson.uf }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { api_url } from "../../env";

export default {
  name: "Card",
  data() {
    return {
      api_url,
    };
  },
  props: {
    townsperson: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style scoped>
.card {
  width: 100%;
  max-width: 200px;
  height: 230px;
  font-size: 17px;
  border-radius: 5px;
  border:1px solid #ddd;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(-4px -4px 10px rgba(0, 0, 0, 0.05));
  cursor: pointer;
}

.photo {
  width: 100%;
  max-width: 200px;
  height: 120px;
  object-fit: cover;
}

.personal-information {
    margin: 10px;
    text-align: start;
}

.personal-information .name{
    font-size: 16px;
    margin-bottom: 4px;
}

.personal-information .contact{
    font-size: 10px;
}

.address {
    font-size: 12px;
    text-align: end;
    margin: 10px;
}


</style>