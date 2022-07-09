<template>
  <div class="home">
        <img alt="logo groupomania" src="../assets/icon-left-font.png">
        <Login_vue/>
  </div>
</template>

<script>
//import axios from 'axios';
// @ is an alias to /src
import Login_vue from '@/components/Login.vue';

export default {

  name: 'LoginView',
    components: {
    Login_vue
  },
  /*async created() {
    this.messages = await axios.get('http://localhost:3000/publication');
  }*/

}
</script>