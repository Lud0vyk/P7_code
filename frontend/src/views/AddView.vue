<template>
  <div class="home">
    <LogoVue/>
    <userAdd/>
  </div>
</template>


<script>

import LogoVue from '@/components/Logo.vue';
import userAdd from '@/components/Add.vue';

export default {

  name: 'AddView',
    components: {
    userAdd,
    LogoVue
  }
 
}
</script>