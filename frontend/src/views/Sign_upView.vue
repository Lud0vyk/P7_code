<template>
  <div class="home">
    <LogoVue/>
    <Sign_up_vue/>
  </div>
</template>


<script>

import LogoVue from '@/components/Logo.vue';
import Sign_up_vue from '@/components/Sign_up.vue';


export default {

  name: 'Sign_upView',
    components: {
    Sign_up_vue,
    LogoVue
  }
}
</script>