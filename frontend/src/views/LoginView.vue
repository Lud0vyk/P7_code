<template>
  <div class="home">
        <img alt="logo groupomania" src="../assets/icon-left-font.png">
        <Login_vue/>
  </div>
</template>

<script>
// @ is an alias to /src
import Login_vue from '@/components/Login.vue';

export default {

  name: 'LoginView',
    components: {
    Login_vue
  }
}
</script>