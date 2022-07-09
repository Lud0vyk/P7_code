<template>
  <div class="home">
    <img alt="logo groupomania" src="../assets/icon-left-font.png">
    <userAdd/>
  </div>
</template>


<script>

import userAdd from '@/components/Add.vue';

export default {

  name: 'AddView',
    components: {
    userAdd
  }
 
}
</script>