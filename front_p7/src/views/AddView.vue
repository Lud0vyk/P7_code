<template>
  <div class="home">
    <img alt="logo groupomania" src="../assets/icon-left-font.png">
    <userAdd/>
  </div>
</template>


<script>
//import axios from 'axios';
// @ is an alias to /src
import userAdd from '@/components/Sign_up.vue';

export default {

  name: 'AddView',
    components: {
    userAdd
  },
  /*async created() {
    this.messages = await axios.get('http://localhost:3000/publication');
  }*/
 
}
</script>