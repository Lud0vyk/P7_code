<template>
  <div class="home">
    <img alt="logo groupomania" src="../assets/icon-left-font.png">
    <userSign_up/>
  </div>
</template>


<script>
//import axios from 'axios';
// @ is an alias to /src
import userSign_up from '@/components/Sign_up.vue';

export default {

  name: 'Sign_upView',
    components: {
    userSign_up
  },
  /*async created() {
    this.messages = await axios.get('http://localhost:3000/publication');
  }*/

}
</script>