<template>
  <div class="home">
    <LogoVue/>
    <HomePage/>
  </div>
</template>


<script>
// @ is an alias to /src
import LogoVue from '@/components/Logo.vue';
import HomePage from '@/components/Home.vue';

export default {

  name: 'HomeView',
    components: {
    HomePage,
    LogoVue
  }
}

</script>


<style scoped lang="scss">
</style>