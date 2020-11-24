<template>
  <div>
    <div v-if="loading">
      <PageLoading />
    </div>
    <transition>
      <div v-if="data">
        <h1>{{ data.titulo }}</h1>
        <p>{{ data.descricao }}</p>
        <ul>
          <li
            class="contato"
            v-for="(tipo, index) in data.contato"
            :key="index"
          >
            <span>{{ index }}:</span> {{ tipo }}
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import getData from "@/mixins/getData.js";

export default {
  name: "contato",
  mixins: [getData],
  created() {
    this.getData("/contato");
  }
};
</script>

<style scoped>
.contato {
  text-transform: capitalize;
}
.contato span {
  font-weight: bold;
}
</style>
