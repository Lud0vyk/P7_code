<template>
  <div class="log">
        <img alt="logo groupomania" src="../assets/icon-left-font.png">
        <publicationS/>
  </div>
</template>

<script>
// @ is an alias to /src
import publicationS from '@/components/Publication.vue'

export default {

  name: 'PublicationView',
    components: {
    publicationS
  }
}
</script>