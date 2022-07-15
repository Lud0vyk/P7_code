<template>
  <div class="log">
        <img alt="logo groupomania" src="../assets/icon-left-font.png">
        <publicationVue/>
  </div>
</template>

<script>
// @ is an alias to /src
import publicationVue from '@/components/Publication.vue'

export default {

  name: 'PublicationView',
    components: {
    publicationVue
  }
}
</script>