<template>
  <div class="about">
    <h1>This is an about page</h1>
    <CompteurS />
  </div>
</template>


<script>
// @ is an alias to /src
import CompteurS from '@/components/About.vue'

export default {

  name: 'AboutView',
  components: {
    CompteurS
  }
}
</script>
