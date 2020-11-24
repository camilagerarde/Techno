<template>
  <header>
    <nav>
      <div class="logo">
        <router-link to="/">Techno</router-link>
      </div>
      <ul>
        <li><router-link to="/cursos">Cursos</router-link></li>
        <li><router-link to="/contato">Contato</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderPrincipal"
};
</script>

<style scoped>
header {
  background: #234;
}

header a {
  color: #fff;
}

a.router-link-active {
  color: #4b8;
}

nav {
  align-content: space-between;
  display: flex;
  margin: 0 auto;
  max-width: 75%;
  padding: 20px;
}

.logo {
  flex: 1;
}

.logo a {
  color: #fff;
  font-size: 1.5rem;
}

ul li {
  display: inline-block;
}

li a {
  margin-left: 10px;
  padding: 0 10px;
}

@media screen and (max-width: 400px) {
  ul li {
    display: block;
    padding: 5px;
  }
}
</style>
