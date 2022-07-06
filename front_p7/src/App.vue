<template>
  <nav>
    <router-link to="/">Home</router-link>
    <!--<router-link v-if=logged=true to="/add">Add Publication</router-link> |-->
    <router-link to="/about">About</router-link>
    <router-link to="/add">Add</router-link>
    <router-link to="/sign_up">Sign up</router-link>
    <router-link to="/login">Login</router-link>
    <!-- peut être plus tard 
    <router-link to="{ name: 'publi', params: { id: #### }}">Mes publications</router-link> -->
  </nav>
  <router-view />
</template>

<script>

</script>

<style lang="scss">
/* identité graphique
police d’écriture : Lato.
Couleurs :
● Primaire : #FD2D01
● Secondaire : #FFD7D7
● Tertiaire : #4E5166

*** *** *** */

#app {
  font-family: Lato, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #4E5166;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    margin-right: 5%;

    &.router-link-exact-active {
      color: #FD2D01;
    }
  }
}

img {
  width: 20%;
  min-width: 200px;
  align-items: center;
}
</style>
