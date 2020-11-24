<template>
  <div id="app">
    <HeaderPrincipal />
    <router-view class="container" />
  </div>
</template>

<script>
import HeaderPrincipal from "@/components/HeaderPrincipal.vue";

export default {
  components: {
    HeaderPrincipal
  }
};
</script>

<style>
body {
  color: #234;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

a {
  color: #234;
  font-weight: bold;
  text-decoration: none;
}

a.router-link-active {
  color: #4b8;
}

img {
  max-width: 100%;
}

.container {
  margin: 0 auto;
  max-width: 75%;
  padding: 20px;
}

.v-enter {
  opacity: 0;
  transform: translate3d(-20px, 0, 0);
}

.v-enter-active {
  transition: all 0.3s;
}

.conteudo {
  display: grid;
  grid-template-columns: 1fr minmax(200px, 40%);
  grid-gap: 30px;
}

@media screen and (max-width: 400px) {
  .conteudo {
    display: block;
  }
}
</style>
