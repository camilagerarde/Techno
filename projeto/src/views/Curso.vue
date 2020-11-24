<template>
  <div>
    <div v-if="loading">
      <PageLoading />
    </div>
    <transition>
      <div class="conteudo" v-if="data">
        <section>
          <h1>{{ data.nome }}</h1>
          <h4>
            Total de aulas: {{ data.totalAulas }} | Horas: {{ data.horas }}h
          </h4>
          <p>{{ data.descricao }}</p>
          <h2>Aulas:</h2>
          <ul class="aulas">
            <li v-for="aula in data.aulas" :key="aula.id">
              <router-link :to="{ name: 'aula', params: { aula: aula.id } }">
                {{ aula.nome }}
              </router-link>
            </li>
          </ul>
          <router-link class="btn-curso" tag="button" to="/cursos">Voltar para cursos</router-link>
        </section>
        <router-view></router-view>
      </div>
    </transition>
  </div>
</template>

<script>
import getData from "@/mixins/getData.js";

export default {
  name: "Curso",
  props: ["curso"],
  mixins: [getData],
  created() {
    this.getData(`/curso/${this.curso}`);
  }
};
</script>

<style scoped>
.aulas li a {
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  display: block;
  margin-bottom: 10px;
  padding: 20px;
}

.aulas li a.router-link-active {
  background: #4b8;
  color: #fff;
}

.conteudo ul {
  padding-bottom: 40px;
}

.btn-curso {
  background: #234;
  border: none;
  border-radius: 4px;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.1);
  color: #fff;
  cursor: pointer;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 1rem;
  margin: 10px 0 40px;
  padding: 15px 30px;
}
</style>
