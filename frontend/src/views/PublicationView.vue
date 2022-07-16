<template>
  <div class="log">
    <LogoVue/>
    <publicationVue/>
  </div>
</template>

<script>

import LogoVue from '@/components/Logo.vue';
import publicationVue from '@/components/Publication.vue'

export default {

  name: 'PublicationView',
    components: {
    publicationVue,
    LogoVue
  }
}
</script>