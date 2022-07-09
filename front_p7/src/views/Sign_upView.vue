<template>
  <div class="home">
    <img alt="logo groupomania" src="../assets/icon-left-font.png">
    <Sign_up_vue/>
  </div>
</template>


<script>
//import axios from 'axios';
// @ is an alias to /src
import Sign_up_vue from '@/components/Sign_up.vue';

export default {

  name: 'Sign_upView',
    components: {
    Sign_up_vue
  },
  /*async created() {
    this.messages = await axios.get('http://localhost:3000/publication');
  }*/

}
</script>