<template>
  <div class="home">
    <img alt="logo groupomania" src="../assets/icon-left-font.png">
    <HomePage/>
  </div>
</template>


<script>
// @ is an alias to /src
import HomePage from '@/components/Home.vue'

export default {

  name: 'HomeView',
    components: {
    HomePage
  }
}

</script>


<style scoped lang="scss">
</style>