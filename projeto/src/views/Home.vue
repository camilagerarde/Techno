<template>
  <div class="home">
    <div v-if="loading">
      <PageLoading />
    </div>
    <transition>
      <div class="conteudo" v-if="data">
        <div>
          <h1>Sobre a {{ data.titulo }}</h1>
          <p>{{ data.descricao }}</p>
          <router-link class="btn-cursos" tag="button" to="/cursos">
            Cursos
          </router-link>
          <div>
            <h2>Avaliações</h2>
            <ul>
              <li v-for="(avaliacao, index) in data.avaliacoes" :key="index">
                <p class="avaliacao-nome">{{ avaliacao.nome }}</p>
                <p>{{ avaliacao.descricao }}</p>
              </li>
            </ul>
          </div>
        </div>
        <img src="../assets/aprender.png" alt="Aprenda" />
      </div>
    </transition>
  </div>
</template>

<script>
import getData from "@/mixins/getData.js";
import PageLoading from "../components/PageLoading.vue";

export default {
  components: { PageLoading },
  name: "home",
  mixins: [getData],
  created() {
    this.getData("/home");
  }
};
</script>

<style scoped>
.btn-cursos {
  background: #4b8;
  border: none;
  border-radius: 4px;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.1);
  color: #fff;
  cursor: pointer;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 1rem;
  margin: 10px 0 40px;
  padding: 15px 40px;
}

.avaliacao-nome {
  text-decoration: underline;
}
</style>
