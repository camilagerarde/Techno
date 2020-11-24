<template>
  <div>
    <div v-if="loading">
      <PageLoading />
    </div>
    <transition>
      <div v-if="data">
        <h2>{{ data.nome }}</h2>
        <div class="video">
          <iframe
            :src="`https://www.youtube.com/embed/${data.youtube}`"
            frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          >
          </iframe>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import getData from "@/mixins/getData.js";

export default {
  name: "aula",
  props: ["aula"],
  mixins: [getData],
  created() {
    this.getData(`/aula/${this.aula}`);
  },
  beforeRouteUpdate(to, from, next) {
    this.getData(`/aula/${to.params.aula}`);
    next();
  }
};
</script>

<style>
.video {
  padding-bottom: 56.25%;
  position: relative;
}
.video iframe {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
</style>
