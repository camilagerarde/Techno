<template>
  <div>
    <div v-if="loading">
      <PageLoading />
    </div>
    <transition>
      <div class="conteudo" v-if="data">
        <div>
          <h1>{{ data.titulo }}</h1>
          <p>{{ data.descricao }}</p>
        </div>
        <ul class="cursos-lista">
          <li v-for="curso in data.cursos" :key="curso.id">
            <h2>
              <router-link :to="{ name: 'curso', params: { curso: curso.id } }">
                {{ curso.nome }} - {{ curso.totalAulas }} aulas |
                {{ curso.horas }}
                horas
              </router-link>
            </h2>
            <p>{{ curso.descricao }}</p>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import getData from "@/mixins/getData.js";

export default {
  name: "cursos",
  mixins: [getData],
  created() {
    this.getData("/cursos");
  }
};
</script>

<style>
.cursos-lista li {
  margin-bottom: 40px;
}
</style>
