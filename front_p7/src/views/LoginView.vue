<template>
  <div class="home">
        <img alt="logo groupomania" src="../assets/icon-left-font.png">
        <identifiantsLogin/>
  </div>
</template>

<script>
//import axios from 'axios';
// @ is an alias to /src
import identifiantsLogin from '@/components/Login.vue';

export default {

  name: 'LoginView',
    components: {
    identifiantsLogin
  },
  /*async created() {
    this.messages = await axios.get('http://localhost:3000/publication');
  }*/

}
</script>