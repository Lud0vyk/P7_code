<template>
  <nav>
    <router-link to="/">Home</router-link>
    <!--<router-link v-if=logged=true to="/add">Add Publication</router-link> |-->
    <router-link to="/add" v-if="this.user == true" >Add</router-link>
    <router-link to="/sign_up">Sign up</router-link>
    <router-link to="/login">Login</router-link>
    <!-- peut être plus tard 
    <router-link to="{ name: 'publi', params: { id: #### }}">Mes publications</router-link> -->
  </nav>
  <router-view />
</template>

<script>
export default {

  data() {
    return {
      user: ''
    }
  },
  mounted() {
    if (sessionStorage.user) {
      this.user = true;
      
    } else {
      this.user = false;
     //window.location.reload();
    }
  }
}
</script>

<style lang="scss">

#app {
  font-family: Lato, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // Tertiaire : #4E5166
  color: #4E5166;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    margin-right: 5%;
    text-decoration: none;

    &.router-link-exact-active {
      // Primaire : #FD2D01
      color: #FD2D01;
    }
    &:hover {
      // Secondaire : #FFD7D7
      color: #FFD7D7;
    }
  }
}

img {
  max-width: 300px;
}

.form-row {
    display: wrap;
    flex-wrap: wrap;
    justify-content: center;
    margin: 15px;
}

.button {
  border-radius: 10px;
  min-height: 4em;
  min-width: 90px;
  padding: 0.7em 3em 0.7em 3em  ;
  font-weight: bold;
  font-size: 0.9em;
  background-color: #2c3e50;
  color: #eee;

  &--disable
  {
    background-color: #FFD7D7;
    color: #2c3e50;
    cursor: not-allowed;
    pointer-events: none;
  }

  @media (max-width: 768px) {
	.card {
		width: auto;
	}
}
}

</style>
