<template>
  <div class="home">
    <LogoVue/>
    <Login_vue/>
  </div>
</template>

<script>

import LogoVue from '@/components/Logo.vue';
import Login_vue from '@/components/Login.vue';

export default {

  name: 'LoginView',
    components: {
    Login_vue,
    LogoVue
  }
}
</script>